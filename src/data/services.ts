import { PlumbingService } from '../types';

export const PLUMBING_SERVICES: PlumbingService[] = [
  {
    title: "Conserto e Reparo de Vazamentos",
    slug: "reparo-vazamentos",
    shortDesc: "Localização visual e reparo ágil de vazamentos em tubulações, torneiras, caixas d'água e registros.",
    fullDesc: "Os vazamentos invisíveis ou visíveis podem causar grande desperdício de água e danos à estrutura do seu imóvel. Nossa equipe realiza o diagnóstico preciso e o reparo eficiente de tubulações de PVC, PPR, cobre e ferro em residências, condomínios e estabelecimentos comerciais.",
    iconName: "Droplet",
    features: [
      "Diagnóstico preciso de ponto de vazamento",
      "Substituição de conexões e tubos danificados",
      "Reparo em canos de água quente e fria",
      "Verificação de pressão da rede hidráulica"
    ],
    commonProblems: [
      "Manchas de umidade nas paredes ou teto",
      "Aumento repentino no valor da conta de água",
      "Barulho de água correndo mesmo com torneiras fechadas",
      "Pisos fofos ou estufados por infiltração"
    ],
    solutions: [
      "Substituição do trecho avariado da tubulação",
      "Vedação adequada com conexões certificadas",
      "Ajuste da pressão de entrada para evitar novas quebras",
      "Orientação preventiva ao cliente"
    ],
    faq: [
      {
        question: "Como sei se há um vazamento na minha casa?",
        answer: "Fique atento ao aumento injustificado na conta de água, manchas de bolor em paredes, estufamento de pinturas e torneiras pingando. Um teste simples é fechar todas as torneiras e verificar se o relógio de água continua rodando."
      },
      {
        question: "Vocês atendem emergências hidráulicas?",
        answer: "Sim, atendemos chamados urgentes para conter vazamentos ativos. Entre em contato via WhatsApp para verificar o tempo de deslocamento para seu bairro."
      }
    ]
  },
  {
    title: "Troca e Conserto de Torneiras, Registros e Válvulas",
    slug: "troca-torneiras-registros",
    shortDesc: "Instalação, reparo e vedação de torneiras, registros gaveta/pressão, válvulas Hydra e reparos.",
    fullDesc: "Torneiras pingando e registros emperrados geram desperdício contínuo de água e desconforto no dia a dia. Realizamos a troca de reparos internos, vedações, substituição de reparos de válvulas de descarga Hydra e instalação de novos metais hidráulicos.",
    iconName: "Wrench",
    features: [
      "Instalação de torneiras monocomando e misturadores",
      "Substituição de reparos de registro gaveta e pressão",
      "Manutenção em válvulas de descarga Hydra e Docol",
      "Troca de reparos e gaxetas ressecadas"
    ],
    commonProblems: [
      "Torneira pingando sem parar no gotejamento",
      "Registro que gira em falso ou não fecha a água",
      "Válvula do vaso sanitário disparada vazando na bacia",
      "Vazamento na junta da torneira com a bancada ou parede"
    ],
    solutions: [
      "Troca do reparo cerâmico ou vedante de borracha",
      "Substituição completa do corpo do registro quando espanado",
      "Aplicação de fita veda-rosca de alta densidade",
      "Teste de estanqueidade no local"
    ],
    faq: [
      {
        question: "Vale a pena trocar só o reparo do registro ou o registro todo?",
        answer: "Na grande maioria dos casos, a substituição do reparo interno resolve o problema sem necessidade de quebrar azulejos. Avaliamos no local a melhor relação custo-benefício."
      }
    ]
  },
  {
    title: "Manutenção Hidráulica Residencial e Comercial",
    slug: "manutencao-hidraulica",
    shortDesc: "Revisão geral, adequação de pressão e manutenção preventiva e corretiva para imóveis.",
    fullDesc: "Manter a rede hidráulica em dia evita surpresas agradáveis com alagamentos ou falhas de abastecimento. Atendemos casas, apartamentos, lojas, escritórios e galpões comerciais com manutenção especializada.",
    iconName: "Settings",
    features: [
      "Revisão de tubulações de alimentação e esgotamento",
      "Verificação e regulagem de boias de caixa d'água",
      "Limpeza e verificação de sifões e ralos",
      "Manutenção em sistemas hidráulicos prediais"
    ],
    commonProblems: [
      "Pressão fraca nos chuveiros e torneiras",
      "Barulhos de golpes na tubulação (golpe de aríete)",
      "Retorno de mau cheiro nos ralos e pias",
      "Transbordamento em caixas de passagem e reservatórios"
    ],
    solutions: [
      "Limpeza e regulagem de válvulas e redutores de pressão",
      "Troca de boia mecânica por modelos reforçados",
      "Instalação de vedações anti-odor em ralos e sifões",
      "Plano de manutenção periódica para estabelecimentos"
    ],
    faq: [
      {
        question: "Com que frequência devo fazer manutenção hidráulica?",
        answer: "Recomendamos uma inspeção geral a cada 12 meses em residências e a cada 6 meses em estabelecimentos comerciais e condomínios."
      }
    ]
  },
  {
    title: "Instalação de Louças Sanitaristas, Pias e Metais",
    slug: "instalacao-loucas-metais",
    shortDesc: "Montagem e instalação de vasos sanitários, pias, tanques, cubas e acessórios hidráulicos.",
    fullDesc: "Instalação correta de vasos sanitários com anel de vedação, cubas de embutir e sobrepor, pias de cozinha, tanques de lavar roupa e acessórios para banheiros e cozinhas com acabamento limpo e seguro.",
    iconName: "ShowerHead",
    features: [
      "Instalação de vasos sanitários com caixa acoplada ou suspensos",
      "Colocação de anel de vedação com guia para evitar vazamentos e odores",
      "Fixação e conexão hidráulica de pias de cozinha e banheiros",
      "Instalação de duchas higiênicas e chuveiros elétricos/a gás"
    ],
    commonProblems: [
      "Vaso sanitário balançando ou vazando água na base",
      "Mau cheiro subindo da conexão do vaso com o esgoto",
      "Infiltração abaixo da pia do banheiro ou cozinha",
      "Vazamento no engate flexível"
    ],
    solutions: [
      "Instalação de novo anel de vedação de cera/borracha",
      "Regulagem do nível e fixação com parafusos em inox",
      "Substituição de engates flexíveis velhos por modelo trançado de inox",
      "Vedações periféricas com silicone acético neutro"
    ],
    faq: [
      {
        question: "Vocês fornecem o vaso e as peças ou apenas fazem a instalação?",
        answer: "Fazemos a mão de obra especializada de instalação. Podemos orientar o cliente sobre os melhores modelos e materiais necessários."
      }
    ]
  },
  {
    title: "Desentupimento Emergencial de Pias e Ralos",
    slug: "desentupimento-emergencial",
    shortDesc: "Remoção de obstruções em pias de cozinha, lavatórios, ralos de banheiro e sifões.",
    fullDesc: "Remoção técnica de entupimentos em ramais internos de pias, ralos box, tanques e lavatórios. Atendimento com ferramentas manuais e mola rotativa sem danificar os encanamentos de PVC.",
    iconName: "Pipette",
    features: [
      "Desobstrução de sifões e conexões de pias de cozinha",
      "Desentupimento de ralos de banheiros acumulados com cabelos e sabão",
      "Limpeza e remoção de gordura em ramais de pia",
      "Atendimento ágil para liberar o uso dos equipamentos hidráulicos"
    ],
    commonProblems: [
      "Água da pia demorando para descer ou voltando",
      "Ralo do banheiro borbulhando ou transbordando no banho",
      "Acúmulo de gordura e restos alimentares nos canos de esgoto doméstico",
      "Mau cheiro forte subindo pelas tubulações"
    ],
    solutions: [
      "Raspagem interna com mola desentupidora",
      "Limpeza completa do sifão e conexões de descarte",
      "Desobstrução mecânica limpa e sem uso de químicos agressivos",
      "Orientação de uso correto dos descartes"
    ],
    faq: [
      {
        question: "Usar diabo verde ou soda cáustica resolve entupimento?",
        answer: "Não recomendamos o uso de produtos químicos agressivos como soda cáustica, pois podem derreter canos de PVC flexíveis e petrificar a gordura, piorando a obstrução. A remoção mecânica é a solução mais segura."
      }
    ]
  },
  {
    title: "Substituição e Reparo de Tubulações e Conexões",
    slug: "troca-tubulacoes",
    shortDesc: "Troca de trechos de canos antigos, reparos em conexões quebradas e adequação de redes.",
    fullDesc: "Seja por desgaste do tempo, impacto mecânico ou erro de instalação antiga, substituímos tubulações rachadas, furadas ou obstruídas por novos tubos e conexões norma ABNT.",
    iconName: "ShieldAlert",
    features: [
      "Troca de tubos de ferro velhos por PVC rígido ou PPR termofusão",
      "Reparo em canos furados por furadeiras acidentalmente",
      "Adequação de prumadas e ramais de distribuição",
      "Soldagem e fusão de conexões hidráulicas de alta resistência"
    ],
    commonProblems: [
      "Cano furado acidentalmente ao instalar armários",
      "Tubulações antigas de ferro enferrujadas soltando água amarelada",
      "Rachaduras em conexões devido a alta pressão de água",
      "Juntas vazando por cola mal aplicada no passado"
    ],
    solutions: [
      "Instalação de luva de correr para reparos rápidos em PVC",
      "Substituição de trechos velhos com adaptações seguras",
      "Soldagem e colagem técnica garantindo estanqueidade",
      "Testes de pressão hidráulica antes de fechar a alvenaria"
    ],
    faq: [
      {
        question: "Furei um cano com a furadeira ao pendurar um quadro, o que fazer?",
        answer: "Feche imediatamente o registro geral de água do imóvel para estancar o fluxo e entre em contato conosco. Fazemos o reparo localizado com luva de correr de forma rápida."
      }
    ]
  },
  {
    title: "Inspeção e Diagnóstico Hidráulico Preventivo",
    slug: "inspecao-diagnostico",
    shortDesc: "Avaliação completa de instalações antes de reformas, compra de imóveis ou identificação de falhas.",
    fullDesc: "Serviço de vistoria técnica do sistema de água fria, água quente e esgoto para identificar potenciais riscos de vazamento, falta de pressão ou desgaste antes que causem prejuízos maiores.",
    iconName: "CheckCircle",
    features: [
      "Verificação de todas as torneiras, caixas e registros do imóvel",
      "Medição da pressão manométrica da rede de água",
      "Inspeção de caixas d'água, boias e extravasores (ladrão)",
      "Emissão de relatório técnico explicativo para o cliente"
    ],
    commonProblems: [
      "Imóvel recém-comprado com problemas hidráulicos desconhecidos",
      "Suspeita de desperdício sem ponto de vazamento visível",
      "Reformas planejadas sem saber o estado das tubulações existentes",
      "Presença de barulhos e vibrações ao abrir torneiras"
    ],
    solutions: [
      "Análise minuciosa de todo o fluxo hídrico",
      "Recomendações técnicas de adequação",
      "Prevenção contra sinistros hidráulicos graves",
      "Economia no consumo mensal de água"
    ],
    faq: [
      {
        question: "Qual a vantagem de fazer uma inspeção antes de reformar?",
        answer: "Evita que você invista em novos revestimentos e louças caras sem saber se os canos antigos por trás da parede estão prestes a vazar, prevenindo ter que quebrar azulejos novos depois."
      }
    ]
  }
];
