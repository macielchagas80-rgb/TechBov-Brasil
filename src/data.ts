import { AnimalCategory, FeatureCard, BenefitCard, TimelineStep, PlanItem, FAQItem, CompanyInfo } from './types';

export const INITIAL_COMPANY_INFO: CompanyInfo = {
  razaoSocial: "TechBov Brasil Inteligência Agropecuária de Precisão Ltda.",
  cnpj: "12.345.678/0001-90",
  endereco: "Rua do Agronegócio, 1500, Parque das Nações - Campo Grande / MS",
  telefone: "+55 (33) 9967-0956",
  email: "contato@techbov.com.br",
  atendimento: "Segunda a Sexta, das 08:00 às 18:00",
  whatsappLink: "553399670956"
};

export const ANIMAL_CATEGORIES: AnimalCategory[] = [
  {
    id: "bovino",
    name: "Bovinos",
    scientificName: "Bos taurus",
    description: "Gestão completa de corte, leite e cria. Acompanhamento de peso ideal para descarte e abate.",
    iconName: "Cow",
    features: ["Rastreamento de lote", "Curva de crescimento", "Previsão de ganho de peso diário (GMD)"]
  },
  {
    id: "suino",
    name: "Suínos",
    scientificName: "Sus scrofa domesticus",
    description: "Gestão reprodutiva e de engorda. Controle de maternidade, creche, crescimento e terminação.",
    iconName: "PiggyBank",
    features: ["Taxa de conversão alimentar", "Mapeamento sanitário", "Histórico de leitegadas"]
  },
  {
    id: "ovino",
    name: "Ovinos",
    scientificName: "Ovis aries",
    description: "Ideal para criação de ovinos produtores de lã e carne. Controle reprodutivo rigoroso.",
    iconName: "Sheep",
    features: ["Monitoramento de partos", "Classificação de velame", "Evolução de peso do cordeiro"]
  },
  {
    id: "caprino",
    name: "Caprinos",
    scientificName: "Capra aegagrus hircus",
    description: "Controle produtivo para gado caprino leiteiro e de corte. Organização por rebanhos específicos.",
    iconName: "Binary",
    features: ["Controle de lactação diária", "Vacinação automatizada", "Agendamento de ordenhas"]
  },
  {
    id: "equino",
    name: "Equinos",
    scientificName: "Equus caballus",
    description: "Acompanhamento individual de cavalos de lida, esporte ou criatório. Vacinação especial e histórico atlético.",
    iconName: "Activity",
    features: ["Ficha genealógica", "Diário de treinos e rotinas", "Lembretes veterinários"]
  },
  {
    id: "outros",
    name: "Outros Animais",
    scientificName: "Criação geral",
    description: "Espessamento adaptável a búfalos, aves, coelhos e outros animais criados sob controle zootécnico customizado.",
    iconName: "Compass",
    features: ["Ajuste flexível de espécie", "Exportação de relatórios", "Registros integrados"]
  }
];

export const FEATURES_LIST: FeatureCard[] = [
  {
    title: "Cadastro de animais",
    description: "Registre cada animal com dados importantes, identificação, categoria, espécie e histórico.",
    icon: "ClipboardList"
  },
  {
    title: "Gestão do rebanho",
    description: "Acompanhe quantidade de animais, grupos, lotes, movimentações e evolução ao longo do tempo.",
    icon: "BarChart3"
  },
  {
    title: "Vacinação e saúde",
    description: "Organize vacinas, tratamentos, vermifugação e cuidados sanitários com lembretes automáticos.",
    icon: "ShieldAlert"
  },
  {
    title: "Controle de alimentação",
    description: "Registre informações sobre alimentação, manejo nutricional e rotina de cuidados do gado.",
    icon: "Utensils"
  },
  {
    title: "Notificações inteligentes",
    description: "Receba lembretes sobre vacinas, revisões, manejos e tarefas importantes de cada lote.",
    icon: "BellRing"
  },
  {
    title: "Histórico completo",
    description: "Guarde informações históricas de cada animal para acompanhar evolução e melhorar a produtividade.",
    icon: "History"
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: 1,
    title: "Acesse pelo celular Android",
    description: "Acesse a plataforma TechBov Brasil pelo navegador de qualquer celular e telefone Android e inicie seu teste gratuito."
  },
  {
    number: 2,
    title: "Cadastre seus animais",
    description: "Organize as informações da sua criação: crie lotes, adicione espécies, idades e dados iniciais no seu Android."
  },
  {
    number: 3,
    title: "Registre fotos e manejos",
    description: "Adicione fotos de vários ângulos com seu smartphone Android, registre vacinações e rotinas de alimentação."
  },
  {
    number: 4,
    title: "Acompanhe tudo no Android",
    description: "Veja estimativas inteligentes de peso, lembretes de vacinas e relatórios zootécnicos sob demanda no seu celular."
  }
];

export const BENEFITS_LIST: BenefitCard[] = [
  {
    title: "Menos papelada",
    description: "Substitua anotações soltas em cadernos por uma gestão digital totalmente organizada na nuvem.",
    icon: "FileText"
  },
  {
    title: "Controle por Celular Android",
    description: "Tenha todas as informações importantes dos seus animais na palma da sua mão com um aplicativo e gestão focados 100% em celulares e telefones Android.",
    icon: "Smartphone"
  },
  {
    title: "Estimativa sem balança",
    description: "Use fotos para obter uma estimativa de peso do animal sem depender da balança estressante em todos os manejos.",
    icon: "Camera"
  },
  {
    title: "Mais organização",
    description: "Controle cadastros, históricos de tratamento, vacinas, alimentação e lembretes importantes em um único lugar.",
    icon: "Database"
  },
  {
    title: "Decisões com mais dados",
    description: "Acompanhe a evolução de peso estimado, manejo alimentar e as condições médicas de toda a sua criação.",
    icon: "TrendingUp"
  },
  {
    title: "Ideal para fazendas e criadores",
    description: "Uma solução prática, moderna e desenhada por quem entende as reais necessidades do dia a dia no campo.",
    icon: "Trees"
  },
  {
    title: "Teste grátis por 30 dias",
    description: "Experimente todas as funcionalidades da plataforma de graça por 30 dias, sem faturas nem compromissos iniciais.",
    icon: "Gift"
  },
  {
    title: "Suporte para começar",
    description: "Nossa equipe dedicada ajuda você pelo WhatsApp a entender todo o funcionamento e cadastrar os primeiros animais.",
    icon: "Users"
  }
];

export const PLANS_LIST: PlanItem[] = [
  {
    name: "Plano Inicial",
    price: "R$ 97 / mês",
    subtitle: "Indicado para pequenos produtores e criadores iniciantes.",
    features: [
      "Acesso completo à plataforma por celular e telefone Android",
      "Cadastro de até 50 animais ativos",
      "Gestão básica de rebanho e categorias",
      "Histórico de saúde e vacinas individual",
      "Suporte por WhatsApp em horário comercial"
    ],
    whatsAppMsg: "Olá, quero conhecer o Plano Inicial da TechBov Brasil e solicitar meu teste grátis por 30 dias no meu Android."
  },
  {
    name: "Plano Fazenda",
    price: "R$ 197 / mês",
    badge: "MAIS RECOMENDADO",
    subtitle: "Ideal para fazendas de médio porte e criadores em ritmo de crescimento.",
    features: [
      "Tudo incluído no Plano Inicial",
      "Cadastro de até 500 animais ativos",
      "Estimativa de peso por foto ilimitada pelo Android",
      "Controle de vacinação e notificações para celular",
      "Controle nutricional e de lote avançado",
      "Relatórios de ganho de peso (GMD) integrados",
      "Suporte prioritário via WhatsApp"
    ],
    whatsAppMsg: "Olá, quero conhecer o Plano Fazenda da TechBov Brasil (Mais Recomendado) e testar grátis por 30 dias no meu celular.",
    popular: true
  },
  {
    name: "Plano Profissional",
    price: "Sob Consulta",
    subtitle: "Desenvolvido para grandes operações, consultores zootécnicos e equipes agronômicas.",
    features: [
      "Tudo incluído no Plano Fazenda",
      "Cadastro ilimitado de animais ativos",
      "Acesso multiusuário para aparelhos Android",
      "Painéis de BI e relatórios analíticos avançados",
      "Integração de dados corporativa",
      "Gerente de conta e suporte 24/7 prioritário",
      "Condições especiais de contratação anual"
    ],
    whatsAppMsg: "Olá, quero falar sobre o Plano Profissional da TechBov Brasil para grandes corporações e solicitar uma proposta Android."
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "p1",
    question: "A TechBov Brasil pesa o animal exatamente?",
    answer: "A TechBov Brasil gera uma estimativa de peso inteligente com base em técnicas de análise visual por fotos capturadas de múltiplos ângulos em telefones Android, além de dados complementares informativos (espécie, raça, porte). O resultado gerado serve para acompanhamento na rotina e apoio na gestão e pode apresentar variações naturais. Ele não substitui a pesagem oficial de precisão em balança mecânica ou eletrônica homologada."
  },
  {
    id: "p2",
    question: "Preciso de uma balança física na minha propriedade para usar a TechBov Brasil?",
    answer: "Não é necessário possuir uma balança física na propriedade para utilizar o recurso de estimativa inovador da TechBov Brasil na rotina de manejo. O sistema foi desenvolvido para ser independente e prático no dia a dia. Contudo, frisamos que para finalidades fiscais, sanitárias, comerciais, legais ou contratuais, a pesagem em balança oficial homologada contínua obrigatória."
  },
  {
    id: "p3",
    question: "A plataforma funciona apenas para bois/bovinos?",
    answer: "Não! Apesar do nome TechBov carregar nossa herança zootécnica de início, nossa plataforma foi construída de forma flexível e robusta, sendo 100% compatível com a gestão e acompanhamento de bovinos (rebanhos de corte e leite), suínos, ovinos, caprinos, equinos e outras espécies de criação rural cadastradas conforme compatibilidade específica."
  },
  {
    id: "p4",
    question: "Como o aplicativo realiza a gestão geral dos rebanhos?",
    answer: "Por meio do sistema no seu Android, você pode catalogar seus animais individualmente ou em lotes produtivos. É possível agendar calendários de imunização (vacinas), monitorar datas de vermifugação, cadastrar custos alimentares, definir alarmes automáticos no telefone de tarefas pendentes e extrair o histórico completo de ganho e perda de peso de cada animal."
  },
  {
    id: "p5",
    question: "Como posso iniciar meu teste gratuito de 30 dias?",
    answer: "Para testar, basta clicar em qualquer botão 'Iniciar teste grátis por 30 dias' no site. Você será direcionado para o nosso canal oficial do WhatsApp de atendimento (DDD 33), onde um consultor irá preparar seu acesso, guiar o login inicial e tirar todas as suas dúvidas práticas de como rodar no seu Android."
  },
  {
    id: "p6",
    question: "Preciso fazer download de algum aplicativo na Google Play Store?",
    answer: "A plataforma TechBov Brasil é um Web App flexível de última geração desenvolvido exclusivamente para celular e telefone Android. Isso significa que você não precisa forçar a instalação de aplicativos pesados que ocupam a memória do seu aparelho. Você acessa diretamente pelo navegador do smartphone Android e pode salvá-lo como um atalho na tela inicial. Todo o suporte ao acesso será fornecido passo a passo pelo WhatsApp."
  },
  {
    id: "p7",
    question: "O sistema funciona em locais remotos sem internet?",
    answer: "As funcionalidades básicas de cadastro e preenchimento de histórico de manejo podem ser feitas off-line no navegador do celular Android. No entanto, para fins de processamento da estimativa de peso por imagem, sincronização de dados globais e recebimento de notificações na nuvem, é necessária uma conexão com a internet (Wi-Fi ou redes móveis 3G/4G/5G)."
  },
  {
    id: "p8",
    question: "Como funciona a contratação após o período grátis?",
    answer: "Ao finalizar o período de cortesia de 30 dias, você poderá escolher livremente migrar para qualquer um dos planos (Inicial, Fazenda ou Profissional) que atenda à sua capacidade de manejo no Android. Caso decida não prorrogar, nenhuma taxa ou ônus será gerado. O teste é 100% de livre compromisso."
  }
];
