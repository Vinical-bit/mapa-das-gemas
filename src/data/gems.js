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
      {
        uf: 'BA',
        local: 'Brejinhos, Sento Sé, Caetité, Licínio de Almeida, Jacobina e Juazeiro (segunda gema mais importante do estado em 2005)',
        fontes: ['ibgm-2005'],
        status: 'confirmado',
      },
      { uf: 'GO', local: 'Citada entre as principais gemas produzidas no estado', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'PA', local: 'Ocorrências registradas no mapa gemológico do estado', fontes: ['ibgm-2005'], status: 'confirmado' },
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
      { uf: 'PA', local: 'Ocorrências registradas no mapa gemológico do estado', fontes: ['ibgm-2005'], status: 'confirmado' },
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

  {
    slug: 'agata',
    nome: 'Ágata',
    tipo: 'Calcedônia em faixas (sílica microcristalina)',
    cores: ['laranja'],
    formula: { texto: 'SiO₂ (calcedônia: quartzo microcristalino)', fontes: ['gia-agata-2013'] },
    mohs: { texto: 'cerca de 7', fontes: ['gia-calcedonia-1985'], nota: 'Valor medido em calcedônia; a ágata é uma calcedônia em faixas.' },
    cor: {
      texto: 'As faixas coloridas vêm de elementos como ferro, titânio e manganês, presentes nos fluidos que formaram a pedra.',
      fontes: ['gia-agata-2013'],
    },
    ocorrencias: [
      {
        uf: 'RS',
        local: 'Ao longo dos derrames vulcânicos, de Santana do Livramento até Ametista do Sul; região de Lajeado, Soledade e Salto do Jacuí',
        fontes: ['ibgm-2005', 'sgb-rs-lajeado-1998'],
        status: 'confirmado',
      },
    ],
    resumo: {
      texto:
        'No Rio Grande do Sul, as jazidas de ágata, ametista e citrino acompanham os antigos derrames de lava, de Santana do Livramento até Ametista do Sul. Soledade é o principal centro de comércio de pedras do estado.',
      fontes: ['ibgm-2005'],
    },
    historia: [
      {
        texto: 'A ágata é uma variedade microcristalina de sílica, em geral definida como calcedônia em faixas.',
        fontes: ['gia-agata-2013'],
      },
      {
        texto:
          'As jazidas de ametista, citrino e ágata aparecem em toda a extensão dos derrames vulcânicos do Rio Grande do Sul, de Santana do Livramento até Ametista do Sul, com ramificações por São Martinho da Serra e pela Serra Gaúcha.',
        fontes: ['ibgm-2005'],
      },
      {
        texto:
          'O Serviço Geológico do Brasil publicou mapas gemológicos da Fronteira Oeste do estado (1997) e da região de Lajeado, Soledade e Salto do Jacuí (1998). Neste último, a ágata aparece ao lado de ametista, citrino e cristal-de-rocha.',
        fontes: ['sgb-serie-pedras', 'sgb-rs-lajeado-1998'],
      },
      {
        texto:
          'Em 2005, Soledade era o principal centro de comércio de pedras do estado, e a Universidade de Passo Fundo e o SENAI davam apoio técnico a cerca de 120 microempresas da região.',
        fontes: ['ibgm-2005'],
      },
    ],
    curiosidade: {
      texto: 'A ágata verde e a ágata azul do comércio ganham essas cores com tratamento: aquecimento junto com ácidos ou soluções tingidoras.',
      fontes: ['ibgm-2005'],
    },
    curiosidades: [
      {
        texto: 'Na legenda do mapa gemológico do SGB para Lajeado, Soledade e Salto do Jacuí aparecem, além da ágata, cornalina, ônix, jaspe e calcedônia.',
        fontes: ['sgb-rs-lajeado-1998'],
      },
    ],
    aVerificar: [
      { texto: 'Ágata em outros estados.', nota: 'Só confirmei o Rio Grande do Sul. Outras ocorrências precisam de fonte do SGB, ANM ou IBGM.' },
      { texto: 'Dureza da ágata em fonte brasileira.', nota: 'O valor "cerca de 7" vem de uma nota da GIA sobre calcedônia. Falta uma fonte do SGB ou de universidade.' },
    ],
    visual: {
      c1: '#5a1e0c', c2: '#c8642a', c3: '#f2d2b0', brilho: '#e07a3c', fogo: 0.25,
      forma: { detalhe: 1, largura: 1.08, alongamento: 1.12, profundidade: 0.8, ponta: 0.06, irregularidade: 0.18, semente: 2.3 },
    },
  },

  {
    slug: 'agua-marinha',
    nome: 'Água-marinha',
    tipo: 'Variedade azul do berilo',
    cores: ['azul'],
    formula: { texto: 'Be₃Al₂(SiO₃)₆ (berilo)', fontes: ['sgb-rn-1999'] },
    mohs: { texto: '7,5 a 8', fontes: ['sgb-rn-1999'] },
    cor: {
      texto: 'Azul a verde-azulado. É a variedade azul do berilo, a mesma espécie mineral da esmeralda, da morganita e do heliodoro.',
      fontes: ['sgb-rn-1999'],
    },
    ocorrencias: [
      { uf: 'MG', local: 'Distritos de Teófilo Otoni–Marambaia e do vale do rio Jequitinhonha', fontes: ['gia-proctor-1984', 'ibgm-2005'], status: 'confirmado' },
      { uf: 'BA', local: 'Itanhém, Medeiros Neto, Encruzilhada e Cândido Sales (terceira gema mais importante do estado em 2005)', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'RN', local: 'Lajes Pintadas e Tenente Ananias concentram a maioria dos 94 jazimentos do estado', fontes: ['sgb-rn-1999'], status: 'confirmado' },
      { uf: 'PA', local: 'Ocorrências registradas no mapa gemológico do estado', fontes: ['ibgm-2005'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'Em junho de 1910, a mina Papamel, no rio Marambaia (MG), revelou um cristal de água-marinha de 110,5 kg. A descoberta teve efeito duradouro sobre a mineração de gemas em Minas Gerais.',
      fontes: ['gia-proctor-1984'],
    },
    historia: [
      {
        texto:
          'O nordeste de Minas Gerais tem a maior concentração do mundo de pegmatitos graníticos complexos, rochas que guardam berilo, crisoberilo, topázio, turmalina e kunzita. Segundo a GIA (1984), nos 100 anos anteriores o Brasil abasteceu a maior parte do mercado mundial dessas cinco gemas.',
        fontes: ['gia-proctor-1984'],
      },
      {
        texto: 'Entre os berilos dos pegmatitos mineiros, a água-marinha é de longe o mais importante.',
        fontes: ['gia-proctor-1984'],
      },
      {
        texto:
          'O cristal Papamel saiu da mina de mesmo nome, no rio Marambaia, cerca de 20 km a leste do vilarejo de Ponto de Marambaia. Com 110,5 kg, era em 1984 o maior cristal de água-marinha gemológica encontrado no século XX.',
        fontes: ['gia-proctor-1984'],
      },
      {
        texto: 'No Rio Grande do Norte, a água-marinha é a gema mais abundante: 94 dos 148 jazimentos de gemas estudados pelo SGB em 1999.',
        fontes: ['sgb-rn-1999'],
      },
      {
        texto: 'Na Bahia, era em 2005 a terceira gema mais importante, produzida em Itanhém, Medeiros Neto, Encruzilhada e Cândido Sales.',
        fontes: ['ibgm-2005'],
      },
    ],
    curiosidade: {
      texto: 'O nome vem de duas palavras latinas: aqua, "água", e marina, "do mar".',
      fontes: ['gia-agua-marinha-historia'],
    },
    curiosidades: [
      {
        texto: 'Nos pegmatitos do Rio Grande do Norte, há cristais de berilo com mais de um metro e mais de uma tonelada.',
        fontes: ['sgb-rn-1999'],
      },
      {
        texto: 'O IBGM lista a água-marinha e a morganita entre as gemas cuja cor pode mudar de forma permanente só com aquecimento.',
        fontes: ['ibgm-2005'],
      },
    ],
    aVerificar: [
      {
        texto: 'Origem do cristal da água-marinha Dom Pedro, exposta no Smithsonian.',
        nota: 'Uma página da GIA cita Marambaia (MG); outras fontes citam Pedra Azul (MG). As páginas do Smithsonian não puderam ser lidas. Não usado no site.',
      },
    ],
    visual: {
      c1: '#2a6f8a', c2: '#7fd3ea', c3: '#e2f8ff', brilho: '#7fd8f0', fogo: 0.35,
      forma: { detalhe: 1, largura: 0.74, alongamento: 1.75, profundidade: 0.72, ponta: 0.22, irregularidade: 0.1, semente: 4.4 },
    },
  },

  {
    slug: 'alexandrita',
    nome: 'Alexandrita',
    tipo: 'Variedade do crisoberilo que muda de cor',
    cores: ['verde', 'vermelho'],
    formula: { texto: 'BeAl₂O₄ (crisoberilo)', fontes: ['gia-alexandrita'] },
    mohs: {
      texto: '8,5',
      fontes: ['gia-alexandrita', 'gia-proctor-1988'],
      nota: 'O crisoberilo é a terceira gema mais dura, atrás só do diamante e do coríndon.',
    },
    cor: {
      texto: 'Muda de cor conforme a luz: passa do verde ao vermelho quando trocamos a fonte de luz, por causa de uma faixa de absorção perto de 580 nm.',
      fontes: ['gia-alexandrita'],
    },
    ocorrencias: [
      {
        uf: 'MG',
        local: 'Lavra de Hematita (entre Antônio Dias e Nova Era) e região de Malacacheta',
        fontes: ['gia-proctor-1988', 'ibgm-2005'],
        status: 'confirmado',
      },
      { uf: 'BA', local: 'Citada entre as gemas de vários municípios, em menor escala', fontes: ['ibgm-2005'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'Em outubro de 1986, dois meninos de 10 anos venderam pedrinhas que tinham achado em riachos perto de Hematita (MG). Eram alexandritas: em menos de três meses, a Lavra de Hematita rendeu 50 kg da gema.',
      fontes: ['gia-proctor-1988'],
    },
    historia: [
      {
        texto: 'A alexandrita foi descoberta nos Montes Urais, na Rússia, na década de 1830. O nome homenageia o czar Alexandre II.',
        fontes: ['gia-alexandrita'],
      },
      {
        texto: 'Em 1988, Minas Gerais e o Sri Lanka eram os dois maiores fornecedores de crisoberilo e alexandrita do mundo.',
        fontes: ['gia-proctor-1988'],
      },
      {
        texto: 'A região de Malacacheta (MG) produziu alexandritas finas por cerca de 13 anos, até ser superada pela Lavra de Hematita a partir de outubro de 1986.',
        fontes: ['gia-proctor-1988'],
      },
      {
        texto:
          'Os meninos levaram as pedras a Santa Maria de Itabira e as venderam a um comprador que achou que fossem andaluzita. Pouco depois, muitos comerciantes e colecionadores já chamavam Hematita de a maior descoberta de alexandrita da história.',
        fontes: ['gia-proctor-1988'],
      },
    ],
    curiosidade: {
      texto: 'O primeiro comprador das pedras de Hematita pagou uma ninharia por elas: achou que fossem andaluzita.',
      fontes: ['gia-proctor-1988'],
    },
    curiosidades: [
      {
        texto: 'A Lavra de Hematita também é conhecida como Nova Era ou Itabira, nome que confunde com a região das esmeraldas de Itabira.',
        fontes: ['gia-proctor-1988'],
      },
      {
        texto: '"Crisoberilo" junta o grego para "dourado" à palavra berilo, mas o crisoberilo foi identificado como espécie própria em 1789.',
        fontes: ['gia-proctor-1988'],
      },
    ],
    aVerificar: [{ texto: 'Situação atual da Lavra de Hematita.', nota: 'Os dados são de 1988. Falta uma fonte recente da ANM ou do SGB.' }],
    visual: {
      c1: '#0f3d2a', c2: '#2f8a5a', c3: '#d0607e', brilho: '#3fb37a', fogo: 0.55,
      forma: { detalhe: 1, largura: 0.95, alongamento: 1.25, profundidade: 0.8, ponta: 0.2, irregularidade: 0.14, semente: 6.2 },
    },
  },

  {
    slug: 'brasilianita',
    nome: 'Brasilianita',
    tipo: 'Fosfato hidratado de sódio e alumínio',
    cores: ['amarelo', 'verde'],
    formula: { texto: 'Fosfato hidratado de sódio e alumínio', fontes: ['museus-brasilianita-1945'] },
    mohs: { texto: '5,5', fontes: ['museus-brasilianita-1945'] },
    cor: { texto: 'Amarelo-esverdeada, de translúcida a transparente.', fontes: ['museus-brasilianita-1945'] },
    ocorrencias: [
      { uf: 'MG', local: 'Pegmatito do distrito de Conselheiro Pena, no leste do estado', fontes: ['museus-brasilianita-1945'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'Um comerciante mostrou ao mineralogista Frederick Pough um grande cristal amarelo-esverdeado, dizendo que era crisoberilo. Não era: o estudo publicado em 1945 descreveu um mineral novo, batizado em homenagem ao Brasil.',
      fontes: ['museus-brasilianita-1945'],
    },
    historia: [
      {
        texto: 'A simetria e a dureza do cristal mostraram logo que não podia ser crisoberilo, mas nenhum mineral conhecido combinava com as propriedades.',
        fontes: ['museus-brasilianita-1945'],
      },
      {
        texto:
          'Dois cristais grandes foram comprados de Oswaldo Correia, de Belo Horizonte, para o Museu Americano de História Natural. Um terceiro, idêntico, estava na Divisão de Geologia e Mineralogia, no Rio de Janeiro, onde o curador Evaristo Scorza já tinha analisado sua composição.',
        fontes: ['museus-brasilianita-1945'],
      },
      {
        texto:
          'O depósito era um veio de pegmatito alterado, com cerca de 1 metro de largura, do grupo de minas de mica do distrito de Conselheiro Pena, no leste de Minas Gerais.',
        fontes: ['museus-brasilianita-1945'],
      },
    ],
    curiosidade: {
      texto: 'Os autores queriam chamar o mineral de "brazilita", mas o nome já era usado para outro mineral. Ficou "brazilianita".',
      fontes: ['museus-brasilianita-1945'],
    },
    curiosidades: [
      {
        texto: '"Brasilianita" também já foi usado como nome de fantasia para ametista que fica verde depois de aquecida. O IBGM recomenda evitar esse uso, que confunde com a brasilianita verdadeira.',
        fontes: ['ibgm-2005'],
      },
      { texto: 'Os primeiros cristais impressionaram pelo tamanho: o prismático tinha cerca de 85 mm de comprimento.', fontes: ['museus-brasilianita-1945'] },
    ],
    aVerificar: [
      {
        texto: 'Ano da descoberta no campo.',
        nota: 'Sites de divulgação citam 1944, mas a fonte primária que li só traz a publicação de 1945.',
      },
      {
        texto: 'Fórmula química moderna.',
        nota: 'O site mostra a composição em palavras; falta uma fonte do IMA ou da GIA com a fórmula atual.',
      },
    ],
    visual: {
      c1: '#5f6d10', c2: '#c9d23a', c3: '#f6f9b4', brilho: '#d2dc4a', fogo: 0.35,
      forma: { detalhe: 1, largura: 0.9, alongamento: 1.4, profundidade: 0.82, ponta: 0.38, irregularidade: 0.12, semente: 9.7 },
    },
  },

  {
    slug: 'diamante',
    nome: 'Diamante',
    tipo: 'Carbono cristalizado',
    cores: ['incolor'],
    formula: { texto: 'C (carbono)', fontes: ['gia-diamante'] },
    mohs: { texto: '10', fontes: ['sgb-mohs', 'gia-diamante'], nota: 'É o mineral mais duro da escala de Mohs.' },
    ocorrencias: [
      {
        uf: 'MG',
        local: 'Serra do Espinhaço (Diamantina e Grão Mogol), Serra da Canastra e oeste do estado (Coromandel)',
        fontes: ['sgb-diamante-mg-2017'],
        status: 'confirmado',
      },
      {
        uf: 'BA',
        local: 'Chapada Diamantina: Mucugê, Andaraí, Lençóis e outras áreas, com garimpos desde o século XIX',
        fontes: ['sgb-diamante-ba-2017'],
        status: 'confirmado',
      },
      { uf: 'MT', local: 'Juína e outras áreas kimberlíticas e diamantíferas', fontes: ['sgb-serie-pedras', 'ibgm-2005'], status: 'confirmado' },
      { uf: 'RO', local: 'Áreas kimberlíticas e diamantíferas mapeadas pelo SGB', fontes: ['sgb-serie-pedras'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'A primeira pedra brasileira teria sido achada em 1714 nas lavras de ouro do rio Pinheiro, no Arraial do Tejuco, hoje Diamantina (MG). Entre os séculos XVIII e XIX, o Brasil foi o maior produtor de diamantes do mundo.',
      fontes: ['sgb-diamante-mg-2017'],
    },
    historia: [
      {
        texto:
          'Segundo autores citados pelo SGB, a primeira pedra foi recuperada em 1714 por Francisco Machado da Silva. Confirmada a descoberta, a extração começou de forma clandestina, e os diamantes eram contrabandeados para a Europa como se viessem da Índia.',
        fontes: ['sgb-diamante-mg-2017'],
      },
      {
        texto:
          'A Coroa Portuguesa só soube de fato da extração por volta de 1730 e criou o Distrito Diamantino do Serro Frio, com administração ligada direto a Lisboa. De 1745 a 1772 vigorou o regime de "Contratos"; em 1772 veio a estatal "Real Extração".',
        fontes: ['sgb-diamante-mg-2017'],
      },
      {
        texto:
          'Na segunda metade do século XVIII o Brasil atingiu seu pico de produção e foi o maior produtor mundial até meados do século XIX. Em 1870, a descoberta do primeiro kimberlito na África do Sul levou ao declínio dos garimpos brasileiros.',
        fontes: ['sgb-diamante-mg-2017'],
      },
      {
        texto: 'Na Bahia, a Chapada Diamantina tem registros históricos de garimpos em Mucugê, Andaraí, Lençóis e outras áreas desde o século XIX.',
        fontes: ['sgb-diamante-ba-2017'],
      },
      {
        texto: 'O maior diamante brasileiro é o Presidente Vargas, de 726,6 quilates, encontrado na primeira metade do século XX em Minas Gerais.',
        fontes: ['sgb-diamante-mg-2017'],
      },
    ],
    curiosidade: {
      texto: 'Foi em Grão Mogol (MG) que, pela primeira vez no mundo, se encontraram diamantes dentro de uma rocha: a "Pedra Rica", um conglomerado diamantífero.',
      fontes: ['sgb-diamante-mg-2017'],
    },
    curiosidades: [
      {
        texto: 'Até os anos 1850, os diamantes brasileiros tinham fama de qualidade inferior. Isso mudou com pedras como a Estrela do Sul, de 261,38 quilates, achada em 1853.',
        fontes: ['sgb-diamante-mg-2017'],
      },
      {
        texto: 'Minas Gerais tem 775 corpos de rochas como kimberlitos, o maior número entre os estados brasileiros, e vários deles contêm diamantes.',
        fontes: ['sgb-diamante-mg-2017'],
      },
    ],
    aVerificar: [
      {
        texto: 'Data exata da primeira descoberta.',
        nota: 'O próprio SGB diz que há incertezas. 1714 é a data citada por Guimarães (1955) e Barbosa (1991).',
      },
    ],
    visual: {
      c1: '#7f8ea6', c2: '#e9f1ff', c3: '#ffffff', brilho: '#dfe9ff', fogo: 1.05,
      forma: { detalhe: 0, largura: 1, alongamento: 1.15, profundidade: 1, ponta: 0.3, irregularidade: 0.05, semente: 7.1 },
    },
  },

  {
    slug: 'esmeralda',
    nome: 'Esmeralda',
    tipo: 'Variedade verde do berilo',
    cores: ['verde'],
    formula: { texto: 'Be₃Al₂(SiO₃)₆ (berilo)', fontes: ['sgb-rn-1999'] },
    mohs: { texto: '7,5 a 8', fontes: ['sgb-rn-1999'] },
    cor: { texto: 'Verde. É da família do berilo, junto com a água-marinha, a morganita e o heliodoro.', fontes: ['sgb-rn-1999'] },
    ocorrencias: [
      {
        uf: 'BA',
        local: 'Serra da Carnaíba e garimpo de Socotó, em Campo Formoso; Pindobaçu',
        fontes: ['ibgm-2005', 'gia-esmeralda-2012'],
        status: 'confirmado',
      },
      {
        uf: 'MG',
        local: 'Faixa Itabira–Nova Era: mina Belmont (desde 1978) e área de Capoeirana (desde 1988)',
        fontes: ['gia-esmeralda-2012'],
        status: 'confirmado',
      },
      {
        uf: 'GO',
        local: 'Santa Terezinha de Goiás, importante produtora dos anos 1970 aos 1990',
        fontes: ['gia-esmeralda-2012', 'ibgm-2005'],
        status: 'confirmado',
      },
      {
        uf: 'RN',
        local: 'Faixa esmeraldífera de mais de 30 km no extremo sudoeste do estado, descoberta no estudo do SGB',
        fontes: ['sgb-rn-1999'],
        status: 'confirmado',
      },
    ],
    resumo: {
      texto:
        'Em 1963 começaram a ser localizadas esmeraldas na Serra da Carnaíba, no sertão da Bahia. Nos anos 1980 essa área chegou a responder por quase toda a esmeralda produzida no Brasil.',
      fontes: ['ibgm-2005'],
    },
    historia: [
      {
        texto:
          'Segundo o IBGM, a descoberta de esmeraldas de ótima qualidade em 1963, somada às outras gemas, ajudou o Brasil a se firmar como um dos mais importantes produtores mundiais de gemas.',
        fontes: ['ibgm-2005'],
      },
      {
        texto:
          'Em Carnaíba, a exploração era quase toda subterrânea, em túneis de até 100 metros de profundidade. Nos anos 1980, a área chegou a representar cerca de 25% das exportações brasileiras de gemas, sem contar os diamantes.',
        fontes: ['ibgm-2005'],
      },
      {
        texto: 'Ainda nos anos 1980, foram descobertos cristais no garimpo de Socotó, em Campo Formoso, a cerca de 40 km de Carnaíba, que logo superou a produção de Carnaíba.',
        fontes: ['ibgm-2005'],
      },
      {
        texto:
          'Em Minas Gerais, a mina Belmont, em Itabira, opera desde 1978, e as esmeraldas de Capoeirana, em Nova Era, foram descobertas em 1988. Santa Terezinha de Goiás foi importante dos anos 1970 aos 1990.',
        fontes: ['gia-esmeralda-2012'],
      },
      { texto: 'Em 2005, o Brasil era o segundo maior produtor de esmeraldas do mundo.', fontes: ['ibgm-2005'] },
    ],
    curiosidade: {
      texto: 'A mina Belmont fica numa fazenda de gado. As esmeraldas foram descobertas ali por acaso, pelo avô de Marcelo Ribeiro, que administrava a mina em 2012.',
      fontes: ['gia-esmeralda-2012'],
    },
    curiosidades: [
      {
        texto: 'Segundo a GIA (2012), pedras da faixa Itabira–Nova Era chegavam a ser vendidas por até 30 mil dólares o quilate.',
        fontes: ['gia-esmeralda-2012'],
      },
      {
        texto: 'Em Santa Terezinha, as esmeraldas ficavam em xisto de talco e carbonato, mais macio que o xisto de mica de Nova Era.',
        fontes: ['gia-esmeralda-2012'],
      },
    ],
    aVerificar: [],
    visual: {
      c1: '#064d2c', c2: '#18a35e', c3: '#86f2b6', brilho: '#21c47a', fogo: 0.3,
      forma: { detalhe: 1, largura: 0.86, alongamento: 1.35, profundidade: 0.8, ponta: 0.12, irregularidade: 0.1, semente: 3.8 },
    },
  },

  {
    slug: 'granada',
    nome: 'Granada',
    tipo: 'Grupo de minerais silicatados',
    cores: ['vermelho', 'laranja'],
    formula: {
      texto: 'Muda conforme a espécie. Ex.: almandina Fe₃Al₂(SiO₄)₃; piropo Mg₃Al₂(SiO₄)₃; espessartita Mn₃Al₂(SiO₄)₃',
      fontes: ['gia-granada'],
    },
    mohs: { texto: '6,5 a 7,5', fontes: ['gia-granada'] },
    cor: {
      texto: 'Granada não é um mineral só, e sim um grupo: almandina, andradita, grossulária, piropo, espessartita e outras. No Rio Grande do Norte aparece a hessonita, uma granada alaranjada.',
      fontes: ['gia-granada', 'sgb-rn-1999'],
    },
    ocorrencias: [
      { uf: 'MG', local: 'Vales do Jequitinhonha, Mucuri e Rio Doce', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'GO', local: 'Citada entre as principais gemas do estado', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'PA', local: 'Ocorrências registradas no mapa gemológico do estado', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'RN', local: 'Jazimentos estudados pelo SGB; hessonita em vários tactitos com scheelita', fontes: ['sgb-rn-1999'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'Granada é o nome de um grupo de minerais parecidos. No Brasil, aparece entre as gemas de Minas Gerais, Goiás, Pará e Rio Grande do Norte.',
      fontes: ['gia-granada', 'ibgm-2005', 'sgb-rn-1999'],
    },
    historia: [
      {
        texto:
          'No nordeste de Minas, a granada está entre as principais gemas dos vales do Jequitinhonha, Mucuri e Rio Doce, região que o IBGM descreve como uma das maiores províncias gemológicas do mundo.',
        fontes: ['ibgm-2005'],
      },
      {
        texto: 'No Rio Grande do Norte, o SGB registrou 4 jazimentos de granada entre os 148 de gemas estudados em 1999. A hessonita, granada alaranjada, aparece em vários tactitos com scheelita.',
        fontes: ['sgb-rn-1999'],
      },
      { texto: 'Em Goiás e no Pará, a granada aparece nas listas de gemas produzidas ou registradas nos estados.', fontes: ['ibgm-2005'] },
    ],
    curiosidade: {
      texto: 'Na Antiguidade, a palavra "carbúnculo" era usada para as granadas vermelhas.',
      fontes: ['gia-granada-historia'],
    },
    curiosidades: [],
    aVerificar: [
      { texto: 'Quais espécies de granada ocorrem em cada estado.', nota: 'As fontes citam só "granada", sem a espécie (exceto a hessonita do RN).' },
      { texto: 'Origem do nome "granada".', nota: 'Costuma-se ligar à romã, mas a página da GIA consultada não fala disso. Não usado.' },
    ],
    visual: {
      c1: '#3d0610', c2: '#a0182c', c3: '#ff7070', brilho: '#d23040', fogo: 0.3,
      forma: { detalhe: 0, largura: 1, alongamento: 1.05, profundidade: 0.95, ponta: 0.05, irregularidade: 0.08, semente: 5.2 },
    },
  },

  {
    slug: 'heliodoro',
    nome: 'Heliodoro',
    tipo: 'Variedade amarela do berilo',
    cores: ['amarelo'],
    formula: { texto: 'Be₃Al₂(SiO₃)₆ (berilo)', fontes: ['sgb-rn-1999'] },
    mohs: { texto: '7,5 a 8', fontes: ['sgb-rn-1999'] },
    cor: { texto: 'Amarelo-dourado.', fontes: ['sgb-rn-1999', 'gia-proctor-1984'] },
    ocorrencias: [
      { uf: 'MG', local: 'Pequenas quantidades em alguns pegmatitos do nordeste do estado', fontes: ['gia-proctor-1984'], status: 'confirmado' },
      { uf: 'ES', local: 'Arredores de Colatina', fontes: ['gia-proctor-1984'], status: 'confirmado' },
      { uf: 'RN', local: 'Ocorre junto das outras variedades de berilo do estado', fontes: ['sgb-rn-1999'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'O heliodoro é o berilo amarelo-dourado. Em Minas Gerais aparece em pequenas quantidades, nos mesmos pegmatitos que dão a água-marinha, bem mais comum.',
      fontes: ['gia-proctor-1984', 'sgb-rn-1999'],
    },
    historia: [
      {
        texto: 'Quase todas as variedades de berilo gemológico ocorrem em Minas Gerais, e todas, menos a esmeralda, vêm de pegmatitos.',
        fontes: ['gia-proctor-1984'],
      },
      {
        texto: 'O berilo forma uma família de gemas separadas pela cor: água-marinha azul, esmeralda verde, morganita rosa e heliodoro amarelo-dourado. No Rio Grande do Norte ocorrem todas elas.',
        fontes: ['sgb-rn-1999'],
      },
      { texto: 'Heliodoros de boa qualidade são sempre escassos, principalmente os grandes.', fontes: ['gia-proctor-1984'] },
    ],
    curiosidade: {
      texto: 'Em 1984, o maior heliodoro lapidado do mundo, com 2.054 quilates, estava no salão de gemas do Smithsonian, em Washington.',
      fontes: ['gia-proctor-1984'],
    },
    curiosidades: [],
    aVerificar: [
      { texto: 'Origem do nome "heliodoro".', nota: 'Costuma-se ligar ao grego hélios (Sol), mas não achei fonte do SGB, IBGM ou GIA confirmando. Não usado.' },
    ],
    visual: {
      c1: '#8a6a08', c2: '#f0c330', c3: '#fff3b0', brilho: '#f5cf45', fogo: 0.35,
      forma: { detalhe: 1, largura: 0.78, alongamento: 1.6, profundidade: 0.74, ponta: 0.2, irregularidade: 0.11, semente: 1.3 },
    },
  },

  {
    slug: 'kunzita',
    nome: 'Kunzita',
    tipo: 'Variedade rosa do espodumênio',
    cores: ['rosa'],
    formula: { texto: 'LiAlSi₂O₆ (espodumênio)', fontes: ['gia-kunzita'] },
    mohs: { texto: '6,5 a 7', fontes: ['gia-kunzita'] },
    cor: { texto: 'Rosa, por traços de manganês.', fontes: ['gia-kunzita', 'unicamp-litio-2022'] },
    ocorrencias: [
      { uf: 'MG', local: 'Distrito pegmatítico de Conselheiro Pena, com a lavra do Urucum, em Galiléia', fontes: ['unicamp-litio-2022'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'A lavra do Urucum, em Galiléia (MG), ficou famosa no mundo por ter produzido quase três toneladas de kunzita, das quais cerca de 500 kg de qualidade excepcional.',
      fontes: ['unicamp-litio-2022'],
    },
    historia: [
      {
        texto: 'O nome homenageia o gemólogo George Frederick Kunz, o primeiro a identificá-la como uma variedade própria do espodumênio.',
        fontes: ['gia-kunzita'],
      },
      {
        texto: 'Puro, o espodumênio é incolor. Suas variedades gemológicas mais conhecidas são a kunzita, rosa, e a hiddenita, verde e de ocorrência mais limitada.',
        fontes: ['unicamp-litio-2022'],
      },
      {
        texto: 'Em Minas Gerais, a kunzita foi observada só no distrito de Conselheiro Pena, cujas jazidas são famosas por grandes quantidades de kunzita de qualidade gemológica.',
        fontes: ['unicamp-litio-2022'],
      },
      {
        texto: 'Em 1984, a GIA citava a kunzita entre as cinco gemas pelas quais os pegmatitos do nordeste de Minas são conhecidos.',
        fontes: ['gia-proctor-1984'],
      },
    ],
    curiosidade: {
      texto: 'A kunzita é uma variedade do espodumênio, o principal mineral de onde se extrai lítio.',
      fontes: ['unicamp-litio-2022'],
    },
    curiosidades: [
      { texto: 'A mesma lavra do Urucum, em Galiléia, também revelou em 1973 o maior depósito de cristais de morganita já encontrado.', fontes: ['gia-proctor-1984'] },
    ],
    aVerificar: [],
    visual: {
      c1: '#7a3a7a', c2: '#e3a3d8', c3: '#fde6f7', brilho: '#eaa8de', fogo: 0.3,
      forma: { detalhe: 1, largura: 0.85, alongamento: 1.7, profundidade: 0.48, ponta: 0.28, irregularidade: 0.1, semente: 2.9 },
    },
  },

  {
    slug: 'morganita',
    nome: 'Morganita',
    tipo: 'Variedade rosa do berilo',
    cores: ['rosa'],
    formula: { texto: 'Be₃Al₂(SiO₃)₆ (berilo)', fontes: ['sgb-rn-1999'] },
    mohs: { texto: '7,5 a 8', fontes: ['sgb-rn-1999'] },
    cor: { texto: 'Rosa, por traços de manganês. Também aparece em tons de pêssego e salmão.', fontes: ['gia-morganita', 'gia-proctor-1984'] },
    ocorrencias: [
      { uf: 'MG', local: 'Lavra do Córrego do Urucum, em Galiléia, e outros pegmatitos do nordeste do estado', fontes: ['gia-proctor-1984'], status: 'confirmado' },
      { uf: 'RN', local: 'Pegmatitos com lítio do município de Equador', fontes: ['sgb-rn-1999'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'Em 1973, a lavra do Córrego do Urucum, em Galiléia (MG), revelou o maior depósito de cristais de morganita já encontrado até então: cerca de 300 cristais, alguns de até 10 kg, forrando as paredes de um enorme bolsão.',
      fontes: ['gia-proctor-1984'],
    },
    historia: [
      { texto: 'O nome homenageia o financista americano J. P. Morgan.', fontes: ['gia-morganita'] },
      { texto: 'A morganita é mais rara que a água-marinha. Em Minas Gerais aparece em pequenas quantidades, em algumas localidades.', fontes: ['gia-proctor-1984'] },
      {
        texto: 'Quase toda a morganita é aquecida, um processo que reproduz o que a natureza às vezes faz para produzir pedras rosadas.',
        fontes: ['gia-proctor-1984', 'ibgm-2005'],
      },
      { texto: 'No Rio Grande do Norte, há registro de morganita nos pegmatitos com lítio do município de Equador.', fontes: ['sgb-rn-1999'] },
    ],
    curiosidade: { texto: 'Há exemplares brasileiros de morganita com mais de 10 kg.', fontes: ['gia-morganita'] },
    curiosidades: [
      { texto: 'A lavra do Urucum, a mesma da morganita gigante, também ficou famosa pela kunzita.', fontes: ['unicamp-litio-2022', 'gia-proctor-1984'] },
    ],
    aVerificar: [],
    visual: {
      c1: '#b0607a', c2: '#f4b6c2', c3: '#fff0f2', brilho: '#f6a9bd', fogo: 0.3,
      forma: { detalhe: 1, largura: 1, alongamento: 1.25, profundidade: 0.82, ponta: 0.1, irregularidade: 0.12, semente: 6.6 },
    },
  },

  {
    slug: 'quartzo',
    nome: 'Quartzo',
    tipo: 'Cristal de rocha (quartzo incolor)',
    cores: ['incolor'],
    formula: { texto: 'SiO₂', fontes: ['ufrgs-ametista-2023'] },
    mohs: { texto: '7', fontes: ['sgb-mohs'], nota: 'O quartzo é o 7º mineral da escala de Mohs.' },
    cor: {
      texto: 'O cristal de rocha é incolor e transparente. Impurezas e defeitos na estrutura dão as variedades coloridas, como ametista, citrino e quartzo rosa.',
      fontes: ['ufrgs-ametista-2023'],
    },
    ocorrencias: [
      { uf: 'GO', local: 'Citado entre as principais gemas do estado', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'BA', local: 'Citado entre as gemas produzidas em vários municípios', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'PA', local: 'Cristal de rocha registrado no mapa gemológico do estado', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'RS', local: 'Cristal-de-rocha na região de Lajeado, Soledade e Salto do Jacuí', fontes: ['sgb-rs-lajeado-1998'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'O Brasil tem papel de destaque na produção de quartzo e abastece vários setores da indústria mundial. Segundo estudo publicado pela UFRGS, grandes cristais de quartzo ocorrem quase exclusivamente no Brasil.',
      fontes: ['ufrgs-ametista-2023'],
    },
    historia: [
      { texto: 'O quartzo é um dos compostos mais abundantes da crosta terrestre: cerca de 12% dos minerais.', fontes: ['ufrgs-ametista-2023'] },
      {
        texto:
          'No Brasil ele se forma em quatro ambientes: pegmatitos graníticos, veios hidrotermais, geodos em derrames de basalto e depósitos secundários. Os cristais transparentes de pegmatito costumam ir para a gemologia; os de veios e depósitos secundários, para a indústria.',
        fontes: ['ufrgs-ametista-2023'],
      },
      { texto: 'O IBGM cita o cristal de quartzo entre as gemas que o Brasil produz em larga escala.', fontes: ['ibgm-2005'] },
    ],
    curiosidade: {
      texto: 'O quartzo vai para tintas, porcelanas, vidros, lentes e fibras ópticas, além de joias.',
      fontes: ['ufrgs-ametista-2023'],
    },
    curiosidades: [
      { texto: 'Aquecido acima de 573 °C, o quartzo muda de fase, e não dá mais para restaurar a cor por irradiação.', fontes: ['ufrgs-ametista-2023'] },
    ],
    aVerificar: [
      { texto: 'Quartzo em Minas Gerais e outros estados.', nota: 'Muito provável, mas não achei fonte do SGB ou do IBGM que cite o estado para o cristal de rocha.' },
      {
        texto: 'Município de Cristalina (GO).',
        nota: 'O IBGM cita uma "Associação dos Pedristas de Cristalina", mas não diz que o quartzo vem de lá. Não usado como fato.',
      },
    ],
    visual: {
      c1: '#6d7c90', c2: '#e3eaf3', c3: '#ffffff', brilho: '#cfe0f5', fogo: 0.22,
      forma: { detalhe: 1, largura: 0.7, alongamento: 1.85, profundidade: 0.7, ponta: 0.62, irregularidade: 0.08, semente: 0.7 },
    },
  },

  {
    slug: 'quartzo-rosa',
    nome: 'Quartzo rosa',
    tipo: 'Variedade rosa do quartzo',
    cores: ['rosa'],
    formula: { texto: 'SiO₂', fontes: ['gia-quartzo-rosa'] },
    mohs: { texto: '7', fontes: ['gia-quartzo-rosa', 'sgb-mohs'] },
    cor: { texto: 'Rosa e translúcido. O aspecto turvo vem de inclusões minerais microscópicas.', fontes: ['gia-quartzo-rosa'] },
    ocorrencias: [
      { uf: 'MG', local: 'Vales do Jequitinhonha, Mucuri e Rio Doce', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'RN', local: 'Distrito Gemológico Sul, das turmalinas', fontes: ['sgb-rn-1999'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'Em Minas Gerais, o quartzo rosa está entre as principais gemas dos vales do Jequitinhonha, Mucuri e Rio Doce. No Rio Grande do Norte, aparece no distrito gemológico das turmalinas.',
      fontes: ['ibgm-2005', 'sgb-rn-1999'],
    },
    historia: [
      { texto: 'É uma das variedades do quartzo macrocristalino, ao lado do cristal de rocha, da ametista e do citrino.', fontes: ['ufrgs-ametista-2023'] },
      {
        texto: 'No Rio Grande do Norte, o SGB registrou quartzo róseo no Distrito Gemológico Sul, junto de turmalina, lazulita, euclásio, granada e água-marinha.',
        fontes: ['sgb-rn-1999'],
      },
    ],
    curiosidade: {
      texto: 'Muitos pegmatitos complexos têm um "miolo" de quartzo, que às vezes é quartzo rosa.',
      fontes: ['gia-paraiba-2001'],
    },
    curiosidades: [],
    aVerificar: [{ texto: 'Causa da cor rosa.', nota: 'A página da GIA consultada não explica a causa. Falta uma fonte.' }],
    visual: {
      c1: '#b77a8c', c2: '#f2c4cf', c3: '#fff2f5', brilho: '#f3b8c8', fogo: 0.12,
      forma: { detalhe: 1, largura: 1.08, alongamento: 1.15, profundidade: 0.85, ponta: 0.08, irregularidade: 0.16, semente: 8.1 },
    },
  },

  {
    slug: 'quartzo-citrino',
    nome: 'Quartzo citrino',
    tipo: 'Variedade amarela do quartzo',
    cores: ['amarelo', 'laranja'],
    formula: { texto: 'SiO₂', fontes: ['gia-citrino'] },
    mohs: { texto: '7', fontes: ['gia-citrino', 'sgb-mohs'] },
    cor: { texto: 'Amarelo a laranja, por traços de ferro.', fontes: ['gia-citrino'] },
    ocorrencias: [
      { uf: 'RS', local: 'Ao longo dos derrames vulcânicos, junto com ametista e ágata', fontes: ['ibgm-2005', 'sgb-ametista-2007'], status: 'confirmado' },
      { uf: 'GO', local: 'Citado entre as principais gemas do estado', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'MG', local: 'Vales do Jequitinhonha, Mucuri e Rio Doce', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'PA', local: 'Ocorrências registradas no mapa gemológico do estado', fontes: ['ibgm-2005'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'A maior parte do citrino do mercado é ametista aquecida. Geodos de ametista de lugares como o Brasil costumam ser aquecidos e virar "catedrais" de citrino.',
      fontes: ['gia-citrino'],
    },
    historia: [
      { texto: 'O IBGM cita o citrino entre as gemas que o Brasil produz em larga escala.', fontes: ['ibgm-2005'] },
      {
        texto: 'No Rio Grande do Sul, as jazidas de citrino acompanham as de ametista e ágata, ao longo dos derrames vulcânicos.',
        fontes: ['ibgm-2005'],
      },
      { texto: 'O citrino natural é raro.', fontes: ['gia-citrino'] },
      { texto: 'O IBGM classifica a mudança de cor do quartzo para citrino por aquecimento como uma transformação permanente.', fontes: ['ibgm-2005'] },
    ],
    curiosidade: {
      texto: 'Pelas regras de nomenclatura do IBGM, não se deve chamar o citrino de "topázio-citrino" ou "quartzo-topázio". Os nomes certos são "citrino" e "quartzo amarelo".',
      fontes: ['ibgm-2005'],
    },
    curiosidades: [],
    aVerificar: [],
    visual: {
      c1: '#9a4a08', c2: '#f0a43a', c3: '#ffe8a8', brilho: '#f7b24a', fogo: 0.3,
      forma: { detalhe: 1, largura: 0.85, alongamento: 1.55, profundidade: 0.78, ponta: 0.5, irregularidade: 0.12, semente: 4.9 },
    },
  },

  {
    slug: 'turmalina',
    nome: 'Turmalina',
    tipo: 'Grupo de borossilicatos',
    cores: ['verde', 'azul', 'vermelho', 'rosa'],
    formula: {
      texto: 'Complexa, muda com a espécie. Ex.: elbaíta Na(Li₁,₅Al₁,₅)Al₆Si₆O₁₈(BO₃)₃(OH)₄',
      fontes: ['gia-turmalina'],
    },
    mohs: { texto: '7 a 7,5', fontes: ['gia-turmalina'] },
    cor: { texto: 'Azul, verde, vermelha (rubelita) e multicolorida, entre outras.', fontes: ['gia-proctor-1985'] },
    ocorrencias: [
      {
        uf: 'MG',
        local: 'Distrito de Governador Valadares (minas Cruzeiro, Golconda, Santa Rosa e Jonas) e região de Araçuaí',
        fontes: ['gia-proctor-1985'],
        status: 'confirmado',
      },
      { uf: 'RN', local: 'Parelhas e Equador reúnem todos os jazimentos de turmalina do estado', fontes: ['sgb-rn-1999'], status: 'confirmado' },
      { uf: 'BA', local: 'Citada entre as gemas de vários municípios, em menor escala', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'GO', local: 'Citada entre as principais gemas do estado', fontes: ['ibgm-2005'], status: 'confirmado' },
      { uf: 'PA', local: 'Ocorrências registradas no mapa gemológico do estado', fontes: ['ibgm-2005'], status: 'confirmado' },
    ],
    resumo: {
      texto:
        'Os arredores de Governador Valadares (MG) têm algumas das minas de turmalina mais famosas do mundo, como Cruzeiro, Golconda, Santa Rosa e Jonas, que renderam milhões de quilates.',
      fontes: ['gia-proctor-1985'],
    },
    historia: [
      {
        texto:
          'Os pegmatitos de Minas eram explorados de forma precária desde o início do século XX, com centro comercial em Teófilo Otoni. Ali, imigrantes alemães e libaneses passaram a exportar "pedras coradas", como turmalinas e águas-marinhas.',
        fontes: ['ibgm-2005'],
      },
      {
        texto: 'De 1955 a 1970, a mina Cruzeiro produziu em média 200 kg de cristais por semana, mas só 1 ou 2 kg eram turmalina de qualidade gemológica.',
        fontes: ['gia-proctor-1985'],
      },
      {
        texto: 'A mina Jonas, descoberta em 1978, foi a descoberta de rubelita (turmalina vermelha) mais importante da história do Brasil.',
        fontes: ['gia-proctor-1985'],
      },
      {
        texto: 'No Rio Grande do Norte, as turmalinas são a segunda gema mais abundante, com 19 jazimentos, todos em Parelhas e Equador.',
        fontes: ['sgb-rn-1999'],
      },
    ],
    curiosidade: {
      texto:
        'Na mina Jonas, um único bolsão, achado dias antes de a mineração parar por falta de dinheiro, rendeu centenas de quilos de turmalina vermelha de qualidade gemológica.',
      fontes: ['gia-proctor-1985'],
    },
    curiosidades: [
      { texto: 'A turmalina Paraíba, azul-neon por causa do cobre, tem página própria neste mapa.', fontes: ['gia-paraiba-2001'] },
    ],
    aVerificar: [],
    visual: {
      c1: '#0b3d22', c2: '#2c9a58', c3: '#ff8fb0', brilho: '#4fcf86', fogo: 0.5,
      forma: { detalhe: 1, largura: 0.66, alongamento: 1.7, profundidade: 0.6, ponta: 0.2, irregularidade: 0.1, semente: 1.1 },
    },
  },
];
