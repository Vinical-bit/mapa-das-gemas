# Mapa das Gemas do Brasil

Mapa e vitrine interativos das principais gemas brasileiras: onde estão e qual a
história de cada uma. Todo fato tem fonte verificável; o que não foi confirmado
fica na página **A verificar**.

## Rodar

```bash
npm install
npm run dev        # http://localhost:5173/mapa-das-gemas/
npm run build      # gera dist/
```

## Editar as gemas

Tudo fica em [`src/data/gems.js`](src/data/gems.js) (textos, estados, fontes e
visual da pedra) e [`src/data/fontes.js`](src/data/fontes.js) (catálogo de
fontes). Nenhum componente precisa mudar para acrescentar uma gema.

- Cada fato tem `fontes: ['id-da-fonte']`.
- Fato sem fonte confirmada: `status: 'a-verificar'`.
- Pistas soltas vão em `aVerificar` e só aparecem na lista.

Depois de mudar o `visual` de uma gema (ou criar uma nova), gere de novo as
miniaturas da vitrine, com o `npm run dev` rodando:

```bash
npm run miniaturas
```

O script usa o Edge ou o Chrome já instalados e grava `public/gemas/<slug>.webp`.

## Mapa

A malha de estados vem da API de Malhas Territoriais do IBGE (v3). Para refazer:

```bash
npm run mapa -- --baixar
```

## Publicação

Cada push na `main` publica no GitHub Pages pelo workflow
`.github/workflows/deploy.yml`. No repositório, *Settings → Pages → Source*
precisa estar em **GitHub Actions**.
