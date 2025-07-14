import { useAuth } from '../contexts/AuthContext'
import { Alert, AlertDescription } from '@/components/ui/alert.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Loader2, Lock, Shield, UserX } from 'lucide-react'

const ProtectedRoute = ({ 
  children, 
  requireAuth = true, 
  requireAdmin = false, 
  fallback = null,
  showLoginPrompt = true 
}) => {
  const { user, isAdmin, loading, isAuthenticated } = useAuth()

  // Mostrar loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Verificando autenticação...</p>
        </div>
      </div>
    )
  }

  // Se não requer autenticação, mostrar conteúdo
  if (!requireAuth) {
    return children
  }

  // Se requer autenticação mas usuário não está logado
  if (requireAuth && !isAuthenticated) {
    if (fallback) return fallback
    
    if (showLoginPrompt) {
      return (
        <Card className="max-w-md mx-auto mt-8">
          <CardHeader className="text-center">
            <Lock className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <CardTitle>Acesso Restrito</CardTitle>
            <CardDescription>
              Você precisa estar logado para acessar esta área
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button 
              onClick={() => window.location.href = '/login'}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Fazer Login
            </Button>
          </CardContent>
        </Card>
      )
    }
    
    return (
      <Alert variant="destructive" className="max-w-md mx-auto mt-8">
        <UserX className="h-4 w-4" />
        <AlertDescription>
          Você precisa estar logado para acessar esta área.
        </AlertDescription>
      </Alert>
    )
  }

  // Se requer admin mas usuário não é admin
  if (requireAdmin && !isAdmin) {
    if (fallback) return fallback
    
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader className="text-center">
          <Shield className="h-12 w-12 mx-auto mb-4 text-red-600" />
          <CardTitle>Acesso Negado</CardTitle>
          <CardDescription>
            Você não tem permissão para acessar esta área. 
            Apenas administradores podem visualizar este conteúdo.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
          >
            Voltar
          </Button>
        </CardContent>
      </Card>
    )
  }

  // Se passou por todas as verificações, mostrar conteúdo
  return children
}

// Hook para verificar permissões
export const usePermissions = () => {
  const { user, isAdmin, isAuthenticated } = useAuth()
  
  return {
    canAccess: (requireAuth = true, requireAdmin = false) => {
      if (!requireAuth) return true
      if (requireAuth && !isAuthenticated) return false
      if (requireAdmin && !isAdmin) return false
      return true
    },
    canEdit: (resourceOwnerId = null) => {
      if (!isAuthenticated) return false
      if (isAdmin) return true
      if (resourceOwnerId && user?.id === resourceOwnerId) return true
      return false
    },
    canDelete: (resourceOwnerId = null) => {
      if (!isAuthenticated) return false
      if (isAdmin) return true
      if (resourceOwnerId && user?.id === resourceOwnerId) return true
      return false
    },
    canManageUsers: () => isAdmin,
    canCreateContent: () => isAuthenticated,
    canModerateContent: () => isAdmin
  }
}

// Componente para mostrar conteúdo baseado em permissões
export const ConditionalRender = ({ 
  requireAuth = false, 
  requireAdmin = false, 
  children, 
  fallback = null 
}) => {
  const { canAccess } = usePermissions()
  
  if (canAccess(requireAuth, requireAdmin)) {
    return children
  }
  
  return fallback
}

// HOC para proteger componentes
export const withAuth = (Component, options = {}) => {
  return function AuthenticatedComponent(props) {
    return (
      <ProtectedRoute {...options}>
        <Component {...props} />
      </ProtectedRoute>
    )
  }
}

// HOC para componentes que requerem admin
export const withAdmin = (Component, options = {}) => {
  return function AdminComponent(props) {
    return (
      <ProtectedRoute requireAdmin={true} {...options}>
        <Component {...props} />
      </ProtectedRoute>
    )
  }
}

export default ProtectedRoute

