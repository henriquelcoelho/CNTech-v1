import { createClient } from '@supabase/supabase-js'

// Configurações do Supabase
// IMPORTANTE: Substitua estas URLs e chaves pelas suas próprias do projeto Supabase
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

// Criar cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Tipos de usuário
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user'
}

// Funções de autenticação
export const auth = {
  // Fazer login com email e senha
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  // Registrar novo usuário
  signUp: async (email, password, userData = {}) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: USER_ROLES.USER, // Por padrão, novos usuários são 'user'
          ...userData
        }
      }
    })
    return { data, error }
  },

  // Fazer logout
  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Obter usuário atual
  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  },

  // Obter sessão atual
  getSession: async () => {
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  },

  // Resetar senha
  resetPassword: async (email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    })
    return { data, error }
  },

  // Atualizar senha
  updatePassword: async (password) => {
    const { data, error } = await supabase.auth.updateUser({
      password
    })
    return { data, error }
  }
}

// Funções para gerenciar perfis de usuário
export const profiles = {
  // Obter perfil do usuário
  getProfile: async (userId) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    return { data, error }
  },

  // Atualizar perfil do usuário
  updateProfile: async (userId, updates) => {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()
    return { data, error }
  },

  // Criar perfil do usuário
  createProfile: async (userId, profileData) => {
    const { data, error } = await supabase
      .from('profiles')
      .insert({
        id: userId,
        role: USER_ROLES.USER,
        created_at: new Date().toISOString(),
        ...profileData
      })
      .select()
      .single()
    return { data, error }
  },

  // Verificar se usuário é admin
  isAdmin: async (userId) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single()
    
    if (error) return false
    return data?.role === USER_ROLES.ADMIN
  },

  // Listar todos os usuários (apenas para admins)
  getAllUsers: async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  },

  // Promover usuário para admin (apenas para admins)
  promoteToAdmin: async (userId) => {
    const { data, error } = await supabase
      .from('profiles')
      .update({ role: USER_ROLES.ADMIN })
      .eq('id', userId)
      .select()
      .single()
    return { data, error }
  },

  // Rebaixar admin para usuário comum (apenas para admins)
  demoteToUser: async (userId) => {
    const { data, error } = await supabase
      .from('profiles')
      .update({ role: USER_ROLES.USER })
      .eq('id', userId)
      .select()
      .single()
    return { data, error }
  }
}

// Funções para gerenciar conteúdo (blog, eventos, etc.)
export const content = {
  // Blog posts
  getBlogPosts: async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  },

  createBlogPost: async (postData) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(postData)
      .select()
      .single()
    return { data, error }
  },

  updateBlogPost: async (postId, updates) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .update(updates)
      .eq('id', postId)
      .select()
      .single()
    return { data, error }
  },

  deleteBlogPost: async (postId) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', postId)
    return { data, error }
  },

  // Eventos
  getEvents: async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: true })
    return { data, error }
  },

  createEvent: async (eventData) => {
    const { data, error } = await supabase
      .from('events')
      .insert(eventData)
      .select()
      .single()
    return { data, error }
  },

  updateEvent: async (eventId, updates) => {
    const { data, error } = await supabase
      .from('events')
      .update(updates)
      .eq('id', eventId)
      .select()
      .single()
    return { data, error }
  },

  deleteEvent: async (eventId) => {
    const { data, error } = await supabase
      .from('events')
      .delete()
      .eq('id', eventId)
    return { data, error }
  },

  // Devocionais
  getDevotionals: async () => {
    const { data, error } = await supabase
      .from('devotionals')
      .select('*')
      .order('date', { ascending: false })
    return { data, error }
  },

  createDevotional: async (devotionalData) => {
    const { data, error } = await supabase
      .from('devotionals')
      .insert(devotionalData)
      .select()
      .single()
    return { data, error }
  },

  updateDevotional: async (devotionalId, updates) => {
    const { data, error } = await supabase
      .from('devotionals')
      .update(updates)
      .eq('id', devotionalId)
      .select()
      .single()
    return { data, error }
  }
}

// Listener para mudanças de autenticação
export const onAuthStateChange = (callback) => {
  return supabase.auth.onAuthStateChange(callback)
}

export default supabase

