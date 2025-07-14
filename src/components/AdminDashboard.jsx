import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Alert, AlertDescription } from '@/components/ui/alert.jsx'
import { 
  Users, 
  FileText, 
  Calendar, 
  Settings, 
  BarChart3, 
  Shield, 
  Plus,
  Edit,
  Trash2,
  Eye,
  UserCheck,
  UserX,
  Crown,
  User
} from 'lucide-react'
import ProtectedRoute from '../auth/ProtectedRoute'

const AdminDashboard = () => {
  const { getAllUsers, promoteToAdmin, demoteToUser, user } = useAuth()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [stats, setStats] = useState({
    totalUsers: 0,
    adminUsers: 0,
    regularUsers: 0,
    newUsersThisMonth: 0
  })

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    setLoading(true)
    try {
      const { data, error } = await getAllUsers()
      if (error) {
        setError(error.message || 'Erro ao carregar usuários')
      } else {
        setUsers(data || [])
        calculateStats(data || [])
      }
    } catch (err) {
      setError('Erro inesperado ao carregar dados')
    } finally {
      setLoading(false)
    }
  }

  const calculateStats = (usersData) => {
    const now = new Date()
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    
    const stats = {
      totalUsers: usersData.length,
      adminUsers: usersData.filter(u => u.role === 'admin').length,
      regularUsers: usersData.filter(u => u.role === 'user').length,
      newUsersThisMonth: usersData.filter(u => new Date(u.created_at) >= thisMonth).length
    }
    
    setStats(stats)
  }

  const handleRoleChange = async (userId, newRole) => {
    try {
      const { error } = newRole === 'admin' 
        ? await promoteToAdmin(userId)
        : await demoteToUser(userId)
      
      if (error) {
        setError(error.message || 'Erro ao alterar permissões')
      } else {
        await loadUsers() // Recarregar lista
      }
    } catch (err) {
      setError('Erro inesperado ao alterar permissões')
    }
  }

  const StatCard = ({ title, value, description, icon: Icon, color = "blue" }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 text-${color}-600`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )

  const UserRow = ({ userData }) => (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          {userData.role === 'admin' ? (
            <Crown className="h-5 w-5 text-yellow-600" />
          ) : (
            <User className="h-5 w-5 text-blue-600" />
          )}
        </div>
        <div>
          <h3 className="font-medium text-gray-900">
            {userData.full_name || userData.email}
          </h3>
          <p className="text-sm text-gray-600">{userData.email}</p>
          <p className="text-xs text-gray-500">
            Criado em: {new Date(userData.created_at).toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <Badge variant={userData.role === 'admin' ? 'default' : 'secondary'}>
          {userData.role === 'admin' ? 'Administrador' : 'Usuário'}
        </Badge>
        
        {userData.id !== user?.id && (
          <div className="flex space-x-2">
            {userData.role === 'user' ? (
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleRoleChange(userData.id, 'admin')}
                className="text-green-600 hover:text-green-700"
              >
                <UserCheck className="h-4 w-4 mr-1" />
                Promover
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleRoleChange(userData.id, 'user')}
                className="text-orange-600 hover:text-orange-700"
              >
                <UserX className="h-4 w-4 mr-1" />
                Rebaixar
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <ProtectedRoute requireAdmin={true}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Painel Administrativo
          </h1>
          <p className="text-gray-600">
            Gerencie usuários, conteúdo e configurações da Comunidade das Nações
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total de Usuários"
            value={stats.totalUsers}
            description="Membros registrados"
            icon={Users}
            color="blue"
          />
          <StatCard
            title="Administradores"
            value={stats.adminUsers}
            description="Usuários com acesso admin"
            icon={Shield}
            color="yellow"
          />
          <StatCard
            title="Usuários Comuns"
            value={stats.regularUsers}
            description="Membros da comunidade"
            icon={User}
            color="green"
          />
          <StatCard
            title="Novos este Mês"
            value={stats.newUsersThisMonth}
            description="Registros recentes"
            icon={BarChart3}
            color="purple"
          />
        </div>

        {/* Tabs de Administração */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Usuários</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Conteúdo</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Eventos</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Configurações</span>
            </TabsTrigger>
          </TabsList>

          {/* Aba de Usuários */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Gerenciar Usuários</CardTitle>
                    <CardDescription>
                      Visualize e gerencie permissões dos usuários
                    </CardDescription>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Convidar Usuário
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600">Carregando usuários...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {users.map((userData) => (
                      <UserRow key={userData.id} userData={userData} />
                    ))}
                    {users.length === 0 && (
                      <div className="text-center py-8">
                        <p className="text-gray-600">Nenhum usuário encontrado</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba de Conteúdo */}
          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-blue-600" />
                    Blog Posts
                  </CardTitle>
                  <CardDescription>
                    Gerencie artigos do blog dos líderes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Novo Artigo
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Todos
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-green-600" />
                    Devocionais
                  </CardTitle>
                  <CardDescription>
                    Gerencie devocionais diários
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Novo Devocional
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Editar Atual
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-purple-600" />
                    CNTech
                  </CardTitle>
                  <CardDescription>
                    Gerencie trilhas e conteúdo técnico
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Nova Trilha
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Editar Trilhas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Aba de Eventos */}
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Gerenciar Eventos</CardTitle>
                    <CardDescription>
                      Crie e gerencie eventos da igreja
                    </CardDescription>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Evento
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 mb-4">
                    Funcionalidade de eventos em desenvolvimento
                  </p>
                  <Button variant="outline">
                    Ver Calendário Atual
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba de Configurações */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações Gerais</CardTitle>
                  <CardDescription>
                    Configurações básicas do site
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Informações da Igreja
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Editar Contatos
                  </Button>
                  <Button className="w-full" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Termos e Políticas
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Backup e Segurança</CardTitle>
                  <CardDescription>
                    Ferramentas de manutenção
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Shield className="h-4 w-4 mr-2" />
                    Backup de Dados
                  </Button>
                  <Button className="w-full" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Relatórios
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Logs do Sistema
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ProtectedRoute>
  )
}

export default AdminDashboard

