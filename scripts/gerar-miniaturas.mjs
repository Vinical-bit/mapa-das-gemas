// Gera public/gemas/<slug>.webp a partir do 3D (uma vez; rode de novo se mudar o visual).
// Precisa do servidor de desenvolvimento rodando:  npm run dev
// Depois:  npm run miniaturas
// Usa o Microsoft Edge (ou Chrome) já instalado, sem baixar navegador.
import { chromium } from 'playwright-core';
import { mkdir, writeFile } from 'node:fs/promises';

const URL_DEV = process.env.URL_DEV || 'http://localhost:5173/mapa-das-gemas/#/dev/miniaturas';
const pasta = new URL('../public/gemas/', import.meta.url);

let browser;
for (const channel of ['msedge', 'chrome']) {
  try { browser = await chromium.launch({ channel, args: ['--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] }); break; }
  catch { /* tenta o próximo */ }
}
if (!browser) throw new Error('Não achei Edge nem Chrome instalados.');

const page = await browser.newPage();
await page.goto(URL_DEV);
await page.waitForFunction(() => window.__miniaturas && Object.keys(window.__miniaturas).length > 0, null, { timeout: 30000 });
const imagens = await page.evaluate(() => window.__miniaturas);
await browser.close();

await mkdir(pasta, { recursive: true });
for (const [slug, dataUrl] of Object.entries(imagens)) {
  await writeFile(new URL(`${slug}.webp`, pasta), Buffer.from(dataUrl.split(',')[1], 'base64'));
  console.log('ok', slug);
}
