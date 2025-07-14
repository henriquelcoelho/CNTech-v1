import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  ChevronRight, 
  Brain, 
  Blocks, 
  BookOpen, 
  Users, 
  Calendar, 
  Play,
  Heart,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-900">
                  Comunidade das Nações
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#inicio" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Início
                </a>
                <a href="#sobre" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Sobre Nós
                </a>
                <a href="#cntech" className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  CNTech ⭐
                </a>
                <a href="#devocional" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Devocional
                </a>
                <a href="#blog" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Blog dos Líderes
                </a>
                <a href="#eventos" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Eventos
                </a>
                <a href="#contato" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contato
                </a>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#inicio" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Início
              </a>
              <a href="#sobre" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Sobre Nós
              </a>
              <a href="#cntech" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium">
                CNTech ⭐
              </a>
              <a href="#devocional" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Devocional
              </a>
              <a href="#blog" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Blog dos Líderes
              </a>
              <a href="#eventos" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Eventos
              </a>
              <a href="#contato" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Contato
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bem-vindos à Comunidade das Nações
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Fé, Tecnologia e Comunidade em São Paulo
            </p>
            <p className="text-lg mb-10 max-w-4xl mx-auto opacity-90">
              Uma igreja que abraça tanto as tradições cristãs quanto as inovações tecnológicas, 
              criando um espaço único de crescimento espiritual e intelectual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Conheça Nossa História
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Explore o CNTech
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Devocional de Hoje
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Boas-vindas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Uma Comunidade Única
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Na Comunidade das Nações, acreditamos que a fé e a tecnologia podem caminhar juntas. 
                Somos uma igreja moderna em São Paulo que valoriza tanto a Palavra de Deus quanto o 
                conhecimento científico e tecnológico.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Nosso grupo CNTech é pioneiro em oferecer trilhas de aprendizado em Inteligência 
                Artificial e Blockchain, sempre sob uma perspectiva cristã, formando uma comunidade 
                de fé que abraça a inovação.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Saiba Mais Sobre Nós
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/src/assets/images/jovens_igreja.jpg" 
                alt="Comunidade da Igreja" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destaque CNTech */}
      <section id="cntech" className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <Brain className="h-12 w-12 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold">CNTech</h2>
            </div>
            <p className="text-xl mb-2">Núcleo de Tecnologia</p>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Explore o futuro da tecnologia com uma perspectiva cristã
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Brain className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <CardTitle>IA Iniciante</CardTitle>
                <CardDescription className="text-white/80">12 meses de aprendizado</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/90 mb-4">
                  Fundamentos de Inteligência Artificial para iniciantes
                </p>
                <Button variant="secondary" className="w-full">
                  Começar Trilha
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Brain className="h-12 w-12 mx-auto mb-4 text-green-300" />
                <CardTitle>IA Avançada</CardTitle>
                <CardDescription className="text-white/80">6 meses intensivos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/90 mb-4">
                  Aprofunde seus conhecimentos em IA e Machine Learning
                </p>
                <Button variant="secondary" className="w-full">
                  Começar Trilha
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Blocks className="h-12 w-12 mx-auto mb-4 text-blue-300" />
                <CardTitle>Blockchain Básico</CardTitle>
                <CardDescription className="text-white/80">8 meses de estudo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/90 mb-4">
                  Compreenda a tecnologia blockchain e criptomoedas
                </p>
                <Button variant="secondary" className="w-full">
                  Começar Trilha
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <Blocks className="h-12 w-12 mx-auto mb-4 text-orange-300" />
                <CardTitle>Dev Blockchain</CardTitle>
                <CardDescription className="text-white/80">10 meses práticos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/90 mb-4">
                  Desenvolva aplicações descentralizadas (DApps)
                </p>
                <Button variant="secondary" className="w-full">
                  Começar Trilha
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Explorar CNTech Completo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Devocional do Dia */}
      <section id="devocional" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Devocional de Hoje
            </h2>
            <p className="text-lg text-gray-600">
              Fortaleça sua fé com nossa reflexão diária
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-100">
              <CardHeader className="text-center bg-blue-50">
                <CardTitle className="text-2xl text-blue-900">
                  "Porque eu bem sei os pensamentos que tenho a vosso respeito"
                </CardTitle>
                <CardDescription className="text-lg text-blue-700">
                  Jeremias 29:11 - Tema: Planos de Esperança
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Heart className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Oração</h3>
                    <p className="text-sm text-gray-600">Momento de comunhão com Deus</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Leitura</h3>
                    <p className="text-sm text-gray-600">Jeremias 29 completo</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Brain className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Entendimento</h3>
                    <p className="text-sm text-gray-600">Reflexão e aplicação</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Play className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Música</h3>
                    <p className="text-sm text-gray-600">"Planos de Esperança"</p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 mr-4">
                    Ler Devocional Completo
                  </Button>
                  <Button variant="outline">
                    <Play className="mr-2 h-4 w-4" />
                    Ouvir Áudio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog dos Líderes */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blog dos Líderes
            </h2>
            <p className="text-lg text-gray-600">
              Reflexões e ensinamentos da nossa liderança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/src/assets/images/igreja_moderna_1.jpg" 
                  alt="A Igreja na Era Digital" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Badge className="w-fit mb-2">Tecnologia</Badge>
                <CardTitle className="text-xl">A Igreja na Era Digital</CardTitle>
                <CardDescription>Por Pastor João Silva - 10/07/2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Como a tecnologia pode ser uma ferramenta poderosa para o avanço do Reino de Deus...
                </p>
                <Button variant="outline" className="w-full">
                  Ler Artigo Completo
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/src/assets/images/tecnologia_igreja.jpg" 
                  alt="IA e Fé Cristã" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Badge className="w-fit mb-2">Espiritualidade</Badge>
                <CardTitle className="text-xl">IA e Fé Cristã: Uma Reflexão</CardTitle>
                <CardDescription>Por Pastora Maria Santos - 08/07/2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Explorando como a inteligência artificial pode coexistir com nossa fé...
                </p>
                <Button variant="outline" className="w-full">
                  Ler Artigo Completo
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/src/assets/images/igreja_moderna_2.jpg" 
                  alt="Comunidade e Tecnologia" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Badge className="w-fit mb-2">Comunidade</Badge>
                <CardTitle className="text-xl">Construindo Comunidade Digital</CardTitle>
                <CardDescription>Por Dr. Pedro Oliveira - 05/07/2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Como manter a essência da comunidade cristã no mundo digital...
                </p>
                <Button variant="outline" className="w-full">
                  Ler Artigo Completo
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Ver Todos os Artigos
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section id="eventos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Próximos Eventos
            </h2>
            <p className="text-lg text-gray-600">
              Participe da nossa programação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Dom 15/07</Badge>
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle>Culto de Celebração</CardTitle>
                <CardDescription>9h00 - Presencial e Online</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Junte-se a nós para um momento especial de adoração e comunhão.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Qua 18/07</Badge>
                  <Brain className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle>Workshop IA para Iniciantes</CardTitle>
                <CardDescription>19h30 - CNTech</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Introdução prática aos conceitos fundamentais de Inteligência Artificial.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Sex 20/07</Badge>
                  <Play className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle>Podcast CNTech ao Vivo</CardTitle>
                <CardDescription>20h00 - YouTube</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Episódio especial sobre "Blockchain e Economia Bíblica".
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Ver Calendário Completo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Comunidade das Nações</h3>
              <p className="text-gray-300 mb-4">
                Uma igreja que integra fé, conhecimento e tecnologia para transformar vidas.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
                <Youtube className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
                <Linkedin className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-300" />
                  <span className="text-gray-300">Rua das Nações, 123 - Vila Madalena, SP</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-300" />
                  <span className="text-gray-300">(11) 3456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-300" />
                  <span className="text-gray-300">contato@comunidadedasnacoes.org.br</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Horários</h4>
              <div className="space-y-2 text-gray-300">
                <p>Dom 9h - Culto de Celebração</p>
                <p>Dom 19h - Culto Jovem</p>
                <p>Qua 19h30 - Culto de Oração</p>
                <p>Sex 19h30 - Culto de Ensino</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">CNTech</h4>
              <div className="space-y-2 text-gray-300">
                <p>Seg 19h - Grupo IA</p>
                <p>Ter 19h - Grupo Blockchain</p>
                <p>Qui 19h - Workshop</p>
                <p>Sáb 14h - Hackathon</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Comunidade das Nações. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

