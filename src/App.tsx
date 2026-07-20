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
  { id: "01", title: "E-commerce & Tiendas", desc: "Tiendas personalizadas con catálogos, carrito, variantes y checkout. Rápidas y mobile-first, sin Shopify ni WooCommerce." },
  { id: "02", title: "Integración de Pagos", desc: "Pasarelas tradicionales y USDT on-chain, webhooks, seguimiento de pedidos y notificaciones por Telegram. El ciclo completo." },
  { id: "03", title: "Backends Serverless", desc: "APIs en Cloudflare Workers: gestión de pedidos, KV storage, proxies para proteger tus credenciales, rate limiting." },
  { id: "04", title: "Google Sheets como CMS", desc: "Para equipos que quieren gestionar productos e inventario sin tocar código. Conecto Sheets a tu tienda directamente." },
  { id: "05", title: "Automatización", desc: "Tareas programadas con Apps Script, feeds de datos en tiempo real, bots de Telegram, procesadores de webhooks." },
  { id: "06", title: "Seguridad Básica", desc: "Secrets via variables de entorno, validación HMAC, proxying server-side. Las credenciales nunca llegan al navegador." },
];

const pricing = [
  { type: "Landing + contacto / WhatsApp", price: "$50" },
  { type: "Catálogo con carrito", price: "$80" },
  { type: "Tienda completa + pagos", price: "$200" },
  { type: "Integración de pagos en sitio existente", price: "$100" },
  { type: "Automatización (Sheets, bots, APIs)", price: "$150" },
  { type: "Alcance personalizado", price: "Escribeme" },
];

const bazzarFeatures = [
  "Catálogo de productos desde Google Sheets (sin CMS)",
  "Doble pasarela: QvaPay (tradicional) + USDT vía Trondealer",
  "Confirmación de pedidos por webhooks + notificaciones Telegram",
  "Tasas de cambio automáticas vía Google Apps Script",
  "Backend en Cloudflare Workers con KV storage",
  "Carruseles, variantes, carrito con localStorage — cero servidor",
];

export default function App() {
  return (
    <div className="root-wrap">
      {/* Dot grid */}
      <div className="dot-grid" aria-hidden="true" />

      {/* Nav */}
      <nav className="nav">
        <span className="nav-logo">OS_DEV.26</span>
        <div className="nav-status">
          <span className="status-dot" />
          <span className="nav-status-text">Disponible</span>
        </div>
      </nav>

      <main className="main">

        {/* Hero */}
        <section className="section hero">
          <div className="eyebrow">
            <p className="eyebrow-text">Full-Stack · Serverless · Pagos</p>
          </div>
          <h1 className="hero-title">
            CÓDIGO<br />
            <span className="accent">QUE</span><br />
            FUNCIONA.
          </h1>
          <div className="hero-sub">
            <span className="hero-index">[0.0]</span>
            <p className="hero-desc">
              Construyo tiendas web y herramientas de negocio sin frameworks innecesarios —
              HTML/CSS/JS limpio, Cloudflare Workers, integraciones que realmente se lanzan.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-label">Stack técnico</h2>
            <span className="section-count">01 // 04</span>
          </div>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <div key={s.code} className="skill-item">
                <span className={i === 0 ? "skill-code accent" : "skill-code muted"}>{s.code}</span>
                <span className="skill-name">{s.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-label">Qué hago</h2>
            <div className="divider-line" />
          </div>
          {services.map((s) => (
            <div key={s.id} className="service-row">
              <span className="service-id">{s.id}</span>
              <div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Project */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-label">Proyecto destacado</h2>
            <div className="divider-line" />
          </div>
          <div className="project-card">
            <span className="project-tag">V.01</span>
            <h3 className="project-title">BAZZARHLG</h3>
            <p className="project-stack-label">Plataforma E-commerce · Cloudflare · Google Sheets · USDT</p>
            <ul className="project-features">
              {bazzarFeatures.map((f, i) => (
                <li key={i} className="project-feature">
                  <span className="accent arrow">→</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="project-stack">
              Stack: Vanilla JS · CSS · Cloudflare Workers · Sheets API · Trondealer · Telegram Bot API
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-label">Precios</h2>
            <div className="divider-line" />
          </div>
          <p className="pricing-note">
            Trabajo en proyectos de precio fijo con alcance definido antes de empezar.
            Incluye deployment, documentación básica y revisiones post-entrega. Pago en USDT (BSC/TRC20).
          </p>
          <div className="pricing-list">
            {pricing.map((p, i) => (
              <div key={i} className="pricing-row">
                <span className="pricing-type">{p.type}</span>
                <span className={`pricing-price${p.price === "Escribime" ? " accent" : ""}`}>{p.price}</span>
              </div>
            ))}
            <div className="pricing-border-bottom" />
          </div>
        </section>

        {/* CTA */}
        <section className="cta-block">
          <div className="cta-corner" />
          <div className="cta-inner">
            <p className="cta-status">Estado: Disponible</p>
            <h2 className="cta-title">¿ARRANCAMOS<br />TU PROYECTO?</h2>
            <a href="mailto:kirox850@gmail.com" className="cta-link">
              <span>Escribime por email</span>
              <span className="cta-arrow">→</span>
            </a>
            <div className="cta-socials">
              <a href="https://github.com/kirox69" className="cta-social">GitHub</a>
              <a href="https://t.me/tu-usuario" className="cta-social">Telegram</a>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <span className="footer-text">Oleider Sarmiento · 2026 · Serverless & Payments</span>
        <div className="footer-line" />
      </footer>
    </div>
  );
}
