import { PlumbingService } from '../types';

export const PLUMBING_SERVICES: PlumbingService[] = [
  {
    title: "Desentupimento de Pia",
    slug: "desentupimento-de-pia",
    shortDesc: "Desobstrução rápida de pias de cozinha e lavatórios com remoção completa de gordura e restos alimentares.",
    fullDesc: "O entupimento de pias de cozinha e banheiros é causado principalmente pelo acúmulo gradual de gordura, óleos, restos de comida e borra de café nos sifões e tubulações de esgoto. A Água Fácil realiza o desentupimento de pia com raspagem interna mecânica e limpeza de sifão, restaurando o fluxo total de água sem utilizar produtos químicos corrosivos que danificam canos de PVC.",
    iconName: "Pipette",
    features: [
      "Raspagem técnica mecânica da tubulação de esgoto da pia",
      "Limpeza e higienização completa do sifão e conexões",
      "Remoção de placas de gordura e sedimentos impregnados",
      "Testes de vazão e estanqueidade no local com garantia de serviço"
    ],
    commonProblems: [
      "Água acumulando no bowl da pia e demorando para escoar",
      "Retorno de água suja ou espumosa pela cuba ao usar a torneira",
      "Mau cheiro forte de gordura estagnada subindo pelo ralo da pia",
      "Barulhos de borbulhar nos canos após fechar a torneira"
    ],
    solutions: [
      "Passagem de mola desentupidora rotativa flexível apropriada para diâmetros residenciais",
      "Desmontagem e desinfecção do sifão hidráulico",
      "Aplicação de jato de água para limpeza dos resíduos soltos",
      "Orientação preventiva sobre uso de ralinhos e descarte correto de óleo"
    ],
    faq: [
      {
        question: "Por que não devo usar soda cáustica ou produtos diabo verde?",
        answer: "A soda cáustica reage com a gordura acumulada e forma uma massa petrificada (sabão duro) dentro do cano, além de deformar tubos de PVC devido ao calor gerado pela reação química, agravando o entupimento."
      },
      {
        question: "Quanto tempo demora o atendimento para desentupimento de pia?",
        answer: "O procedimento técnico de desobstrução de pia costuma levar entre 30 e 60 minutos após o início dos trabalhos pela equipe técnica."
      }
    ]
  },
  {
    title: "Desentupimento de Vaso Sanitário",
    slug: "desentupimento-de-vaso-sanitario",
    shortDesc: "Remoção de obstruções em vasos sanitários sem quebrar a louça nem danificar o anel de vedação.",
    fullDesc: "Vasos sanitários entupidos exigem atendimento ágil e higiênico. A Água Fácil utiliza desentupidoras rotativas com ponteiras especiais desenvolvidas para navegar curvas de vasos e ramais de esgoto sanitário sem arranhar a porcelana ou danificar vedações. Resolvemos bloqueios provocados por acúmulo de papel higiênico, sabonete, objetos caindo na bacia e obstruções no ramal principal.",
    iconName: "ShowerHead",
    features: [
      "Desobstrução limpa e higiênica sem sujeira no banheiro",
      "Equipamentos roto-rooter com proteção para não danificar a porcelana",
      "Verificação da vedação inferior e alinhamento do anel de cera",
      "Diagnóstico do ramal de descarga e da caixa de inspeção"
    ],
    commonProblems: [
      "Nível de água do vaso subindo quase até a borda ao dar descarga",
      "Água do vaso descendo muito devagar e sem força de sucção",
      "Retorno de resíduos ou bolhas de ar pela bacia sanitária",
      "Obstrução por objetos caídos acidentalmente (blocos odorizadores, brinquedos, panos)"
    ],
    solutions: [
      "Desobstrução com mola espiral helicoidal e ponteira recuperadora",
      "Caso necessário, remoção técnica e reinstalação da bacia com novo anel de vedação",
      "Verificação de fluxo no ramal que conecta o vaso à caixa de inspeção",
      "Higienização da área ao final do atendimento"
    ],
    faq: [
      {
        question: "Precisa quebrar o vaso sanitário para desentupir?",
        answer: "Na grande maioria dos casos não! Utilizamos máquinas desentupidoras com cabos flexíveis que entram diretamente pela bacia. A remoção do vaso só ocorre em casos raros onde há objetos rígidos presos no cano submerso."
      },
      {
        question: "Como evitar entupimentos no vaso sanitário?",
        answer: "Evite descartar lenços umedecidos, papel em excesso, fraldas, absorventes, preservativos ou pedaços de sabonete na bacia sanitária."
      }
    ]
  },
  {
    title: "Desentupimento de Ralo",
    slug: "desentupimento-de-ralo",
    shortDesc: "Desobstrução de ralos de banheiro, box, sacadas, quintais e áreas de serviço.",
    fullDesc: "Ralos travados no box do banheiro ou na lavanderia causam alagamentos incômodos e riscos de infiltração nos pisos e apartamentos vizinhos. Nosso serviço de desentupimento de ralo remove bolos de fios de cabelo, restos de sabão mineralizado, areia, folhas e sujeira acumulada nas caixas sifonadas e tubulações de escoamento.",
    iconName: "Droplet",
    features: [
      "Limpeza e desobstrução de caixas sifonadas e grelhas",
      "Remoção de cabelos, pelos de pets e acúmulos de sabão",
      "Desentupimento de ralos externos de sacadas, terraços e quintais",
      "Eliminação de focos de mau cheiro e proliferação de insetos"
    ],
    commonProblems: [
      "Água do banho acumulando no box e cobrindo os pés",
      "Transbordamento no ralo do banheiro quando a máquina de lavar descarte água",
      "Ralo da sacada ou quintal empossando água durante chuvas",
      "Odor desagradável persistente vindo da grelha do ralo"
    ],
    solutions: [
      "Abertura e higienização mecânica do sifão do ralo",
      "Passagem de cabo desentupidor espiral pelo ramal de descarte",
      "Remoção dos resíduos sólidos e lavagem com fluxo pressurizado",
      "Ajuste da tampa sifonada para vedar e evitar entrada de baratas"
    ],
    faq: [
      {
        question: "Por que o ralo do banheiro exala mau cheiro?",
        answer: "O mau cheiro ocorre quando a caixa sifonada seca ou quando há acúmulo de cabelos e matéria orgânica em decomposição no interior do cano. A limpeza e desobstrução eliminam a fonte do odor."
      }
    ]
  },
  {
    title: "Desentupimento de Esgoto",
    slug: "desentupimento-de-esgoto",
    shortDesc: "Desobstrução da rede principal de esgoto, caixas de inspeção, prumadas e ramais externos.",
    fullDesc: "Entupimentos na tubulação principal de esgoto provocam transbordamento simultâneo em vasos, ralos e pias do imóvel. A Água Fácil conta com máquinas elétricas desentupidoras de alta potência (K-50 e K-500) equipadas com cabos industriais de longa extensão para desentupir redes de esgoto residenciais, prediais e comerciais com total eficiência.",
    iconName: "ShieldAlert",
    features: [
      "Desobstrução de redes de esgoto prediais, comerciais e residenciais",
      "Limpeza e desobstrução de caixas de inspeção e gordura",
      "Remoção de raízes de árvores invadindo tubulações enterradas",
      "Desentupimento de prumadas verticais de condomínios"
    ],
    commonProblems: [
      "Caixa de inspeção no quintal transbordando esgoto bruto",
      "Todos os ralos e vasos do imóvel entupidos simultaneamente",
      "Retorno de efluentes em ralos do pavimento térreo",
      "Interrupção total da vazão da rede para a fossa ou rede pública"
    ],
    solutions: [
      "Utilização de máquina desentupidora mecânica de grande porte",
      "Ponteiras cortadoras para triturar raízes e crostas rígidas",
      "Abertura e desobstrução de caixas de passagem e inspeção",
      "Inspeção técnica do fluxo de esgotamento para prevenir novos bloqueios"
    ],
    faq: [
      {
        question: "O que causa entupimento na rede principal de esgoto?",
        answer: "Geralmente é acúmulo prolongado de gordura, descartes inadequados no sanitário, quebra de canos enterrados por peso de veículos ou infiltração de raízes de árvores nas juntas dos tubos."
      }
    ]
  },
  {
    title: "Desentupimento e Limpeza de Caixa de Gordura",
    slug: "desentupimento-caixa-de-gordura",
    shortDesc: "Raspagem, remoção de placas de gordura e desobstrução dos ramais de entrada e saída da caixa de gordura.",
    fullDesc: "A caixa de gordura retém os resíduos gordurosos vindos das pias para proteger a rede pública de esgoto. Quando satura, a gordura se solidifica em grandes blocos, travando a passagem de água da cozinha. A Água Fácil realiza a limpeza, raspagem manual e mecânica e desobstrução dos tubos da caixa de gordura em residências, restaurantes e condomínios.",
    iconName: "Settings",
    features: [
      "Remoção e raspagem de blocos de gordura solidificada",
      "Desentupimento do tubo defletor e dos ramais de entrada/saída",
      "Limpeza higiênica e descarte correto dos resíduos coletados",
      "Manutenção preventiva para evitar transbordamento no quintal"
    ],
    commonProblems: [
      "Tampa da caixa de gordura estufando ou vazando sujeira na superfície",
      "Pia da cozinha totalmente travada mesmo com o sifão limpo",
      "Mau cheiro insuportável no quintal ou na lavanderia perto da caixa",
      "Presença frequente de moscas e baratas perto da tampa da caixa"
    ],
    solutions: [
      "Retirada mecânica do excesso de crosta gordurosa",
      "Desobstrução do tubo de saída até a caixa de inspeção geral",
      "Lavagem e raspagem das paredes internas do reservatório",
      "Fechamento adequado para conter emanação de odores"
    ],
    faq: [
      {
        question: "De quanto em quanto tempo devo limpar a caixa de gordura?",
        answer: "Em residências, recomendamos a limpeza preventiva a cada 6 meses. Em restaurantes, lanchonetes e condomínios, a limpeza deve ser realizada mensalmente ou trimestralmente dependendo do volume."
      }
    ]
  },
  {
    title: "Caça Vazamentos e Reparos Hidráulicos",
    slug: "reparo-vazamentos",
    shortDesc: "Diagnóstico e conserto de vazamentos em tubulações, torneiras e registros com teste de estanqueidade.",
    fullDesc: "Infiltrações e vazamentos invisíveis causam desperdício de água e danos estruturais nas paredes e pisos. Nossa equipe realiza a detecção do ponto de vazamento e o conserto rápido de tubulações de PVC, PPR e cobre em residências e comércios.",
    iconName: "Wrench",
    features: [
      "Identificação visual e testes de vazamento em paredes e pisos",
      "Substituição de conexões, joelhos e trechos de tubos danificados",
      "Conserto de vazamentos em tubulações de água fria e quente",
      "Ajuste e teste de pressão da rede hidráulica"
    ],
    commonProblems: [
      "Manchas de umidade, bolor ou pintura descascando",
      "Conta de água subindo sem aumento no consumo da família",
      "Pisos fofos ou estufados em banheiros e cozinhas",
      "Relógio de água rodando mesmo com torneiras fechadas"
    ],
    solutions: [
      "Substituição do trecho avariado da tubulação com luvas de correr",
      "Vedação técnica de juntas com cola e rosca apropriadas",
      "Instalação de redutores ou reguladores de pressão se necessário",
      "Teste de estanqueidade no local"
    ],
    faq: [
      {
        question: "Como identificar se há vazamento no meu imóvel?",
        answer: "Feche todas as torneiras e saídas de água e verifique se o ponteiro do hidrômetro (relógio) continua girando. Se girar, há passagem indesejada de água na tubulação."
      }
    ]
  },
  {
    title: "Troca de Torneiras e Registros",
    slug: "troca-torneiras-registros",
    shortDesc: "Instalação e conserto de torneiras, registros de gaveta/pressão e reparos de descarga.",
    fullDesc: "Torneiras pingando e registros com vazamento no miolo causam desperdício contínuo. Realizamos a troca de reparos internos, vedações, substituição de reparos de válvulas de descarga Hydra e Docol e instalação de novos metais hidráulicos.",
    iconName: "CheckCircle",
    features: [
      "Instalação de torneiras monocomando, misturadores e filtros",
      "Substituição de reparos de registro gaveta e pressão",
      "Manutenção e troca de reparos em válvulas Hydra e Docol",
      "Troca de gaxetas e vedações de borracha e cerâmica"
    ],
    commonProblems: [
      "Torneira pingando continuamente mesmo bem fechada",
      "Registro que gira em falso ou emperrou e não fecha a água",
      "Válvula de descarga vazando direto na bacia sanitária",
      "Vazamento na base da torneira com a bancada"
    ],
    solutions: [
      "Troca do reparo interno sem necessidade de quebrar a parede",
      "Substituição do corpo do registro quando espanado",
      "Aplicação de vedações de alta densidade e testes de estanqueidade",
      "Ajuste da pressão de fechamento"
    ],
    faq: [
      {
        question: "É necessário quebrar a parede para consertar um registro emperrado?",
        answer: "Em quase todos os casos, a substituição do reparo ou do castelo do registro resolve o vazamento sem precisar quebrar azulejos."
      }
    ]
  }
];
