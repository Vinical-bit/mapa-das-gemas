// Gera src/data/brasil-uf.json a partir da malha de UFs do IBGE.
// Fonte: API de Malhas do IBGE (v3), qualidade "minima", recorte por UF.
// Uso: npm run mapa            (usa a cópia salva em scripts/fonte/)
//      npm run mapa -- --baixar (baixa de novo do IBGE antes)
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { geoMercator, geoPath, geoArea } from 'd3-geo';

const URL_IBGE =
  'https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=application/vnd.geo%2Bjson&qualidade=minima&intrarregiao=UF';
const FONTE = new URL('./fonte/ibge-uf-minima.json', import.meta.url);
const SAIDA = new URL('../src/data/brasil-uf.json', import.meta.url);

const SIGLAS = {
  11: 'RO', 12: 'AC', 13: 'AM', 14: 'RR', 15: 'PA', 16: 'AP', 17: 'TO',
  21: 'MA', 22: 'PI', 23: 'CE', 24: 'RN', 25: 'PB', 26: 'PE', 27: 'AL', 28: 'SE', 29: 'BA',
  31: 'MG', 32: 'ES', 33: 'RJ', 35: 'SP', 41: 'PR', 42: 'SC', 43: 'RS',
  50: 'MS', 51: 'MT', 52: 'GO', 53: 'DF',
};

if (process.argv.includes('--baixar')) {
  const r = await fetch(URL_IBGE);
  if (!r.ok) throw new Error('IBGE respondeu ' + r.status);
  await writeFile(FONTE, await r.text());
  console.log('Malha baixada do IBGE.');
}

const malha = JSON.parse(await readFile(FONTE, 'utf8'));

// O d3 espera anéis no sentido horário; GeoJSON (RFC 7946) usa anti-horário.
// Se a área sair maior que meia esfera, o anel está invertido.
function desvirar(feature) {
  const g = feature.geometry;
  const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
  for (const poly of polys) {
    for (const anel of poly) {
      if (geoArea({ type: 'Polygon', coordinates: [anel] }) > 2 * Math.PI) anel.reverse();
    }
  }
  return feature;
}
malha.features.forEach(desvirar);

const LARGURA = 1000;
const proj = geoMercator().fitWidth(LARGURA, malha);
const caminho = geoPath(proj).digits(1);
const [[, y0], [, y1]] = caminho.bounds(malha);
const ALTURA = Math.ceil(y1 - y0);
proj.translate([proj.translate()[0], proj.translate()[1] - y0]);

const estados = malha.features.map((f) => {
  const sigla = SIGLAS[Number(f.properties.codarea)];
  if (!sigla) throw new Error('Código de UF desconhecido: ' + f.properties.codarea);
  // centro do maior polígono (ignora ilhas)
  const g = f.geometry;
  const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
  let maior = polys[0], maiorArea = 0;
  for (const p of polys) {
    const a = caminho.area({ type: 'Polygon', coordinates: p });
    if (a > maiorArea) { maiorArea = a; maior = p; }
  }
  const [cx, cy] = caminho.centroid({ type: 'Polygon', coordinates: maior });
  return {
    sigla,
    d: caminho(f),
    cx: Math.round(cx * 10) / 10,
    cy: Math.round(cy * 10) / 10,
    area: Math.round(caminho.area(f)),
  };
});
estados.sort((a, b) => a.sigla.localeCompare(b.sigla));

await mkdir(new URL('../src/data/', import.meta.url), { recursive: true });
await writeFile(
  SAIDA,
  JSON.stringify({
    fonte: 'IBGE, API de Malhas Territoriais v3 (qualidade mínima, recorte por UF)',
    url: URL_IBGE,
    largura: LARGURA,
    altura: ALTURA,
    estados,
  })
);
console.log(`Mapa gerado: ${estados.length} UFs, ${LARGURA}x${ALTURA}.`);
