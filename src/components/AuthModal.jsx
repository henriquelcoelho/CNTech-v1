import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx'
import { Button } from '@/components/ui/button.jsx'
import { X } from 'lucide-react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ForgotPasswordForm from './ForgotPasswordForm'

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode)

  const handleModeChange = (newMode) => {
    setMode(newMode)
  }

  const handleClose = () => {
    setMode('login') // Reset to login when closing
    onClose()
  }

  const renderForm = () => {
    switch (mode) {
      case 'register':
        return (
          <RegisterForm 
            onToggleMode={handleModeChange}
            onClose={handleClose}
          />
        )
      case 'forgot':
        return (
          <ForgotPasswordForm 
            onToggleMode={handleModeChange}
            onClose={handleClose}
          />
        )
      default:
        return (
          <LoginForm 
            onToggleMode={handleModeChange}
            onClose={handleClose}
          />
        )
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>
            {mode === 'login' && 'Fazer Login'}
            {mode === 'register' && 'Criar Conta'}
            {mode === 'forgot' && 'Recuperar Senha'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2 z-10"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="p-6">
            {renderForm()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal

