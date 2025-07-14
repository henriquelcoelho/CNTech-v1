import { createContext, useContext, useEffect, useState } from 'react'
import { supabase, auth, profiles, USER_ROLES } from '../lib/supabase'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // Verificar sessão inicial
    const getInitialSession = async () => {
      const { session } = await auth.getSession()
      if (session?.user) {
        setUser(session.user)
        await loadUserProfile(session.user.id)
      }
      setLoading(false)
    }

    getInitialSession()

    // Listener para mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser(session.user)
          await loadUserProfile(session.user.id)
        } else {
          setUser(null)
          setProfile(null)
          setIsAdmin(false)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const loadUserProfile = async (userId) => {
    try {
      const { data: profileData, error } = await profiles.getProfile(userId)
      
      if (error && error.code === 'PGRST116') {
        // Perfil não existe, criar um novo
        const { data: newProfile, error: createError } = await profiles.createProfile(userId, {
          email: user?.email,
          full_name: user?.user_metadata?.full_name || '',
          role: USER_ROLES.USER
        })
        
        if (!createError) {
          setProfile(newProfile)
          setIsAdmin(newProfile.role === USER_ROLES.ADMIN)
        }
      } else if (!error) {
        setProfile(profileData)
        setIsAdmin(profileData.role === USER_ROLES.ADMIN)
      }
    } catch (error) {
      console.error('Erro ao carregar perfil:', error)
    }
  }

  const signIn = async (email, password) => {
    setLoading(true)
    try {
      const { data, error } = await auth.signIn(email, password)
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email, password, userData = {}) => {
    setLoading(true)
    try {
      const { data, error } = await auth.signUp(email, password, userData)
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    setLoading(true)
    try {
      const { error } = await auth.signOut()
      if (error) throw error
      setUser(null)
      setProfile(null)
      setIsAdmin(false)
      return { error: null }
    } catch (error) {
      return { error }
    } finally {
      setLoading(false)
    }
  }

  const updateProfile = async (updates) => {
    if (!user) return { error: 'Usuário não autenticado' }
    
    try {
      const { data, error } = await profiles.updateProfile(user.id, updates)
      if (error) throw error
      
      setProfile(data)
      setIsAdmin(data.role === USER_ROLES.ADMIN)
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const resetPassword = async (email) => {
    try {
      const { data, error } = await auth.resetPassword(email)
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  }

  const updatePassword = async (password) => {
    try {
      const { data, error } = await auth.updatePassword(password)
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  }

  // Funções administrativas
  const promoteToAdmin = async (userId) => {
    if (!isAdmin) return { error: 'Acesso negado' }
    
    try {
      const { data, error } = await profiles.promoteToAdmin(userId)
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  }

  const demoteToUser = async (userId) => {
    if (!isAdmin) return { error: 'Acesso negado' }
    
    try {
      const { data, error } = await profiles.demoteToUser(userId)
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  }

  const getAllUsers = async () => {
    if (!isAdmin) return { error: 'Acesso negado' }
    
    try {
      const { data, error } = await profiles.getAllUsers()
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  }

  const value = {
    // Estado
    user,
    profile,
    loading,
    isAdmin,
    isAuthenticated: !!user,
    
    // Funções de autenticação
    signIn,
    signUp,
    signOut,
    updateProfile,
    resetPassword,
    updatePassword,
    
    // Funções administrativas
    promoteToAdmin,
    demoteToUser,
    getAllUsers,
    
    // Utilitários
    hasRole: (role) => profile?.role === role,
    canAccess: (requiredRole) => {
      if (!profile) return false
      if (requiredRole === USER_ROLES.ADMIN) return isAdmin
      return true // Usuários comuns podem acessar conteúdo de usuário
    }
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

