import { PopularAreaData } from '../types';

export const POPULAR_AREAS: PopularAreaData[] = [
  {
    name: "Vila Sandra",
    slug: "vila-sandra",
    type: "vila",
    official: false,
    parentNeighborhood: "Cidade Industrial de Curitiba",
    nearbyAreas: ["Vila Verde", "Caiuá", "CIC Central"],
    title: "Encanador na Vila Sandra (CIC) em Curitiba | Atendimento Rápido",
    description: "Serviços de encanador na Vila Sandra, região da CIC em Curitiba. Atendimento direto da nossa sede com conserto de vazamentos e canos.",
    intro: "A Vila Sandra é uma importante região habitacional localizada dentro da Cidade Industrial de Curitiba (CIC). Oferecemos atendimento qualificado e ágil para residências e comércios locais.",
    highlights: ["Proximidade com a nossa sede principal na CIC", "Atendimento para residências e comércios da Vila Sandra", "Conserto de vazamentos em canos de água e esgoto"],
    faq: [
      {
        question: "A Vila Sandra é um bairro oficial?",
        answer: "A Vila Sandra é uma denominação popular e conjunto habitacional pertencente ao bairro oficial Cidade Industrial de Curitiba (CIC)."
      }
    ],
    geoContext: "Região habitacional no setor central da Cidade Industrial de Curitiba.",
    indexable: true
  },
  {
    name: "Vila Verde",
    slug: "vila-verde",
    type: "vila",
    official: false,
    parentNeighborhood: "Cidade Industrial de Curitiba",
    nearbyAreas: ["Vila Sandra", "Sabará", "CIC"],
    title: "Encanador na Vila Verde (CIC) em Curitiba | Reparos Hidráulicos",
    description: "Atendimento de encanador na Vila Verde na CIC, Curitiba. Troca de registros, torneiras e conserto de canos quebrados.",
    intro: "A Vila Verde é uma localidade tradicional da CIC. Realizamos serviços de encanamento residencial para vazamentos, registros travados e montagem de louças.",
    highlights: ["Deslocamento ágil a partir da nossa sede na CIC", "Substituição de registros de chuveiro e torneiras", "Reparo de infiltrações em tubulações"],
    faq: [
      {
        question: "Vocês atendem na Vila Verde na CIC?",
        answer: "Sim, atendemos todas as ruas e travessas da Vila Verde na Cidade Industrial de Curitiba."
      }
    ],
    geoContext: "Subdivisão popular integrada ao bairro Cidade Industrial de Curitiba.",
    indexable: true
  },
  {
    name: "Vila Nossa Senhora da Luz",
    slug: "vila-nossa-senhora-da-luz",
    type: "vila",
    official: false,
    parentNeighborhood: "Cidade Industrial de Curitiba",
    nearbyAreas: ["CIC Central", "Vila Sandra", "Gabineto"],
    title: "Encanador na Vila Nossa Senhora da Luz (CIC) | Atendimento em Encanamento",
    description: "Encanador na Vila Nossa Senhora da Luz em Curitiba. Primeiro conjunto habitacional da CIC. Atendimento ágil em vazamentos e pias.",
    intro: "A Vila Nossa Senhora da Luz é a mais antiga e histórica comunidade habitacional da CIC. Oferecemos suporte para manutenção e substituição de encanamentos antigos.",
    highlights: ["Troca de tubulações antigas por PVC norma ABNT", "Conserto de vazamentos em registros e torneiras", "Desentupimento de pias e tanques"],
    faq: [
      {
        question: "Atendem na Nossa Senhora da Luz na CIC?",
        answer: "Sim, prestamos atendimento hidráulico completo em toda a extensão da Vila Nossa Senhora da Luz."
      }
    ],
    geoContext: "Conjunto habitacional histórico dentro da Cidade Industrial de Curitiba.",
    indexable: true
  },
  {
    name: "Vitória Régia",
    slug: "vitoria-regia",
    type: "loteamento",
    official: false,
    parentNeighborhood: "Cidade Industrial de Curitiba",
    nearbyAreas: ["Sabará", "Caiuá", "CIC"],
    title: "Encanador no Vitória Régia (CIC) em Curitiba | Reparos Hidráulicos",
    description: "Encanador no Vitória Régia na CIC em Curitiba. Soluções para vazamentos, registros e instalações em residências.",
    intro: "O Vitória Régia é um loteamento residencial consolidado na CIC. Prestamos atendimento ágil para solucionar gotejamentos, vazamentos e registros quebrados.",
    highlights: ["Conserto de vazamento de água e esgoto", "Troca de torneiras e vedações", "Instalação de pias e lavatórios"],
    faq: [
      {
        question: "Como chamar encanador no Vitória Régia?",
        answer: "Fale diretamente pelo nosso WhatsApp (41) 99569-4912 e agende o atendimento."
      }
    ],
    geoContext: "Loteamento habitacional na área sul da Cidade Industrial de Curitiba.",
    indexable: true
  },
  {
    name: "Caiuá",
    slug: "caiua",
    type: "popular_area",
    official: false,
    parentNeighborhood: "Cidade Industrial de Curitiba",
    nearbyAreas: ["Vila Sandra", "Fazendinha", "CIC"],
    title: "Encanador no Caiuá (CIC) em Curitiba | Atendimento de Serviços Hidráulicos",
    description: "Serviço de encanador no Caiuá em Curitiba. Atendimento para residências e comércios da região da CIC e Fazendinha.",
    intro: "O Caiuá é uma movimentada região residencial no limite entre a CIC e o Fazendinha. Oferecemos rapidez no deslocamento para resolver vazamentos e falhas de água.",
    highlights: ["Atendimento para casas e comércios no Caiuá", "Conserto de vazamentos sob pias e registros", "Substituição de torneiras e vedações"],
    faq: [
      {
        question: "Vocês atendem o Conjunto Caiuá?",
        answer: "Sim, cobrimos todas as quadras e setores do Conjunto Caiuá."
      }
    ],
    geoContext: "Região residencial popular entre a CIC e o bairro Fazendinha.",
    indexable: true
  },
  {
    name: "Sabará",
    slug: "sabara",
    type: "popular_area",
    official: false,
    parentNeighborhood: "Cidade Industrial de Curitiba",
    nearbyAreas: ["Vitória Régia", "Vila Verde", "CIC"],
    title: "Encanador no Sabará (CIC) em Curitiba | Conserto de Vazamentos",
    description: "Atendimento de encanador no Sabará, região da CIC em Curitiba. Manutenção de canos, registros e pias.",
    intro: "Na região do Sabará na CIC, oferecemos serviços hidráulicos residenciais com diagnósticos claros e execução limpa.",
    highlights: ["Conserto de vazamentos em canos de PVC", "Troca de reparos de registros de pressão", "Instalação de tanques e torneiras"],
    faq: [
      {
        question: "Qual o prazo para atendimento no Sabará?",
        answer: "Pela proximidade com nossa sede na CIC, agendamos e atendemos com rapidez no Sabará."
      }
    ],
    geoContext: "Comunidade habitacional integrante da Cidade Industrial de Curitiba.",
    indexable: true
  },
  {
    name: "Gabineto",
    slug: "gabineto",
    type: "loteamento",
    official: false,
    parentNeighborhood: "Cidade Industrial de Curitiba",
    nearbyAreas: ["Jardim Gabineto", "Augusta", "CIC"],
    title: "Encanador no Gabineto (CIC) em Curitiba | Serviços de Encanamento",
    description: "Encanador no Gabineto / Jardim Gabineto na CIC, Curitiba. Atendimento para moradias e comércios locais.",
    intro: "O Gabineto (ou Jardim Gabineto) fica localizado na Zona Oeste da CIC. Realizamos troca de tubulações, conserto de vazamentos e novas instalações.",
    highlights: ["Atendimento no Gabineto com saída da nossa sede na CIC", "Troca de torneiras, vedações e sifões", "Instalação de louças e registros"],
    faq: [
      {
        question: "Gabineto e Jardim Gabineto são a mesma região?",
        answer: "Sim, são denominações populares utilizadas para a mesma área habitacional no bairro CIC."
      }
    ],
    geoContext: "Loteamento habitacional no setor oeste da Cidade Industrial de Curitiba.",
    indexable: true
  },
  {
    name: "Itatiaia",
    slug: "itatiaia",
    type: "loteamento",
    official: false,
    parentNeighborhood: "Cidade Industrial de Curitiba",
    nearbyAreas: ["CIC Central", "Vila Sandra"],
    title: "Encanador no Itatiaia (CIC) em Curitiba | Atendimento Hidráulico",
    description: "Serviço de encanador no Jardim Itatiaia / CIC, Curitiba. Manutenção de vazamentos, torneiras e registros com rapidez.",
    intro: "O loteamento Itatiaia integra o complexo residencial da CIC. Oferecemos atendimento qualificado em encanamento para residências.",
    highlights: ["Reparos em canos de água fria e esgoto", "Instalação de pias, tanques e vasos", "Troca de vedações e boias de caixa d'água"],
    faq: [
      {
        question: "Atendem no Conjunto Itatiaia na CIC?",
        answer: "Sim, prestamos serviços de encanador para todo o Conjunto Itatiaia."
      }
    ],
    geoContext: "Loteamento residencial localizado na Cidade Industrial de Curitiba.",
    indexable: true
  },
  {
    name: "Santa Helena",
    slug: "santa-helena",
    type: "vila",
    official: false,
    parentNeighborhood: "Cidade Industrial de Curitiba",
    nearbyAreas: ["Vila Sandra", "CIC"],
    title: "Encanador na Vila Santa Helena (CIC) | Reparos de Encanamento",
    description: "Atendimento de encanador na Vila Santa Helena na CIC, Curitiba. Conserto de vazamentos e troca de vedações.",
    intro: "Na Vila Santa Helena, prestamos atendimento residencial rápido para vazamentos, substituição de registros e desentupimento de pias.",
    highlights: ["Serviços de encanamento direto na Vila Santa Helena", "Troca de reparos de registros de gaveta", "Eliminação de gotejamentos"],
    faq: [
      {
        question: "Atendem na Vila Santa Helena na CIC?",
        answer: "Sim, atendemos todas as vias da Vila Santa Helena com agendamento via WhatsApp."
      }
    ],
    geoContext: "Vila residencial situada na Cidade Industrial de Curitiba.",
    indexable: true
  },
  {
    name: "Neoville",
    slug: "neoville",
    type: "loteamento",
    official: false,
    parentNeighborhood: "Cidade Industrial de Curitiba",
    nearbyAreas: ["Capão Raso", "Pinheirinho", "CIC"],
    title: "Encanador no Neoville (CIC) em Curitiba | Atendimento em Condomínios e Casas",
    description: "Encanador no Neoville em Curitiba. Atendimento para sobrados, novos edifícios e comércios no Neoville / CIC.",
    intro: "O Neoville é um moderno loteamento planejado dentro da CIC. Atendemos condomínios fechados, edifícios e sobrados com manutenção hidráulica impecável.",
    highlights: ["Atendimento para condomínios fechados e sobrados no Neoville", "Instalação de torneiras monocomando e chuveiros", "Conserto de vazamentos em tubulações recentes"],
    faq: [
      {
        question: "Vocês atendem os condomínios do Neoville?",
        answer: "Sim, realizamos manutenção e instalações em edifícios e residências do Neoville."
      }
    ],
    geoContext: "Bairro planejado e moderno situado dentro do território da CIC.",
    indexable: true
  },
  {
    name: "Vila Torres",
    slug: "vila-torres",
    type: "popular_area",
    official: false,
    parentNeighborhood: "Prado Velho",
    nearbyAreas: ["Prado Velho", "Rebouças", "PUCPR"],
    title: "Encanador na Vila Torres em Curitiba | Reparos Hidráulicos",
    description: "Atendimento de encanador na Vila Torres (Prado Velho) em Curitiba. Conserto de vazamentos, registros e torneiras.",
    intro: "A Vila Torres (ou Vila das Torres) fica localizada no bairro Prado Velho, próxima à PUCPR. Oferecemos atendimento eficiente para residências da comunidade.",
    highlights: ["Atendimento para residências na Vila Torres", "Conserto de vazamentos em tubos de água", "Troca de torneiras e engates flexíveis"],
    faq: [
      {
        question: "Vila Torres fica em qual bairro?",
        answer: "A Vila Torres é uma comunidade situada dentro do bairro oficial Prado Velho em Curitiba."
      }
    ],
    geoContext: "Comunidade popular localizada no bairro Prado Velho.",
    indexable: true
  },
  {
    name: "Vila Osternack",
    slug: "vila-osternack",
    type: "popular_area",
    official: false,
    parentNeighborhood: "Sítio Cercado",
    nearbyAreas: ["Sítio Cercado", "Ganchinho", "Umbará"],
    title: "Encanador no Osternack (Sítio Cercado) em Curitiba | Serviços de Encanador",
    description: "Encanador no Osternack, Sítio Cercado em Curitiba. Reparos em vazamentos, pias e tubulações.",
    intro: "O Osternack é um tradicional loteamento habitacional no Sítio Cercado. Prestamos atendimento residencial para sanar problemas no abastecimento e escoamento de água.",
    highlights: ["Atendimento para casas e comércios no Osternack", "Conserto de vazamento de canos e registros", "Instalação de pias e tanques"],
    faq: [
      {
        question: "Atendem no Osternack no Sítio Cercado?",
        answer: "Sim, cobrimos todas as quadras do setor Osternack no Sítio Cercado."
      }
    ],
    geoContext: "Setor residencial do bairro Sítio Cercado na Zona Sul.",
    indexable: true
  },
  {
    name: "Jardim da Ordem",
    slug: "jardim-da-ordem",
    type: "loteamento",
    official: false,
    parentNeighborhood: "Tatuquara",
    nearbyAreas: ["Tatuquara", "Campo de Santana", "Pinheirinho"],
    title: "Encanador no Jardim da Ordem (Tatuquara) em Curitiba | Encanamento Residencial",
    description: "Atendimento de encanador no Jardim da Ordem no Tatuquara, Curitiba. Soluções para vazamentos e canos quebrados.",
    intro: "O Jardim da Ordem é um importante loteamento no Tatuquara. Oferecemos serviços de encanador para manter o sistema de água da sua casa em perfeito funcionamento.",
    highlights: ["Atendimento no Jardim da Ordem com agendamento", "Conserto de vazamentos em tubos de PVC", "Instalação de torneiras e chuveiros"],
    faq: [
      {
        question: "Vocês atendem no Jardim da Ordem no Tatuquara?",
        answer: "Sim, prestamos atendimento residencial em todo o Jardim da Ordem."
      }
    ],
    geoContext: "Loteamento habitacional integrado ao bairro Tatuquara.",
    indexable: true
  },
  {
    name: "Carmo",
    slug: "carmo",
    type: "popular_area",
    official: false,
    parentNeighborhood: "Boqueirão",
    nearbyAreas: ["Boqueirão", "Hauer", "Xaxim"],
    title: "Encanador na Região do Carmo (Boqueirão) em Curitiba | Atendimento Hidráulico",
    description: "Encanador no Carmo / Praça do Carmo no Boqueirão, Curitiba. Reparos de vazamentos, registros e torneiras.",
    intro: "A região do Carmo é um polo central do bairro Boqueirão, entorno da Praça e do Terminal do Carmo. Oferecemos atendimento rápido para residências e lojistas.",
    highlights: ["Atendimento para residências e lojas no Carmo", "Troca de registros, vedações e torneiras", "Conserto de vazamentos e pias"],
    faq: [
      {
        question: "Atendem próximo ao Terminal do Carmo?",
        answer: "Sim, atendemos todas as ruas do entorno do Terminal do Carmo no Boqueirão."
      }
    ],
    geoContext: "Polo urbano e comercial dentro do bairro Boqueirão.",
    indexable: true
  }
];
