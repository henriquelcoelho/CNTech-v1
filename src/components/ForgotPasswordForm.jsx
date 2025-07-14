import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Alert, AlertDescription } from '@/components/ui/alert.jsx'
import { Loader2, Mail, ArrowLeft } from 'lucide-react'

const ForgotPasswordForm = ({ onToggleMode, onClose }) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { resetPassword } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setIsLoading(true)

    try {
      const { error } = await resetPassword(email)
      if (error) {
        setError(error.message)
      } else {
        setSuccess('Email de recuperação enviado! Verifique sua caixa de entrada.')
        setEmail('')
      }
    } catch (err) {
      setError('Erro inesperado. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-blue-900">
          Recuperar Senha
        </CardTitle>
        <CardDescription>
          Digite seu email para receber instruções de recuperação
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-200 bg-green-50">
              <AlertDescription className="text-green-800">{success}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar Email de Recuperação'
            )}
          </Button>

          <div className="text-center space-y-2">
            <button
              type="button"
              onClick={() => onToggleMode?.('login')}
              className="flex items-center justify-center w-full text-sm text-blue-600 hover:text-blue-800 underline"
              disabled={isLoading}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Login
            </button>
            
            <div className="text-sm text-gray-600">
              Não tem uma conta?{' '}
              <button
                type="button"
                onClick={() => onToggleMode?.('register')}
                className="text-blue-600 hover:text-blue-800 underline font-medium"
                disabled={isLoading}
              >
                Cadastre-se
              </button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default ForgotPasswordForm

