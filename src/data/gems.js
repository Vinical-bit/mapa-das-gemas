// ============================================================
//  Dados das gemas — este é o arquivo para editar.
// ============================================================
// Regras:
//  • Todo fato tem "fontes": ids do catálogo em fontes.js.
//  • Fato sem fonte confirmada: status: 'a-verificar' (aparece marcado
//    no site e na página "A verificar"). Nunca invente.
//  • "aVerificar" guarda pistas ainda não confirmadas (não aparecem
//    como fato, só na lista).
//  • "visual" controla a cor e o formato da pedra 3D e o brilho da página:
//      c1, c2, c3 → cores do corpo (escura, média, clara)
//      brilho     → cor do brilho em volta da pedra e dos destaques
//      fogo       → força dos reflexos coloridos (0 = nenhum, 1.5 = muito)
//      forma      → alongamento (altura), largura, ponta (0–1),
//                   irregularidade (0–0.3), detalhe (1–2), semente (qualquer número)
// ============================================================

export const GEMS = [
  {
    slug: 'ametista',
    nome: 'Ametista',
    tipo: 'Variedade roxa do quartzo',
    cores: ['roxo'],
    formula: { texto: 'SiO₂ (quartzo)', fontes: ['ufrgs-ametista-2023'] },
    mohs: { texto: '7', fontes: ['sgb-mohs'], nota: 'O quartzo é o 7º mineral da escala de Mohs.' },
    cor: {
      texto: 'Acredita-se que o ferro seja o responsável pela cor roxa, mas o mecanismo exato ainda não é conhecido.',
      fontes: ['ufrgs-ametista-2023'],
    },
    ocorrencias: [
      {
        uf: 'RS',
        local: 'Ametista do Sul e região do Alto Uruguai, em geodos dentro de basaltos',
        fontes: ['sgb-ametista-2007'],
        status: 'confirmado',
      },
      { uf: 'ES', local: 'Santa Teresa, em pegmatitos e em depósito hidrotermal', fontes: ['ufrgs-ametista-2023'], status: 'confirmado' },
      { uf: 'MG', local: 'Guaraciaba, em depósito secundário', fontes: ['ufrgs-ametista-2023'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'No Alto Uruguai (RS), garimpeiros já tiravam ametista dos basaltos alterados nos anos 1920. Nos anos 1970 surgiram as "tocas": galerias abertas na rocha com explosivos e brocas.',
      fontes: ['sgb-ametista-2007'],
    },
    historia: [
      {
        texto:
          'Os relatos de extração no Alto Uruguai, no noroeste do Rio Grande do Sul, vêm desde os anos 1920. Os garimpeiros tiravam a ametista das partes mais alteradas das rochas basálticas.',
        fontes: ['sgb-ametista-2007'],
      },
      {
        texto:
          'Nos anos 1970 começaram as "tocas", galerias rudimentares abertas na rocha sã com explosivos e brocas. No fim dos anos 1980 a atividade foi regulamentada no DNPM, que deu a permissão de lavra garimpeira à cooperativa COOGAMAI.',
        fontes: ['sgb-ametista-2007'],
      },
      {
        texto:
          'Em 2007, o Serviço Geológico do Brasil registrava entre 2 e 3 mil garimpeiros trabalhando em galerias subterrâneas na região, com as maiores reservas no município de Ametista do Sul.',
        fontes: ['sgb-ametista-2007'],
      },
      {
        texto:
          'Os geodos estão em antigos derrames de lava do Grupo Serra Geral. A hipótese mais aceita é que fluidos quentes e ricos em sílica preencheram as cavidades em etapas: primeiro calcedônia, depois quartzo e, por fim, ametista, que cristalizou abaixo de 150 °C.',
        fontes: ['ufrgs-ametista-2023'],
      },
      {
        texto:
          'A Rússia foi a principal fonte de ametista até o século XIX, quando grandes depósitos foram encontrados no Brasil. O Rio Grande do Sul segue como grande fornecedor.',
        fontes: ['gia-fevereiro'],
      },
    ],
    curiosidade: {
      texto: 'O nome vem do grego amethystos, que significa "remédio contra a embriaguez".',
      fontes: ['gia-fevereiro'],
    },
    curiosidades: [
      { texto: 'No Brasil, alguns geodos de ametista são tão grandes que dá para ficar de pé dentro deles.', fontes: ['gia-fevereiro'] },
      { texto: 'A ametista do Rio Grande do Sul costuma ter cor mais clara que a de outros países.', fontes: ['gia-fevereiro'] },
      {
        texto: 'Segundo o estudo da UFRGS, as amostras dos geodos de Ametista do Sul servem mais para coleção; as melhores para lapidação vieram de pegmatitos de Santa Teresa (ES).',
        fontes: ['ufrgs-ametista-2023'],
      },
    ],
    aVerificar: [
      {
        texto: 'Ametista na Bahia e em outros estados.',
        nota: 'O painel do Museu de Geociências da USP parece indicar ametista na BA, mas os pontos são pequenos. Falta uma fonte do SGB, ANM ou de universidade.',
      },
    ],
    visual: {
      c1: '#3a1478', c2: '#8d4fe8', c3: '#f3b6ff', brilho: '#a77bea', fogo: 0.75,
      forma: { detalhe: 1, largura: 0.95, alongamento: 1.55, profundidade: 0.85, ponta: 0.55, irregularidade: 0.16, semente: 3.1 },
    },
  },

  {
    slug: 'opala',
    nome: 'Opala',
    tipo: 'Mineraloide de sílica hidratada',
    cores: ['branco', 'multicolor'],
    formula: { texto: 'SiO₂·nH₂O', fontes: ['sgb-opala-2015'] },
    mohs: {
      texto: '5,5 a 6,5',
      fontes: ['sgb-opala-2015'],
      nota: 'As de Pedro II ficam entre 6,0 e 6,5: têm menos água (cerca de 5,7%) que as de outros países.',
    },
    cor: {
      texto:
        'O "jogo de cores" não vem de pigmento: a opala nobre é feita de esferas de sílica de 150 a 400 nanômetros, arrumadas em camadas, que separam a luz nas cores do arco-íris.',
      fontes: ['sgb-opala-2015'],
    },
    ocorrencias: [
      {
        uf: 'PI',
        local: 'Pedro II: mina do Boi Morto (3 km ao norte da cidade) e garimpos da Roça e do Mamoeiro',
        fontes: ['sgb-opala-2015'],
        status: 'confirmado',
      },
    ],
    resumo: {
      texto:
        'Os garimpos de Pedro II (PI) são explorados desde os anos 1940. A mina do Boi Morto, a principal, é conhecida desde 1945, e o auge da produção foi entre 1960 e 1976.',
      fontes: ['sgb-opala-2015'],
    },
    historia: [
      {
        texto:
          'Há duas versões para a descoberta. Numa, nos anos 1940, um sanfoneiro enfeitava a roupa com botões de opala que, à noite, refletiam as cores do espectro. Na outra, nos anos 1930, uma pedra azul leitosa foi levada a Teresina, onde um engenheiro a identificou como opala.',
        fontes: ['sgb-opala-2015'],
      },
      {
        texto:
          'Em 1945, Lauro Cordeiro Brandão requereu 40 hectares para pesquisa mineral onde hoje fica a mina do Boi Morto. Em meados dos anos 1960, a primeira empresa iniciou legalmente a lavra ali.',
        fontes: ['sgb-opala-2015'],
      },
      {
        texto:
          'O auge da produção foi entre 1960 e 1976, quando a Empresa de Minérios Brasil Norte-Nordeste (EMIBRA) operou a mina do Boi Morto.',
        fontes: ['sgb-opala-2015'],
      },
      {
        texto:
          'Em Pedro II predominam as opalas brancas (white opal), com padrões como arlequim, pinfire e broad flash. As opalas negras e amarelas são raríssimas.',
        fontes: ['sgb-opala-2015'],
      },
      {
        texto:
          'As opalas ficam em arenitos da Formação Cabeças, perto do contato com rochas de diabásio que se intrometeram nelas, e preenchem fraturas e fissuras. Também aparecem em depósitos formados pela erosão dessas rochas.',
        fontes: ['sgb-opala-2015'],
      },
      {
        texto: 'Em 2012, a "Opala preciosa de Pedro II e joias artesanais de opalas de Pedro II" recebeu do INPI uma Indicação de Procedência.',
        fontes: ['ibge-ig-2018'],
      },
    ],
    curiosidade: {
      texto:
        'Uma das versões da descoberta envolve um sanfoneiro dos anos 1940 cujos botões de opala brilhavam em várias cores sob a luz artificial.',
      fontes: ['sgb-opala-2015'],
    },
    curiosidades: [
      {
        texto: 'Segundo o SGB, a qualidade da opala de Pedro II só é comparada à da Austrália, que disputa com o Brasil a liderança do mercado mundial.',
        fontes: ['sgb-opala-2015'],
      },
      {
        texto: 'Só cerca de 5% das opalas extraídas no mundo têm jogo de cores, ou seja, são opalas nobres.',
        fontes: ['sgb-opala-2015'],
      },
      {
        texto: 'A opala não é um mineral, e sim um mineraloide: seus átomos não formam uma estrutura cristalina.',
        fontes: ['sgb-opala-2015'],
      },
    ],
    aVerificar: [
      {
        texto: 'Data exata da Indicação de Procedência da opala de Pedro II.',
        nota: 'O mapa do IBGE confirma o ano de 2012, mas a tabela mistura as linhas e não deixa claro se a data é 13/03 ou 29/05/2012. Conferir na base de Indicações Geográficas do INPI.',
      },
    ],
    visual: {
      c1: '#8a9fbc', c2: '#e6eef7', c3: '#a6f3dc', brilho: '#8fe3d0', fogo: 1.45,
      forma: { detalhe: 2, largura: 1.05, alongamento: 1.32, profundidade: 0.82, ponta: 0.18, irregularidade: 0.12, semente: 5.9 },
    },
  },

  {
    slug: 'turmalina-paraiba',
    nome: 'Turmalina Paraíba',
    tipo: 'Turmalina elbaíta com cobre',
    cores: ['azul', 'verde'],
    formula: {
      texto: 'Na(Li₁,₅Al₁,₅)Al₆Si₆O₁₈(BO₃)₃(OH)₄ — elbaíta, com cobre',
      fontes: ['gia-turmalina', 'gia-paraiba-2001'],
    },
    mohs: { texto: '7 a 7,5', fontes: ['gia-turmalina'] },
    cor: {
      texto:
        'O azul e o verde "neon" vêm principalmente do cobre (Cu²⁺). O manganês (Mn³⁺) puxa a cor para o violeta.',
      fontes: ['gia-paraiba-2001'],
    },
    ocorrencias: [
      {
        uf: 'PB',
        local: 'Mina da Batalha, no Morro Alto, perto do vilarejo de São José da Batalha',
        fontes: ['gia-paraiba-2001'],
        status: 'confirmado',
      },
      {
        uf: 'RN',
        local: 'Minas Mulungu (5 km ao norte de Parelhas) e Alto dos Quintos (9 km ao sul de Parelhas)',
        fontes: ['gia-paraiba-2001'],
        status: 'confirmado',
      },
    ],
    resumo: {
      texto:
        'Em 1981 o Serviço Geológico do Brasil achou turmalina no Morro Alto, na Paraíba. A garimpagem começou em 1982, e os primeiros fragmentos azul-neon apareceram em 1987, a uns 30 metros de profundidade.',
      fontes: ['gia-paraiba-2001'],
    },
    historia: [
      {
        texto:
          'Em 1981, a CPRM (Serviço Geológico do Brasil) encontrou turmalina num prospecto de manganotantalita no Morro Alto, perto de São José da Batalha (PB). No ano seguinte, Heitor Barbosa organizou a garimpagem com um grupo de cerca de 13 garimpeiros.',
        fontes: ['gia-paraiba-2001'],
      },
      {
        texto:
          'Em agosto de 1987, a cerca de 30 metros de profundidade, apareceram os primeiros fragmentos com partes azul-brilhante. As pedras chegaram ao mercado de joias em 1989, com cores tão incomuns que no início houve dúvida sobre qual mineral eram.',
        fontes: ['gia-paraiba-2001'],
      },
      {
        texto: 'A produção máxima foi em 1990 e 1991, com poços de mais de 60 metros de profundidade e centenas de metros de túneis no morro.',
        fontes: ['gia-paraiba-2001'],
      },
      {
        texto:
          'Em 1991, turmalinas com cobre também foram descobertas na mina Mulungu, perto de Parelhas (RN). Essas pedras do Rio Grande do Norte têm menos cobre (até 0,69% de CuO) que as mais brilhantes da Mina da Batalha.',
        fontes: ['gia-paraiba-2001'],
      },
      {
        texto: 'Todas essas jazidas ficam em pegmatitos dentro de rochas da Formação Equador, na Província Borborema. A origem do cobre ainda é desconhecida.',
        fontes: ['gia-paraiba-2001'],
      },
    ],
    curiosidade: {
      texto: 'A turmalina Paraíba foi o primeiro caso registrado de cobre dando cor a uma turmalina.',
      fontes: ['gia-paraiba-2001'],
    },
    curiosidades: [
      {
        texto: 'Na feira de Tucson de 1990, o preço dessas pedras saltou de algumas centenas para mais de 2.000 dólares por quilate em apenas quatro dias.',
        fontes: ['gia-paraiba-2001'],
      },
      {
        texto: 'Nos primeiros anos, parte das pedras da mina Mulungu (RN) foi misturada às da Mina da Batalha e vendida como vinda de uma "nova mina Paraíba".',
        fontes: ['gia-paraiba-2001'],
      },
    ],
    aVerificar: [
      {
        texto: 'Município de São José da Batalha.',
        nota: 'A GIA descreve só o vilarejo (4,5 km ao norte de Salgadinho). Confirmar com o IBGE se ele é distrito de Salgadinho (PB) antes de citar o município.',
      },
      {
        texto: 'Situação atual das minas (se ainda produzem).',
        nota: 'O artigo da GIA é de 2001. Falta uma fonte recente da ANM ou do SGB.',
      },
    ],
    visual: {
      c1: '#00678a', c2: '#14dcf5', c3: '#a8fff6', brilho: '#19d6f0', fogo: 0.45,
      forma: { detalhe: 1, largura: 0.78, alongamento: 1.6, profundidade: 0.7, ponta: 0.3, irregularidade: 0.1, semente: 1.7 },
    },
  },

  {
    slug: 'topazio-imperial',
    nome: 'Topázio Imperial',
    tipo: 'Variedade de topázio',
    cores: ['laranja'],
    formula: { texto: 'Al₂(F,OH)₂SiO₄', fontes: ['gia-topazio'] },
    mohs: { texto: '8', fontes: ['sgb-mohs', 'gia-topazio'], nota: 'O topázio é o 8º mineral da escala de Mohs.' },
    cor: {
      texto: 'Laranja-avermelhado médio a vermelho-alaranjado. As cores avermelhadas são raras.',
      fontes: ['gia-topazio'],
    },
    ocorrencias: [
      {
        uf: 'MG',
        local: 'Região de Ouro Preto: mina do Vermelhão (arredores da cidade) e minas Boa Vista, José Correa e Capão do Lana, perto de Rodrigo Silva',
        fontes: ['gia-topazio-1983', 'ufop-topazio-2018'],
        status: 'confirmado',
      },
    ],
    resumo: {
      texto:
        'A referência mais antiga é de 1751, quando "rubis brasileiros" foram achados perto de Vila Rica, antigo nome de Ouro Preto. A descoberta oficial do topázio na região é de 1768, comemorada pela corte em Lisboa.',
      fontes: ['gia-topazio-1983'],
    },
    historia: [
      {
        texto:
          'O topázio imperial é uma variedade que só ocorre na região de Ouro Preto (MG). Em 1983, esse pequeno distrito já era havia mais de 200 anos a única fonte conhecida.',
        fontes: ['ufop-topazio-2018', 'gia-topazio-1983'],
      },
      {
        texto:
          'Segundo registros da corte portuguesa, em 1751 foram encontrados "rubis brasileiros" perto de Vila Rica. A descoberta oficial do topázio na região é datada de 1768, celebrada pela corte em Lisboa.',
        fontes: ['gia-topazio-1983'],
      },
      {
        texto: 'No começo do século XIX, o mineralogista Eschwege visitou as jazidas em 1811 e 1812.',
        fontes: ['gia-topazio-1983'],
      },
      {
        texto:
          'No início do século XX muitos achavam que as minas estavam esgotadas, mas em 1908 foi relatado que as antigas minas de Boa Vista e Saramenha haviam sido reabertas.',
        fontes: ['gia-topazio-1983'],
      },
      {
        texto: 'A mina do Capão do Lana é reconhecida como a primeira a produzir topázio imperial e foi uma das mais produtivas do distrito.',
        fontes: ['gia-topazio-1983'],
      },
    ],
    curiosidade: {
      texto:
        'Hoje, "rubi brasileiro" é o nome que às vezes se dá ao topázio de Ouro Preto que ficou vermelho depois de aquecido.',
      fontes: ['gia-topazio-1983'],
    },
    curiosidades: [
      {
        texto: 'Comparado ao topázio de pegmatitos de outros lugares, o de Ouro Preto tem mais hidroxila (OH) e menos flúor, e costuma ter inclusões em forma de tubo ao longo do cristal.',
        fontes: ['gia-topazio-1983'],
      },
      {
        texto: 'Em 1983, o cristal considerado o maior encontrado em tempos recentes media 27 cm, pesava cerca de 1,8 kg e estava no Museu de História Natural do Condado de Los Angeles.',
        fontes: ['gia-topazio-1983'],
      },
      { texto: 'O topázio imperial é a pedra do 23º aniversário de casamento.', fontes: ['gia-topazio'] },
    ],
    aVerificar: [
      {
        texto: 'Origem do nome "imperial".',
        nota: 'Há histórias que ligam o nome ao Império do Brasil ou aos czares russos, mas nenhuma fonte consultada confirma. Não usado no site.',
      },
      {
        texto: 'Minas ativas hoje.',
        nota: 'A lista de minas vem de um artigo de 1983. Falta uma fonte atual da ANM ou do SGB.',
      },
    ],
    visual: {
      c1: '#b2420e', c2: '#f7932f', c3: '#ffdc9a', brilho: '#f39a3c', fogo: 0.6,
      forma: { detalhe: 1, largura: 0.82, alongamento: 1.7, profundidade: 0.72, ponta: 0.42, irregularidade: 0.13, semente: 8.4 },
    },
  },
];
