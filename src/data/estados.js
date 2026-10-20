export const ESTADOS = {
  AC: 'Acre', AL: 'Alagoas', AM: 'Amazonas', AP: 'Amapá', BA: 'Bahia', CE: 'Ceará',
  DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás', MA: 'Maranhão',
  MG: 'Minas Gerais', MS: 'Mato Grosso do Sul', MT: 'Mato Grosso', PA: 'Pará',
  PB: 'Paraíba', PE: 'Pernambuco', PI: 'Piauí', PR: 'Paraná', RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte', RO: 'Rondônia', RR: 'Roraima', RS: 'Rio Grande do Sul',
  SC: 'Santa Catarina', SE: 'Sergipe', SP: 'São Paulo', TO: 'Tocantins',
};

// Categorias do filtro de cor. "amostra" é só a bolinha do filtro.
export const CORES = {
  roxo: { nome: 'Roxo', amostra: '#a77bea' },
  azul: { nome: 'Azul', amostra: '#2fd3ee' },
  verde: { nome: 'Verde', amostra: '#3fd08a' },
  laranja: { nome: 'Laranja', amostra: '#f39a3c' },
  branco: { nome: 'Branco leitoso', amostra: '#dfe8f2' },
  multicolor: { nome: 'Jogo de cores', amostra: 'conic-gradient(#ff6b6b,#ffd166,#3fd08a,#2fd3ee,#a77bea,#ff6b6b)' },
};

// Itens gerais (não ligados a uma gema) que ainda precisam de confirmação.
export const A_VERIFICAR_GERAL = [
  {
    texto: 'Termos de uso atuais da malha de estados do IBGE.',
    nota: 'O crédito "Malha territorial: IBGE" está no rodapé. A orientação conhecida do IBGE é de uso livre com citação da fonte, mas não encontrei a página oficial de termos de uso da API de Malhas v3.',
  },
];
