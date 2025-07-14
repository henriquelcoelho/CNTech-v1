import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Brain, 
  Blocks, 
  Code, 
  Clock, 
  Users, 
  Star,
  CheckCircle,
  PlayCircle,
  BookOpen,
  Award,
  ChevronRight,
  Calendar,
  Target,
  Lightbulb
} from 'lucide-react'

const TrilhasCNTech = () => {
  const [trilhaSelecionada, setTrilhaSelecionada] = useState('ia-iniciante')

  const trilhas = {
    'ia-iniciante': {
      titulo: 'IA para Iniciantes',
      subtitulo: 'Fundamentos de Inteligência Artificial',
      duracao: '12 meses',
      nivel: 'Iniciante',
      participantes: 156,
      rating: 4.8,
      icon: Brain,
      cor: 'yellow',
      descricao: 'Uma jornada completa para entender os fundamentos da Inteligência Artificial sob uma perspectiva cristã, combinando conhecimento técnico com valores bíblicos.',
      
      objetivos: [
        'Compreender os conceitos fundamentais de IA',
        'Aprender programação Python aplicada à IA',
        'Desenvolver projetos práticos com Machine Learning',
        'Refletir sobre ética em IA à luz da fé cristã',
        'Criar soluções que honrem a Deus e sirvam ao próximo'
      ],

      prerequisitos: [
        'Conhecimento básico de matemática (ensino médio)',
        'Interesse em tecnologia e programação',
        'Coração aberto para aprender',
        'Compromisso com os valores cristãos'
      ],

      modulos: [
        {
          numero: 1,
          titulo: 'Fundamentos Matemáticos e Python',
          duracao: '2 meses',
          topicos: [
            'Álgebra linear básica',
            'Estatística descritiva',
            'Introdução ao Python',
            'Bibliotecas essenciais (NumPy, Pandas)',
            'Reflexão: A matemática como linguagem de Deus'
          ],
          projeto: 'Calculadora de estatísticas bíblicas'
        },
        {
          numero: 2,
          titulo: 'Programação Avançada e Manipulação de Dados',
          duracao: '2 meses',
          topicos: [
            'Estruturas de dados em Python',
            'Manipulação de dados com Pandas',
            'Visualização com Matplotlib e Seaborn',
            'APIs e coleta de dados',
            'Reflexão: Dados como testemunho da criação'
          ],
          projeto: 'Dashboard de análise de crescimento da igreja'
        },
        {
          numero: 3,
          titulo: 'Machine Learning Básico',
          duracao: '2 meses',
          topicos: [
            'Conceitos de aprendizado supervisionado',
            'Algoritmos de classificação',
            'Algoritmos de regressão',
            'Avaliação de modelos',
            'Reflexão: Aprendizado como dom divino'
          ],
          projeto: 'Sistema de recomendação de versículos bíblicos'
        },
        {
          numero: 4,
          titulo: 'Deep Learning Introdutório',
          duracao: '2 meses',
          topicos: [
            'Redes neurais artificiais',
            'TensorFlow e Keras',
            'Processamento de imagens',
            'Processamento de linguagem natural',
            'Reflexão: Redes neurais e a mente humana'
          ],
          projeto: 'Classificador de imagens de arte cristã'
        },
        {
          numero: 5,
          titulo: 'IA Generativa e Ética',
          duracao: '2 meses',
          topicos: [
            'Modelos de linguagem (GPT)',
            'Geração de imagens (DALL-E, Stable Diffusion)',
            'Ética em IA',
            'Viés algorítmico',
            'Reflexão: Criatividade artificial vs. criatividade divina'
          ],
          projeto: 'Assistente virtual para estudos bíblicos'
        },
        {
          numero: 6,
          titulo: 'Projetos Práticos e Ministério',
          duracao: '2 meses',
          topicos: [
            'Desenvolvimento de aplicações completas',
            'Deploy e manutenção de modelos',
            'IA no ministério cristão',
            'Apresentação de projetos',
            'Reflexão: Usando IA para o Reino de Deus'
          ],
          projeto: 'Projeto final: Solução de IA para sua igreja local'
        }
      ],

      recursos: [
        'Aulas ao vivo semanais',
        'Material didático exclusivo',
        'Mentoria individual',
        'Grupo de estudos no WhatsApp',
        'Acesso à plataforma de exercícios',
        'Certificado de conclusão',
        'Networking com outros cristãos da área'
      ],

      investimento: {
        valor: 'R$ 297',
        periodo: 'mensal',
        desconto: 'Primeira mensalidade: R$ 197',
        parcelamento: '12x sem juros'
      }
    },

    'ia-avancada': {
      titulo: 'IA Avançada',
      subtitulo: 'Machine Learning e Deep Learning Profissional',
      duracao: '6 meses',
      nivel: 'Avançado',
      participantes: 89,
      rating: 4.9,
      icon: Brain,
      cor: 'green',
      descricao: 'Aprofunde seus conhecimentos em IA com técnicas avançadas, preparando-se para liderar projetos de Machine Learning em sua carreira.',

      objetivos: [
        'Dominar algoritmos avançados de ML',
        'Implementar arquiteturas de Deep Learning complexas',
        'Desenvolver sistemas de IA em produção',
        'Liderar projetos de IA com excelência',
        'Aplicar IA para impacto social positivo'
      ],

      prerequisitos: [
        'Conclusão da trilha IA Iniciante ou experiência equivalente',
        'Conhecimento sólido de Python',
        'Experiência com bibliotecas de ML',
        'Matemática avançada (cálculo, álgebra linear)'
      ],

      modulos: [
        {
          numero: 1,
          titulo: 'Algoritmos Avançados de Machine Learning',
          duracao: '1 mês',
          topicos: [
            'Ensemble methods (Random Forest, XGBoost)',
            'Support Vector Machines avançado',
            'Algoritmos de clustering complexos',
            'Redução de dimensionalidade',
            'Reflexão: Complexidade e simplicidade na criação'
          ],
          projeto: 'Sistema de análise preditiva para crescimento ministerial'
        },
        {
          numero: 2,
          titulo: 'Deep Learning Avançado',
          duracao: '1 mês',
          topicos: [
            'Arquiteturas CNN avançadas',
            'Redes Recorrentes (LSTM, GRU)',
            'Transformers e Attention',
            'GANs (Generative Adversarial Networks)',
            'Reflexão: Criatividade artificial e imagem de Deus'
          ],
          projeto: 'Gerador de arte cristã com GANs'
        },
        {
          numero: 3,
          titulo: 'MLOps e Sistemas em Produção',
          duracao: '1 mês',
          topicos: [
            'Pipeline de ML automatizado',
            'Monitoramento de modelos',
            'Docker e Kubernetes para ML',
            'CI/CD para projetos de IA',
            'Reflexão: Excelência e responsabilidade no trabalho'
          ],
          projeto: 'Sistema completo de IA em produção'
        },
        {
          numero: 4,
          titulo: 'IA para Processamento de Linguagem Natural',
          duracao: '1 mês',
          topicos: [
            'Modelos de linguagem avançados',
            'Fine-tuning de modelos pré-treinados',
            'Análise de sentimentos complexa',
            'Chatbots inteligentes',
            'Reflexão: Linguagem como dom divino'
          ],
          projeto: 'Assistente teológico com IA'
        },
        {
          numero: 5,
          titulo: 'Computer Vision Avançado',
          duracao: '1 mês',
          topicos: [
            'Detecção e segmentação de objetos',
            'Reconhecimento facial ético',
            'Análise de vídeo em tempo real',
            'Realidade aumentada com IA',
            'Reflexão: Visão artificial e percepção humana'
          ],
          projeto: 'Sistema de análise visual para eventos da igreja'
        },
        {
          numero: 6,
          titulo: 'Liderança e Impacto Social',
          duracao: '1 mês',
          topicos: [
            'Gestão de equipes de IA',
            'IA para impacto social',
            'Empreendedorismo cristão em IA',
            'Apresentação executiva',
            'Reflexão: Liderança servidora na era da IA'
          ],
          projeto: 'Proposta de startup cristã de IA'
        }
      ],

      recursos: [
        'Aulas intensivas 2x por semana',
        'Mentoria com especialistas da indústria',
        'Acesso a GPUs para treinamento',
        'Projetos com empresas parceiras',
        'Networking executivo',
        'Certificação profissional',
        'Oportunidades de emprego'
      ],

      investimento: {
        valor: 'R$ 497',
        periodo: 'mensal',
        desconto: 'À vista: R$ 2.497 (15% desconto)',
        parcelamento: '6x sem juros'
      }
    },

    'blockchain-basico': {
      titulo: 'Blockchain Básico',
      subtitulo: 'Fundamentos da Tecnologia Blockchain',
      duracao: '8 meses',
      nivel: 'Iniciante',
      participantes: 134,
      rating: 4.7,
      icon: Blocks,
      cor: 'blue',
      descricao: 'Compreenda a tecnologia que está revolucionando o mundo financeiro e além, sempre com uma perspectiva cristã sobre economia e tecnologia.',

      objetivos: [
        'Entender os fundamentos do blockchain',
        'Compreender criptomoedas e DeFi',
        'Aprender sobre smart contracts',
        'Refletir sobre economia bíblica',
        'Aplicar blockchain para o bem comum'
      ],

      prerequisitos: [
        'Conhecimento básico de informática',
        'Interesse em economia e finanças',
        'Mente aberta para novas tecnologias',
        'Valores cristãos sólidos'
      ],

      modulos: [
        {
          numero: 1,
          titulo: 'Fundamentos de Criptografia',
          duracao: '1 mês',
          topicos: [
            'História da criptografia',
            'Funções hash',
            'Criptografia de chave pública',
            'Assinaturas digitais',
            'Reflexão: Verdade e transparência na Bíblia'
          ],
          projeto: 'Sistema de verificação de integridade de textos bíblicos'
        },
        {
          numero: 2,
          titulo: 'Introdução ao Bitcoin',
          duracao: '1 mês',
          topicos: [
            'História e filosofia do Bitcoin',
            'Como funciona a rede Bitcoin',
            'Mineração e consenso',
            'Carteiras e segurança',
            'Reflexão: Dinheiro e mordomia cristã'
          ],
          projeto: 'Carteira Bitcoin educativa'
        },
        {
          numero: 3,
          titulo: 'Tecnologia Blockchain',
          duracao: '1 mês',
          topicos: [
            'Estrutura de dados blockchain',
            'Algoritmos de consenso',
            'Tipos de blockchain',
            'Escalabilidade e trilemas',
            'Reflexão: Descentralização e comunidade cristã'
          ],
          projeto: 'Blockchain simples para registro de doações'
        },
        {
          numero: 4,
          titulo: 'Ethereum e Smart Contracts',
          duracao: '1 mês',
          topicos: [
            'Plataforma Ethereum',
            'Linguagem Solidity básica',
            'Desenvolvimento de contratos simples',
            'Gas e otimização',
            'Reflexão: Contratos e alianças bíblicas'
          ],
          projeto: 'Contrato de doações transparentes'
        },
        {
          numero: 5,
          titulo: 'DeFi e Aplicações Financeiras',
          duracao: '1 mês',
          topicos: [
            'Finanças descentralizadas (DeFi)',
            'Protocolos de empréstimo',
            'Exchanges descentralizadas',
            'Yield farming e staking',
            'Reflexão: Justiça financeira e economia bíblica'
          ],
          projeto: 'Análise de protocolo DeFi cristão'
        },
        {
          numero: 6,
          titulo: 'NFTs e Tokens',
          duracao: '1 mês',
          topicos: [
            'Tokens fungíveis e não-fungíveis',
            'Padrões ERC-20 e ERC-721',
            'Marketplaces de NFTs',
            'Casos de uso além da arte',
            'Reflexão: Propriedade digital e mordomia'
          ],
          projeto: 'NFT de arte cristã com propósito social'
        },
        {
          numero: 7,
          titulo: 'Outras Blockchains e Interoperabilidade',
          duracao: '1 mês',
          topicos: [
            'Cardano, Solana, Polkadot',
            'Bridges entre blockchains',
            'Layer 2 solutions',
            'Futuro da interoperabilidade',
            'Reflexão: Unidade na diversidade'
          ],
          projeto: 'Comparativo de blockchains para uso ministerial'
        },
        {
          numero: 8,
          titulo: 'Aplicações Práticas e Ministério',
          duracao: '1 mês',
          topicos: [
            'Blockchain no terceiro setor',
            'Transparência em organizações',
            'Identidade digital',
            'Votação descentralizada',
            'Reflexão: Tecnologia para o Reino de Deus'
          ],
          projeto: 'Proposta de blockchain para sua igreja'
        }
      ],

      recursos: [
        'Aulas semanais ao vivo',
        'Simulador de blockchain',
        'Carteira de teste com criptomoedas',
        'Acesso a ferramentas de desenvolvimento',
        'Comunidade exclusiva no Discord',
        'Certificado blockchain',
        'Mentoria em projetos'
      ],

      investimento: {
        valor: 'R$ 247',
        periodo: 'mensal',
        desconto: 'Primeira mensalidade: R$ 147',
        parcelamento: '8x sem juros'
      }
    },

    'dev-blockchain': {
      titulo: 'Desenvolvimento Blockchain',
      subtitulo: 'Programação de DApps e Smart Contracts',
      duracao: '10 meses',
      nivel: 'Avançado',
      participantes: 67,
      rating: 4.9,
      icon: Code,
      cor: 'orange',
      descricao: 'Torne-se um desenvolvedor blockchain profissional, criando aplicações descentralizadas que podem transformar indústrias inteiras.',

      objetivos: [
        'Dominar desenvolvimento de smart contracts',
        'Criar DApps completas e funcionais',
        'Implementar soluções blockchain escaláveis',
        'Desenvolver com segurança e boas práticas',
        'Liderar projetos blockchain inovadores'
      ],

      prerequisitos: [
        'Experiência sólida em programação',
        'Conhecimento de JavaScript/TypeScript',
        'Conclusão do Blockchain Básico ou conhecimento equivalente',
        'Familiaridade com desenvolvimento web'
      ],

      modulos: [
        {
          numero: 1,
          titulo: 'Solidity Avançado',
          duracao: '1 mês',
          topicos: [
            'Padrões de design em Solidity',
            'Otimização de gas',
            'Segurança em smart contracts',
            'Testes automatizados',
            'Reflexão: Excelência no desenvolvimento'
          ],
          projeto: 'Sistema de governança descentralizada'
        },
        {
          numero: 2,
          titulo: 'Desenvolvimento Frontend para DApps',
          duracao: '1 mês',
          topicos: [
            'Web3.js e Ethers.js',
            'Integração com MetaMask',
            'React para DApps',
            'UX/UI para blockchain',
            'Reflexão: Interface humana com tecnologia'
          ],
          projeto: 'Interface para marketplace de NFTs cristãos'
        },
        {
          numero: 3,
          titulo: 'Arquitetura de DApps',
          duracao: '1 mês',
          topicos: [
            'Padrões arquiteturais',
            'IPFS e armazenamento descentralizado',
            'Oracles e dados externos',
            'Escalabilidade e Layer 2',
            'Reflexão: Arquitetura como reflexo da ordem divina'
          ],
          projeto: 'DApp de crowdfunding para missões'
        },
        {
          numero: 4,
          titulo: 'DeFi Development',
          duracao: '1 mês',
          topicos: [
            'Protocolos de empréstimo',
            'AMMs (Automated Market Makers)',
            'Yield farming contracts',
            'Composabilidade em DeFi',
            'Reflexão: Finanças justas e inclusivas'
          ],
          projeto: 'Protocolo de microcrédito descentralizado'
        },
        {
          numero: 5,
          titulo: 'NFTs e Tokenização',
          duracao: '1 mês',
          topicos: [
            'Padrões avançados de tokens',
            'Marketplaces personalizados',
            'Royalties e direitos autorais',
            'Fracionamento de NFTs',
            'Reflexão: Criatividade e propriedade intelectual'
          ],
          projeto: 'Plataforma de NFTs para arte cristã'
        },
        {
          numero: 6,
          titulo: 'Segurança e Auditoria',
          duracao: '1 mês',
          topicos: [
            'Vulnerabilidades comuns',
            'Ferramentas de auditoria',
            'Formal verification',
            'Bug bounties',
            'Reflexão: Responsabilidade e confiança'
          ],
          projeto: 'Auditoria completa de smart contract'
        },
        {
          numero: 7,
          titulo: 'Blockchains Alternativas',
          duracao: '1 mês',
          topicos: [
            'Desenvolvimento em Cardano (Plutus)',
            'Solana e Rust',
            'Polkadot e Substrate',
            'Cosmos SDK',
            'Reflexão: Diversidade tecnológica'
          ],
          projeto: 'DApp multi-chain'
        },
        {
          numero: 8,
          titulo: 'DevOps para Blockchain',
          duracao: '1 mês',
          topicos: [
            'CI/CD para smart contracts',
            'Monitoramento de DApps',
            'Deployment automatizado',
            'Infraestrutura descentralizada',
            'Reflexão: Automação e trabalho humano'
          ],
          projeto: 'Pipeline completo de desenvolvimento'
        },
        {
          numero: 9,
          titulo: 'Blockchain Enterprise',
          duracao: '1 mês',
          topicos: [
            'Hyperledger Fabric',
            'Blockchain privadas',
            'Integração com sistemas legados',
            'Compliance e regulamentação',
            'Reflexão: Tecnologia no ambiente corporativo'
          ],
          projeto: 'Solução blockchain para empresa'
        },
        {
          numero: 10,
          titulo: 'Projeto Final e Carreira',
          duracao: '1 mês',
          topicos: [
            'Desenvolvimento de projeto completo',
            'Apresentação para investidores',
            'Carreira em blockchain',
            'Empreendedorismo Web3',
            'Reflexão: Impacto e legado tecnológico'
          ],
          projeto: 'Startup blockchain com propósito social'
        }
      ],

      recursos: [
        'Aulas práticas 3x por semana',
        'Mentoria com desenvolvedores sênior',
        'Acesso a testnets e ferramentas premium',
        'Code review personalizado',
        'Networking com empresas Web3',
        'Certificação profissional reconhecida',
        'Suporte para colocação no mercado'
      ],

      investimento: {
        valor: 'R$ 697',
        periodo: 'mensal',
        desconto: 'À vista: R$ 5.997 (20% desconto)',
        parcelamento: '10x sem juros'
      }
    }
  }

  const trilhaAtual = trilhas[trilhaSelecionada]
  const Icon = trilhaAtual.icon

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <Brain className="h-12 w-12 mr-4 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Trilhas de Aprendizado CNTech</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Desenvolva suas habilidades em tecnologia com uma perspectiva cristã. 
          Cada trilha é cuidadosamente estruturada para combinar excelência técnica com valores bíblicos.
        </p>
      </div>

      {/* Seletor de Trilhas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {Object.entries(trilhas).map(([key, trilha]) => {
          const TrilhaIcon = trilha.icon
          const isSelected = trilhaSelecionada === key
          return (
            <Card 
              key={key}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                isSelected ? 'ring-2 ring-purple-500 bg-purple-50' : 'hover:bg-gray-50'
              }`}
              onClick={() => setTrilhaSelecionada(key)}
            >
              <CardHeader className="text-center">
                <TrilhaIcon className={`h-12 w-12 mx-auto mb-2 text-${trilha.cor}-500`} />
                <CardTitle className="text-lg">{trilha.titulo}</CardTitle>
                <CardDescription>{trilha.duracao} • {trilha.nivel}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {trilha.participantes}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {trilha.rating}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Detalhes da Trilha Selecionada */}
      <div className="space-y-8">
        {/* Header da Trilha */}
        <Card className={`bg-gradient-to-r from-${trilhaAtual.cor}-500 to-${trilhaAtual.cor}-600 text-white`}>
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <Icon className="h-16 w-16" />
                <div>
                  <h2 className="text-3xl font-bold mb-2">{trilhaAtual.titulo}</h2>
                  <p className="text-xl opacity-90 mb-4">{trilhaAtual.subtitulo}</p>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {trilhaAtual.duracao}
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      {trilhaAtual.nivel}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {trilhaAtual.participantes} alunos
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2" />
                      {trilhaAtual.rating}/5.0
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold mb-2">{trilhaAtual.investimento.valor}</div>
                <div className="text-sm opacity-90">{trilhaAtual.investimento.periodo}</div>
                <Button className="mt-4 bg-white text-gray-900 hover:bg-gray-100">
                  Inscrever-se Agora
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Descrição e Objetivos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                Sobre esta Trilha
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-6">
                {trilhaAtual.descricao}
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Objetivos de Aprendizado:</h4>
              <ul className="space-y-2">
                {trilhaAtual.objetivos.map((objetivo, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objetivo}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                Pré-requisitos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {trilhaAtual.prerequisitos.map((prerequisito, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`w-6 h-6 rounded-full bg-${trilhaAtual.cor}-100 text-${trilhaAtual.cor}-600 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5`}>
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{prerequisito}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-3">Investimento:</h4>
                <div className={`bg-${trilhaAtual.cor}-50 p-4 rounded-lg border border-${trilhaAtual.cor}-200`}>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {trilhaAtual.investimento.valor}
                    <span className="text-sm font-normal text-gray-600">/{trilhaAtual.investimento.periodo}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{trilhaAtual.investimento.desconto}</div>
                  <div className="text-sm text-gray-600">{trilhaAtual.investimento.parcelamento}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Módulos do Curso */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-purple-500" />
              Módulos do Curso
            </CardTitle>
            <CardDescription>
              Cronograma detalhado de aprendizado com projetos práticos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {trilhaAtual.modulos.map((modulo, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-${trilhaAtual.cor}-100 text-${trilhaAtual.cor}-600 flex items-center justify-center font-bold text-lg`}>
                        {modulo.numero}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{modulo.titulo}</h3>
                        <p className="text-gray-600">{modulo.duracao}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{modulo.duracao}</Badge>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tópicos Abordados:</h4>
                      <ul className="space-y-2">
                        {modulo.topicos.map((topico, topicIndex) => (
                          <li key={topicIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></div>
                            <span className="text-gray-700 text-sm">{topico}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Projeto Prático:</h4>
                      <div className={`bg-${trilhaAtual.cor}-50 p-4 rounded-lg border border-${trilhaAtual.cor}-200`}>
                        <div className="flex items-center mb-2">
                          <Award className={`h-5 w-5 mr-2 text-${trilhaAtual.cor}-600`} />
                          <span className="font-medium text-gray-900">Projeto do Módulo</span>
                        </div>
                        <p className="text-gray-700 text-sm">{modulo.projeto}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recursos Inclusos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-500" />
              O que está incluído
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trilhaAtual.recursos.map((recurso, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{recurso}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className={`bg-gradient-to-r from-${trilhaAtual.cor}-500 to-${trilhaAtual.cor}-600 text-white`}>
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar sua jornada?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Junte-se a centenas de cristãos que estão transformando suas carreiras e ministérios através da tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <PlayCircle className="mr-2 h-5 w-5" />
                Inscrever-se Agora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Agendar Conversa
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Primeira aula gratuita • Garantia de 7 dias • Suporte completo
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TrilhasCNTech

