# Portfolio — Oleider Sarmiento

Sitio personal de portfolio construido con React + TanStack Router + Tailwind CSS v4.

## Stack

- **Framework:** React + TanStack Router (file-based routing)
- **Estilos:** Tailwind CSS v4
- **Tipografía:** Inter + Space Mono (Google Fonts)
- **Deploy:** Cloudflare Pages / Vercel

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Personalización

Antes de publicar, reemplazá los placeholders en `src/routes/index.tsx`:

- `href="mailto:tu@email.com"` → tu email real
- `href="https://github.com/tu-usuario"` → tu GitHub
- `href="https://t.me/tu-usuario"` → tu Telegram

## Deploy en Cloudflare Pages

1. Subí el repo a GitHub
2. En Cloudflare Pages → conectá el repo
3. Build command: `npm run build`
4. Output directory: `dist`

## Deploy en Vercel

1. Subí el repo a GitHub
2. Importalo en Vercel
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
