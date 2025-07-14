import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  BookOpen, 
  Heart, 
  Brain, 
  Play, 
  Pause,
  Volume2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Share2
} from 'lucide-react'

const DevocionalDetalhado = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSection, setCurrentSection] = useState('oracao')

  const devocionalHoje = {
    data: "13 de Julho de 2025",
    versiculo: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais.",
    referencia: "Jeremias 29:11",
    tema: "Planos de Esperança",
    capitulo: "Jeremias 29",
    
    oracao: {
      titulo: "Momento de Oração",
      conteudo: `Pai celestial, agradecemos por este novo dia que nos concedes. Preparamos nossos corações para receber Tua Palavra e pedimos que o Espírito Santo nos guie em nossa reflexão sobre os Teus planos para nossas vidas.

Senhor, sabemos que muitas vezes nos preocupamos com o futuro, com as incertezas que nos cercam. Mas hoje, através da Tua Palavra em Jeremias 29:11, somos lembrados de que Tu tens planos para nós - planos de paz, de esperança e de um futuro próspero.

Ajuda-nos a confiar em Teus planos, mesmo quando não conseguimos compreendê-los completamente. Que possamos descansar na certeza de que Tu és soberano sobre todas as circunstâncias de nossas vidas.

Que este devocional transforme nossos corações e nos aproxime mais de Ti. Em nome de Jesus, amém.`
    },

    leitura: {
      titulo: "Leitura Bíblica - Jeremias 29",
      contexto: "Este capítulo contém a carta que o profeta Jeremias enviou aos exilados em Babilônia, oferecendo esperança em meio ao cativeiro.",
      versiculo_destaque: "Jeremias 29:11-14",
      texto_completo: `"Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais. Então me invocareis, e ireis, e orareis a mim, e eu vos ouvirei. E buscar-me-eis, e me achareis, quando me buscardes com todo o vosso coração. E serei achado de vós, diz o Senhor, e farei voltar os vossos cativos, e congregar-vos-ei de todas as nações, e de todos os lugares para onde vos lancei, diz o Senhor, e tornar-vos-ei a trazer ao lugar de onde vos transportei."`
    },

    entendimento: {
      titulo: "Entendimento e Reflexão",
      contexto_historico: "O povo de Judá estava no exílio babilônico, longe de sua terra prometida. Era um tempo de grande desespero e questionamento sobre o futuro. Neste contexto, Deus fala através de Jeremias para trazer esperança.",
      
      principais_ensinamentos: [
        "Deus tem planos específicos para cada um de nós",
        "Seus planos são sempre para o nosso bem, mesmo quando não entendemos",
        "A esperança cristã não é baseada em circunstâncias, mas no caráter de Deus",
        "Deus nos convida a buscá-Lo de todo coração"
      ],

      aplicacao_pratica: `Em nossa era digital e tecnológica, assim como o CNTech nos ensina sobre inovação, Deus também tem planos inovadores para nossas vidas. Quando enfrentamos incertezas sobre o futuro - seja na carreira, relacionamentos, ou propósito de vida - podemos descansar na promessa de que Deus já preparou um caminho.

Como membros da Comunidade das Nações, somos chamados a confiar nos planos de Deus tanto para nossa vida pessoal quanto para nossa missão como igreja. Assim como aprendemos sobre Inteligência Artificial e Blockchain no CNTech, devemos também desenvolver nossa 'inteligência espiritual' para discernir os planos de Deus.`,

      perguntas_reflexao: [
        "Em que áreas da minha vida preciso confiar mais nos planos de Deus?",
        "Como posso buscar a Deus 'de todo coração' em meio às distrações tecnológicas?",
        "Que 'exílios' estou enfrentando e como Deus pode usar essa situação para o meu bem?",
        "Como posso aplicar a esperança deste versículo em minha vida profissional e ministerial?"
      ]
    },

    musica: {
      titulo: "Música Inspiradora",
      nome: "Planos de Esperança",
      artista: "Fernandinho",
      duracao: "4:32",
      letra: `Eu sei que tens planos pra mim
Planos de me fazer prosperar
Não de me fazer mal
Eu sei que tens sonhos pra mim
Sonhos que vão se realizar
Eu vou confiar

Mesmo que eu não possa ver
O que tens preparado
Eu vou confiar em Ti
Mesmo que eu não possa entender
Os Teus caminhos
Eu vou confiar em Ti

Tu és fiel, Senhor
Tu és fiel, Senhor
Teus planos não falharão
Tu és fiel, Senhor`,
      
      reflexao_musical: "Esta música nos lembra que a fé não depende da nossa capacidade de ver ou entender os planos de Deus, mas da nossa confiança em Seu caráter fiel. A melodia suave nos convida à contemplação e adoração."
    }
  }

  const sections = [
    { id: 'oracao', title: 'Oração', icon: Heart, color: 'blue' },
    { id: 'leitura', title: 'Leitura', icon: BookOpen, color: 'green' },
    { id: 'entendimento', title: 'Entendimento', icon: Brain, color: 'yellow' },
    { id: 'musica', title: 'Música', icon: Play, color: 'purple' }
  ]

  const toggleAudio = () => {
    setIsPlaying(!isPlaying)
  }

  const renderSection = () => {
    switch(currentSection) {
      case 'oracao':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Heart className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{devocionalHoje.oracao.titulo}</h3>
              <p className="text-gray-600">Prepare seu coração para este momento especial com Deus</p>
            </div>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  {devocionalHoje.oracao.conteudo.split('\n\n').map((paragrafo, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragrafo}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">💭 Espaço para suas anotações pessoais:</h4>
              <textarea 
                className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Escreva aqui suas reflexões, pedidos de oração ou agradecimentos..."
              />
            </div>
          </div>
        )

      case 'leitura':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <BookOpen className="h-16 w-16 mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{devocionalHoje.leitura.titulo}</h3>
              <p className="text-gray-600">{devocionalHoje.leitura.contexto}</p>
            </div>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Versículo em Destaque</CardTitle>
                <CardDescription>{devocionalHoje.leitura.versiculo_destaque}</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg italic text-green-700 border-l-4 border-green-400 pl-6">
                  {devocionalHoje.leitura.texto_completo}
                </blockquote>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center space-x-4 bg-gray-50 p-6 rounded-lg">
              <Button 
                onClick={toggleAudio}
                className="bg-green-600 hover:bg-green-700"
              >
                {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                {isPlaying ? 'Pausar' : 'Ouvir'} Áudio
              </Button>
              <Volume2 className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600">Narração em português</span>
            </div>
          </div>
        )

      case 'entendimento':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Brain className="h-16 w-16 mx-auto mb-4 text-yellow-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{devocionalHoje.entendimento.titulo}</h3>
              <p className="text-gray-600">Aprofunde sua compreensão da Palavra de Deus</p>
            </div>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800">Contexto Histórico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {devocionalHoje.entendimento.contexto_historico}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-800">Principais Ensinamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {devocionalHoje.entendimento.principais_ensinamentos.map((ensinamento, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-orange-200 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{ensinamento}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-800">Aplicação Prática</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {devocionalHoje.entendimento.aplicacao_pratica}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Perguntas para Reflexão</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {devocionalHoje.entendimento.perguntas_reflexao.map((pergunta, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="font-medium text-gray-800 mb-2">{pergunta}</p>
                      <textarea 
                        className="w-full h-20 p-3 border border-gray-300 rounded resize-none text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Sua reflexão..."
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'musica':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Play className="h-16 w-16 mx-auto mb-4 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{devocionalHoje.musica.titulo}</h3>
              <p className="text-gray-600">Adore a Deus através da música</p>
            </div>

            <Card className="bg-purple-50 border-purple-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-purple-800">{devocionalHoje.musica.nome}</CardTitle>
                <CardDescription className="text-lg">
                  {devocionalHoje.musica.artista} • {devocionalHoje.musica.duracao}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Button 
                    size="lg"
                    onClick={toggleAudio}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    {isPlaying ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
                    {isPlaying ? 'Pausar' : 'Reproduzir'}
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartilhar
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-4">Letra da Música</h4>
                  <div className="prose prose-sm max-w-none">
                    {devocionalHoje.musica.letra.split('\n\n').map((estrofe, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed mb-3 text-center italic">
                        {estrofe.split('\n').map((linha, lineIndex) => (
                          <span key={lineIndex}>
                            {linha}
                            {lineIndex < estrofe.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Reflexão Musical</h4>
                  <p className="text-indigo-700 text-sm leading-relaxed">
                    {devocionalHoje.musica.reflexao_musical}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header do Devocional */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Calendar className="h-8 w-8 mr-3 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Devocional Diário</h1>
        </div>
        <p className="text-lg text-gray-600 mb-2">{devocionalHoje.data}</p>
        <Badge variant="secondary" className="text-lg px-4 py-2">
          {devocionalHoje.tema}
        </Badge>
      </div>

      {/* Versículo Principal */}
      <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-8 text-center">
          <blockquote className="text-2xl font-medium text-blue-900 mb-4 italic">
            "{devocionalHoje.versiculo}"
          </blockquote>
          <cite className="text-lg text-blue-700 font-semibold">
            {devocionalHoje.referencia}
          </cite>
        </CardContent>
      </Card>

      {/* Navegação entre seções */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {sections.map((section) => {
          const Icon = section.icon
          const isActive = currentSection === section.id
          return (
            <Button
              key={section.id}
              variant={isActive ? "default" : "outline"}
              onClick={() => setCurrentSection(section.id)}
              className={`flex items-center space-x-2 ${
                isActive 
                  ? `bg-${section.color}-600 hover:bg-${section.color}-700` 
                  : `border-${section.color}-300 text-${section.color}-700 hover:bg-${section.color}-50`
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{section.title}</span>
            </Button>
          )
        })}
      </div>

      {/* Conteúdo da seção atual */}
      <div className="mb-8">
        {renderSection()}
      </div>

      {/* Navegação entre dias */}
      <div className="flex justify-between items-center bg-gray-50 p-6 rounded-lg">
        <Button variant="outline" className="flex items-center">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Devocional Anterior
        </Button>
        
        <div className="text-center">
          <p className="text-sm text-gray-600">Dia 194 de 365</p>
          <div className="w-48 bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '53%'}}></div>
          </div>
        </div>

        <Button variant="outline" className="flex items-center">
          Próximo Devocional
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Compartilhamento */}
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">Compartilhe este devocional com sua comunidade</p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Instagram
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Email
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DevocionalDetalhado

