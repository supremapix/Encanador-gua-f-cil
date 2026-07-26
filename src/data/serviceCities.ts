import { ServiceCityData } from '../types';

export const SERVICE_CITIES: ServiceCityData[] = [
  {
    name: "São José dos Pinhais",
    slug: "sao-jose-dos-pinhais",
    type: "city",
    distanceNote: "Município vizinho a Curitiba com acesso direto pelas Avenidas das Torres e Marechal Floriano Peixoto.",
    nearbyCities: ["Curitiba", "Pinhais", "Fazenda Rio Grande", "Tijucas do Sul"],
    title: "Encanador em São José dos Pinhais | Atendimento Hidráulico Residencial e Comercial",
    description: "Atendimento de encanador em São José dos Pinhais. Reparo de vazamentos, troca de registros, torneiras e louças. Consulte disponibilidade para sua região.",
    intro: "São José dos Pinhais é o segundo maior município da Região Metropolitana de Curitiba, abrigando importante polo industrial, comercial e habitacional. Prestamos atendimento técnico para solução de vazamentos e manutenção de redes de água.",
    highlights: ["Atendimento para residências, condomínios e estabelecimentos em SJP", "Conserto de vazamentos em tubulações de água fria e quente", "Troca de registros de pressão, torneiras e Válvulas Hydra"],
    faq: [
      {
        question: "A Encanador Água Fácil atende em São José dos Pinhais?",
        answer: "Sim! Atendemos diversos bairros de São José dos Pinhais. Entre em contato via WhatsApp para consultar a escala e disponibilidade para seu endereço."
      },
      {
        question: "Qual o prazo de deslocamento para São José dos Pinhais?",
        answer: "O deslocamento depende da rota no momento da solicitação. Consulte o horário diretamente pelo nosso WhatsApp."
      }
    ],
    geoContext: "Município polo na Região Metropolitana de Curitiba, sede do Aeroporto Afonso Pena.",
    indexable: true
  },
  {
    name: "Pinhais",
    slug: "pinhais",
    type: "city",
    distanceNote: "Limítrofe com os bairros Cajuru, Capão da Imbuia, Tarumã e Bairro Alto em Curitiba.",
    nearbyCities: ["Curitiba", "Piraquara", "São José dos Pinhais", "Colombo"],
    title: "Encanador em Pinhais | Serviços de Encanador e Reparos Hidráulicos",
    description: "Serviço de encanador em Pinhais. Manutenção em canos, torneiras, registros e louças sanitárias. Consulte disponibilidade para seu bairro.",
    intro: "Com excelente infraestrutura e proximidade com a zona leste de Curitiba, o município de Pinhais conta com nosso atendimento para reparo de infiltrações, substituição de registros e conexões hidráulicas.",
    highlights: ["Atendimento no centro e bairros de Pinhais", "Eliminação de vazamentos em tubos de PVC e cobre", "Instalação de pias de cozinha, lavatórios e registros"],
    faq: [
      {
        question: "Vocês atendem no centro e bairros de Pinhais?",
        answer: "Sim, prestamos atendimento nos principais bairros de Pinhais mediante consulta de agenda."
      }
    ],
    geoContext: "Município altamente urbanizado vizinho à Zona Leste de Curitiba.",
    indexable: true
  },
  {
    name: "Colombo",
    slug: "colombo",
    type: "city",
    distanceNote: "Faz divisa com os bairros Santa Cândida, Atuba e Maracanã na Zona Norte.",
    nearbyCities: ["Curitiba", "Pinhais", "Almirante Tamandaré", "Quatro Barras"],
    title: "Encanador em Colombo | Conserto de Vazamentos e Encanamentos",
    description: "Encanador profissional em Colombo. Atendimento para residências e comércios no Maracanã, Guaraituba e centro. Consulte disponibilidade.",
    intro: "Colombo é um dos mais populosos municípios da RMC, dividido entre o centro histórico e a movimentada região do Alto Maracanã e Guaraituba. Oferecemos suporte para problemas no abastecimento e reparos hidráulicos.",
    highlights: ["Atendimento para a região do Alto Maracanã, Guaraituba e centro de Colombo", "Conserto de vazamentos na rede de entrada e registros", "Substituição de torneiras, boias e pias"],
    faq: [
      {
        question: "Atendem na região do Maracanã em Colombo?",
        answer: "Sim, atendemos a região do Alto Maracanã e arredores. Fale pelo WhatsApp para confirmar disponibilidade."
      }
    ],
    geoContext: "Grande município da Região Metropolitana ao norte de Curitiba.",
    indexable: true
  },
  {
    name: "Araucária",
    slug: "araucaria",
    type: "city",
    distanceNote: "Vizinho direto do bairro Cidade Industrial de Curitiba (CIC).",
    nearbyCities: ["Curitiba", "Campo Largo", "Fazenda Rio Grande", "Contenda"],
    title: "Encanador em Araucária | Atendimento de Serviços Hidráulicos",
    description: "Encanador em Araucária. Proximidade com nossa sede na CIC. Reparo de vazamentos, registros e instalações. Consulte disponibilidade.",
    intro: "Devido à divisa direta entre Araucária e a Cidade Industrial de Curitiba (onde está nossa sede), oferecemos agilidade no deslocamento para atender residências e empresas no município.",
    highlights: ["Excelente tempo de deslocamento por proximidade à CIC", "Atendimento para residências e comércios de Araucária", "Conserto de vazamentos e troca de tubulações"],
    faq: [
      {
        question: "Araucária fica perto da sede de vocês?",
        answer: "Sim! Nossa empresa fica na CIC (Rua das Águias), muito próxima da divisa com Araucária, facilitando o acesso."
      }
    ],
    geoContext: "Polo industrial de grande porte vizinho à Zona Sul e Oeste de Curitiba.",
    indexable: true
  },
  {
    name: "Almirante Tamandaré",
    slug: "almirante-tamandare",
    type: "city",
    distanceNote: "Acesso rápido via Rodovia dos Minérios e bairros Pilarzinho e Barreirinha.",
    nearbyCities: ["Curitiba", "Colombo", "Campo Magro", "Itaperuçu"],
    title: "Encanador em Almirante Tamandaré | Reparos de Encanamento",
    description: "Atendimento de encanador em Almirante Tamandaré. Reparo de vazamentos, torneiras e registros. Consulte disponibilidade.",
    intro: "Município vizinho ao norte de Curitiba. Oferecemos suporte técnico para manutenção de redes de água fria, vazamentos e troca de vedações.",
    highlights: ["Conserto de vazamentos em canos e torneiras", "Instalação de vedações de vasos sanitários e pias", "Troca de registros de chuveiro"],
    faq: [
      {
        question: "Atendem em Almirante Tamandaré?",
        answer: "Sim, atendemos bairros de Almirante Tamandaré. Consulte via WhatsApp."
      }
    ],
    geoContext: "Município da RMC ao norte da capital paranaense.",
    indexable: true
  },
  {
    name: "Campo Largo",
    slug: "campo-largo",
    type: "city",
    distanceNote: "Acesso direto pela BR-277 a partir dos bairros Orleans e São Braz.",
    nearbyCities: ["Curitiba", "Campo Magro", "Balsa Nova", "Araucária"],
    title: "Encanador em Campo Largo | Manutenção Hidráulica e Vazamentos",
    description: "Serviço de encanador em Campo Largo. Reparo de vazamentos, pias e tubulações. Consulte disponibilidade para seu endereço.",
    intro: "Conhecida como a Capital da Louça, Campo Largo abriga muitas residências e indústrias. Prestamos serviços de reparos hidráulicos com agendamento prévio.",
    highlights: ["Serviços hidráulicos residenciais em Campo Largo", "Conserto de vazamentos em registros e canos de PVC", "Troca de louças, pias e vedações"],
    faq: [
      {
        question: "Como agendar encanador para Campo Largo?",
        answer: "Envie sua mensagem no WhatsApp (41) 99569-4912 e informe seu endereço em Campo Largo."
      }
    ],
    geoContext: "Importante município no eixo oeste da Região Metropolitana.",
    indexable: true
  },
  {
    name: "Campo Magro",
    slug: "campo-magro",
    type: "city",
    distanceNote: "Vizinho dos bairros Santa Felicidade e São Braz em Curitiba.",
    nearbyCities: ["Curitiba", "Campo Largo", "Almirante Tamandaré"],
    title: "Encanador em Campo Magro | Reparos Hidráulicos",
    description: "Encanador no município de Campo Magro. Soluções para vazamentos, registros e instalações. Consulte disponibilidade.",
    intro: "Atendemos o município de Campo Magro para consertos de vazamento, manutenção em tubulações e troca de louças sanitárias.",
    highlights: ["Atendimento sob consulta de agenda para Campo Magro", "Conserto de vazamentos na rede de água", "Troca de registros e torneiras"],
    faq: [
      {
        question: "Atendem em Campo Magro?",
        answer: "Sim, prestamos atendimento no município sob consulta prévia."
      }
    ],
    geoContext: "Município verde vizinho à Zona Oeste de Curitiba.",
    indexable: true
  },
  {
    name: "Fazenda Rio Grande",
    slug: "fazenda-rio-grande",
    type: "city",
    distanceNote: "Acesso pela BR-116 ao sul de Curitiba.",
    nearbyCities: ["Curitiba", "Mandirituba", "São José dos Pinhais", "Araucária"],
    title: "Encanador em Fazenda Rio Grande | Serviços de Encanamento",
    description: "Atendimento de encanador em Fazenda Rio Grande. Soluções rápidas em vazamentos e instalações. Consulte disponibilidade.",
    intro: "Fazenda Rio Grande é um dos municípios que mais cresce na RMC. Oferecemos atendimento qualificado para residências e comércios da cidade.",
    highlights: ["Atendimento para os diversos bairros de Fazenda Rio Grande", "Conserto de vazamentos e canos furados", "Troca de torneiras e registros de chuveiro"],
    faq: [
      {
        question: "Vocês atendem em Fazenda Rio Grande?",
        answer: "Sim, atendemos Fazenda Rio Grande sob consulta de rota via WhatsApp."
      }
    ],
    geoContext: "Município em forte expansão populacional ao sul de Curitiba.",
    indexable: true
  },
  {
    name: "Quatro Barras",
    slug: "quatro-barras",
    type: "city",
    distanceNote: "Acesso pela BR-116 Norte.",
    nearbyCities: ["Campina Grande do Sul", "Colombo", "Pinhais", "Curitiba"],
    title: "Encanador em Quatro Barras | Reparos de Vazamentos",
    description: "Encanador em Quatro Barras. Manutenção hidráulica em residências e empresas. Consulte disponibilidade para sua região.",
    intro: "Atendemos o município de Quatro Barras para reparos de encanamento, troca de tubulações e eliminação de vazamentos.",
    highlights: ["Atendimento pré-agendado para Quatro Barras", "Conserto de vazamentos e torneiras", "Instalação de caixas d'água"],
    faq: [
      {
        question: "Atendem em Quatro Barras?",
        answer: "Sim, atendemos o município sob agendamento prévio via WhatsApp."
      }
    ],
    geoContext: "Município na serra do mar ao norte da RMC.",
    indexable: true
  },
  {
    name: "Campina Grande do Sul",
    slug: "campina-grande-do-sul",
    type: "city",
    distanceNote: "Localizado no eixo norte da BR-116.",
    nearbyCities: ["Quatro Barras", "Colombo", "Curitiba"],
    title: "Encanador em Campina Grande do Sul | Atendimento Hidráulico",
    description: "Serviço de encanador em Campina Grande do Sul. Conserto de vazamentos e torneiras. Consulte disponibilidade.",
    intro: "Prestamos assistência de encanador no município de Campina Grande do Sul para residências, condomínios e comércios.",
    highlights: ["Serviços hidráulicos sob consulta de agendamento", "Conserto de vazamentos e registros", "Substituição de canos e louças"],
    faq: [
      {
        question: "Atendem em Campina Grande do Sul?",
        answer: "Sim, prestamos atendimento mediante agendamento direto pelo WhatsApp."
      }
    ],
    geoContext: "Município da RMC no trecho norte da BR-116.",
    indexable: true
  },
  {
    name: "Mandirituba",
    slug: "mandirituba",
    type: "city",
    distanceNote: "Acesso pela BR-116 sentido sul.",
    nearbyCities: ["Fazenda Rio Grande", "Tijucas do Sul", "Quitandinha"],
    title: "Encanador em Mandirituba | Reparos e Manutenção Hidráulica",
    description: "Atendimento de encanador em Mandirituba. Reparo de vazamentos e registros. Consulte disponibilidade.",
    intro: "Atendemos residências e propriedades em Mandirituba com serviços hidráulicos preventivos e corretivos.",
    highlights: ["Atendimento agendado para Mandirituba", "Conserto de vazamentos em tubos de água", "Troca de registros e torneiras"],
    faq: [
      {
        question: "Como agendar atendimento em Mandirituba?",
        answer: "Fale conosco pelo WhatsApp (41) 99569-4912 para consultar datas disponíveis."
      }
    ],
    geoContext: "Município ao sul da Região Metropolitana de Curitiba.",
    indexable: true
  },
  {
    name: "Balsa Nova",
    slug: "balsa-nova",
    type: "city",
    distanceNote: "Região próxima a Campo Largo e Araucária.",
    nearbyCities: ["Campo Largo", "Araucária", "Contenda"],
    title: "Encanador em Balsa Nova | Serviços Hidráulicos",
    description: "Encanador em Balsa Nova. Reparos em encanamento e vazamentos. Consulte disponibilidade.",
    intro: "Prestamos serviços de encanador no município de Balsa Nova com agendamento prévio para residências e chácaras.",
    highlights: ["Atendimento sob agendamento para Balsa Nova", "Conserto de vazamentos na rede de abastecimento", "Instalação de torneiras e pias"],
    faq: [
      {
        question: "Atendem no município de Balsa Nova?",
        answer: "Sim, prestamos serviços em Balsa Nova mediante agendamento."
      }
    ],
    geoContext: "Município da RMC no setor sudoeste.",
    indexable: true
  },
  {
    name: "Rio Branco do Sul",
    slug: "rio-branco-do-sul",
    type: "city",
    distanceNote: "Acesso pela Rodovia dos Minérios.",
    nearbyCities: ["Itaperuçu", "Almirante Tamandaré", "Curitiba"],
    title: "Encanador em Rio Branco do Sul | Serviços de Encanamento",
    description: "Atendimento de encanador em Rio Branco do Sul. Reparos em vazamentos e registros. Consulte disponibilidade.",
    intro: "Oferecemos atendimento técnico hidráulico no município de Rio Branco do Sul para sanar vazamentos e falhas no encanamento.",
    highlights: ["Atendimento agendado para Rio Branco do Sul", "Conserto de vazamentos e canos furados", "Troca de registros e torneiras"],
    faq: [
      {
        question: "Vocês atendem em Rio Branco do Sul?",
        answer: "Sim, atendemos Rio Branco do Sul mediante agendamento."
      }
    ],
    geoContext: "Município no setor norte da Região Metropolitana de Curitiba.",
    indexable: true
  },
  {
    name: "Itaperuçu",
    slug: "itaperucu",
    type: "city",
    distanceNote: "Acesso via Almirante Tamandaré e Rio Branco do Sul.",
    nearbyCities: ["Rio Branco do Sul", "Almirante Tamandaré", "Campo Magro"],
    title: "Encanador em Itaperuçu | Reparos Hidráulicos",
    description: "Encanador em Itaperuçu. Soluções para vazamentos e torneiras. Consulte disponibilidade.",
    intro: "Atendemos o município de Itaperuçu com serviços de manutenção em tubulações de água limpa, caixas d'água e torneiras.",
    highlights: ["Atendimento sob consulta para Itaperuçu", "Conserto de vazamentos e vedações", "Troca de registros e louças"],
    faq: [
      {
        question: "Atendem no município de Itaperuçu?",
        answer: "Sim, prestamos atendimento em Itaperuçu sob consulta prévia de rota."
      }
    ],
    geoContext: "Município minerador e residencial na RMC ao norte.",
    indexable: true
  },
  {
    name: "Tijucas do Sul",
    slug: "tijucas-do-sul",
    type: "city",
    distanceNote: "Acesso pela BR-376 sentido litoral/SC.",
    nearbyCities: ["São José dos Pinhais", "Mandirituba", "Guaratuba"],
    title: "Encanador em Tijucas do Sul | Atendimento Hidráulico",
    description: "Serviço de encanador em Tijucas do Sul. Reparo de vazamentos em residências e chácaras. Consulte disponibilidade.",
    intro: "Atendemos o município de Tijucas do Sul com agendamento direto para reparos em redes de água e esgoto em chácaras e moradias.",
    highlights: ["Atendimento pré-agendado para Tijucas do Sul", "Conserto de vazamentos e bombas d'água", "Instalação de pias e torneiras"],
    faq: [
      {
        question: "Como solicitar encanador em Tijucas do Sul?",
        answer: "Entre em contato pelo WhatsApp (41) 99569-4912 para verificar as datas de rota."
      }
    ],
    geoContext: "Município do setor sudeste da RMC na serra do mar.",
    indexable: true
  }
];
