import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Oleider Sarmiento — Desarrollador Web Full-Stack" },
      { name: "description", content: "Portfolio de Oleider Sarmiento. Backends serverless, e-commerce, integración de pagos y automatización." },
    ],
  }),
});

const skills = [
  { code: "JS/HTML/CSS", name: "Vanilla Frontend" },
  { code: "CF_WORKERS", name: "Cloudflare Workers" },
  { code: "PAYMENTS", name: "Pasarelas & USDT" },
  { code: "SHEETS_API", name: "Google Sheets CMS" },
  { code: "BOT_API", name: "Telegram Bots" },
  { code: "WEBHOOKS", name: "Webhooks & APIs REST" },
  { code: "APPS_SCRIPT", name: "Google Apps Script" },
  { code: "GIT_GH", name: "Git / GitHub" },
];

const services = [
  {
    id: "01",
    title: "E-commerce & Tiendas",
    desc: "Tiendas personalizadas con catálogos, carrito, variantes y checkout. Rápidas y mobile-first, sin Shopify ni WooCommerce.",
  },
  {
    id: "02",
    title: "Integración de Pagos",
    desc: "Pasarelas tradicionales y USDT on-chain, webhooks, seguimiento de pedidos y notificaciones por Telegram. El ciclo completo.",
  },
  {
    id: "03",
    title: "Backends Serverless",
    desc: "APIs en Cloudflare Workers: gestión de pedidos, KV storage, proxies para proteger tus credenciales, rate limiting.",
  },
  {
    id: "04",
    title: "Google Sheets como CMS",
    desc: "Para equipos que quieren gestionar productos e inventario sin tocar código. Conecto Sheets a tu tienda directamente.",
  },
  {
    id: "05",
    title: "Automatización",
    desc: "Tareas programadas con Apps Script, feeds de datos en tiempo real, bots de Telegram, procesadores de webhooks.",
  },
  {
    id: "06",
    title: "Seguridad Básica",
    desc: "Secrets via variables de entorno, validación HMAC, proxying server-side. Las credenciales nunca llegan al navegador.",
  },
];

const pricing = [
  { type: "Landing + contacto / WhatsApp", price: "$150" },
  { type: "Catálogo con carrito", price: "$250" },
  { type: "Tienda completa + pagos", price: "$400" },
  { type: "Integración de pagos en sitio existente", price: "$200" },
  { type: "Automatización (Sheets, bots, APIs)", price: "$150" },
  { type: "Alcance personalizado", price: "Escribime" },
];

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-brand font-sans antialiased">
      {/* Dot grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
            OS_DEV.26
          </span>
          <div className="flex items-center gap-2">
            <div className="size-1.5 animate-pulse rounded-full bg-accent" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-brand/40">
              Disponible
            </span>
          </div>
        </div>
      </nav>

      <main className="relative px-6 pb-20 pt-28">

        {/* Hero */}
        <section className="mb-24">
          <div className="mb-6 inline-block border-l-2 border-accent px-2 py-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand/50">
              Full-Stack · Serverless · Pagos
            </p>
          </div>

          <h1 className="mb-8 text-[13vw] font-extrabold italic leading-[0.85] tracking-tighter">
            CÓDIGO
            <br />
            <span className="text-accent">QUE</span>
            <br />
            FUNCIONA.
          </h1>

          <div className="flex items-start gap-6">
            <div className="shrink-0 pt-1 font-mono text-[10px] text-brand/20">
              [0.0]
            </div>
            <p className="text-lg font-light leading-tight text-brand/80">
              Construyo tiendas web y herramientas de negocio sin frameworks innecesarios — HTML/CSS/JS limpio, Cloudflare Workers, integraciones que realmente se lanzan.
            </p>
          </div>
        </section>

        {/* Skills grid */}
        <section className="mb-24">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-brand/30">
              Stack técnico
            </h2>
            <span className="font-mono text-[9px] text-brand/20">01 // 04</span>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {skills.map((skill, i) => (
              <div key={skill.code} className="flex flex-col border-t border-border pt-2">
                <span className={i === 0 ? "mb-1 font-mono text-[9px] text-accent" : "mb-1 font-mono text-[9px] text-brand/30"}>
                  {skill.code}
                </span>
                <span className="text-sm font-semibold tracking-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-brand/30">
              Qué hago
            </h2>
            <div className="mx-4 mb-1 h-px flex-1 bg-border" />
          </div>

          <div className="space-y-0">
            {services.map((s) => (
              <div key={s.id} className="border-t border-border py-6 flex gap-6">
                <span className="font-mono text-[9px] text-brand/20 pt-1 shrink-0">{s.id}</span>
                <div>
                  <h3 className="text-base font-bold tracking-tight mb-1">{s.title}</h3>
                  <p className="text-sm font-light leading-snug text-brand/60">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured project */}
        <section className="mb-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-brand/30">
              Proyecto destacado
            </h2>
            <div className="mx-4 mb-1 h-px flex-1 bg-border" />
          </div>

          <div className="relative border border-border p-6">
            <div className="absolute -top-3 left-4 bg-background px-2">
              <span className="font-mono text-[9px] text-accent uppercase tracking-widest">V.01</span>
            </div>

            <h3 className="text-3xl font-extrabold tracking-tighter mb-1">BAZZARHLG</h3>
            <p className="font-mono text-xs tracking-wide text-brand/50 mb-6">
              Plataforma E-commerce · Cloudflare · Google Sheets · USDT
            </p>

            <ul className="space-y-2 mb-6">
              {[
                "Catálogo de productos desde Google Sheets (sin CMS)",
                "Doble pasarela: QvaPay (tradicional) + USDT vía Trondealer",
                "Confirmación de pedidos por webhooks + notificaciones Telegram",
                "Tasas de cambio automáticas vía Google Apps Script",
                "Backend en Cloudflare Workers con KV storage",
                "Carruseles, variantes, carrito con localStorage — cero servidor",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand/70">
                  <span className="font-mono text-[9px] text-accent mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="font-mono text-[9px] text-brand/30 uppercase tracking-widest">
              Stack: Vanilla JS · CSS · Cloudflare Workers · Sheets API · Trondealer · Telegram Bot API
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-mono text-[10px] uppercase tracking-widest text-brand/30">
              Precios
            </h2>
            <div className="mx-4 mb-1 h-px flex-1 bg-border" />
          </div>

          <p className="text-sm text-brand/60 mb-8 font-light leading-snug">
            Trabajo en proyectos de precio fijo con alcance definido antes de empezar. Incluye deployment, documentación básica y revisiones post-entrega. Pago en USDT (BSC/TRC20).
          </p>

          <div className="space-y-0">
            {pricing.map((p, i) => (
              <div key={i} className="border-t border-border py-4 flex items-center justify-between gap-4">
                <span className="text-sm font-light text-brand/80">{p.type}</span>
                <span className={`font-mono text-sm font-bold shrink-0 ${p.price === "Escribime" ? "text-accent" : ""}`}>
                  {p.price}
                </span>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="relative overflow-hidden bg-brand p-8 text-background">
          <div className="absolute right-0 top-0 h-32 w-32 border-r border-t border-background/10" />
          <div className="relative z-10">
            <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.4em] text-background/40">
              Estado: Disponible
            </p>
            <h2 className="mb-12 text-4xl font-extrabold leading-none tracking-tighter">
              ¿ARRANCAMOS
              <br />
              TU PROYECTO?
            </h2>

            <a
              href="mailto:kirox850@gmail.com"
              className="group mb-8 flex items-center justify-between border-b border-background/20 pb-4"
            >
              <span className="font-mono text-sm uppercase tracking-widest">
                Escribime por email
              </span>
              <span className="transform text-xl transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>

            <div className="grid grid-cols-2 gap-4 font-mono text-[9px] uppercase tracking-[0.2em] text-background/30">
              <a href="https://github.com/kirox69" className="hover:text-accent">
                GitHub
              </a>
              <a href="https://t.me/tu-usuario" className="hover:text-accent">
                Telegram
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center font-mono text-[8px] uppercase tracking-[0.5em] text-brand/20">
            Oleider Sarmiento · 2026 · Serverless & Payments
          </div>
          <div className="h-8 w-px bg-gradient-to-b from-border to-transparent" />
        </div>
      </footer>
    </div>
  );
}
