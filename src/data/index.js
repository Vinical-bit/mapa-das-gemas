// Consultas derivadas dos dados. Os componentes leem daqui, não de gems.js direto.
import { GEMS } from './gems.js';
import { FONTES } from './fontes.js';
import { ESTADOS, CORES, A_VERIFICAR_GERAL } from './estados.js';

export { GEMS, FONTES, ESTADOS, CORES, A_VERIFICAR_GERAL };

export const gemPorSlug = Object.fromEntries(GEMS.map((g) => [g.slug, g]));

// Estados confirmados de uma gema (os "a verificar" não vão para o mapa).
export function ufsDaGema(gem) {
  return [...new Set(gem.ocorrencias.filter((o) => o.status === 'confirmado').map((o) => o.uf))];
}

// { MG: [gem, gem], PI: [gem] }
export const gemasPorUf = GEMS.reduce((acc, g) => {
  for (const uf of ufsDaGema(g)) (acc[uf] ||= []).push(g);
  return acc;
}, {});

export const ufsComGemas = Object.keys(gemasPorUf).sort((a, b) => ESTADOS[a].localeCompare(ESTADOS[b], 'pt-BR'));

export const coresUsadas = Object.keys(CORES).filter((c) => GEMS.some((g) => g.cores.includes(c)));

export function filtrarGemas({ uf, cor }) {
  return GEMS.filter((g) => (!uf || ufsDaGema(g).includes(uf)) && (!cor || g.cores.includes(cor)));
}

// Fontes citadas por uma gema, na ordem em que aparecem (vira a numeração [1], [2]...).
export function fontesDaGema(gem) {
  const ids = [];
  const add = (f) => f?.fontes?.forEach((id) => { if (!ids.includes(id)) ids.push(id); });
  [gem.resumo, gem.formula, gem.mohs, gem.cor, ...gem.ocorrencias, ...gem.historia, gem.curiosidade, ...gem.curiosidades].forEach(add);
  return ids.map((id) => {
    if (!FONTES[id]) throw new Error(`Fonte "${id}" usada em ${gem.slug} não existe em fontes.js`);
    return { id, ...FONTES[id] };
  });
}

// Tudo que está marcado como "a verificar", por gema e geral.
export function listaAVerificar() {
  const itens = [];
  for (const g of GEMS) {
    for (const o of g.ocorrencias) {
      if (o.status !== 'confirmado') itens.push({ gem: g, texto: `${g.nome} em ${ESTADOS[o.uf]}: ${o.local}`, nota: 'Ocorrência sem fonte confirmada.' });
    }
    for (const f of [g.resumo, g.formula, g.mohs, g.cor, ...g.historia, g.curiosidade, ...g.curiosidades]) {
      if (f?.status === 'a-verificar') itens.push({ gem: g, texto: f.texto, nota: 'Fato sem fonte confirmada.' });
    }
    for (const a of g.aVerificar || []) itens.push({ gem: g, ...a });
  }
  for (const a of A_VERIFICAR_GERAL) itens.push({ gem: null, ...a });
  return itens;
}

export const urlMiniatura = (slug) => `${import.meta.env.BASE_URL}gemas/${slug}.webp`;
