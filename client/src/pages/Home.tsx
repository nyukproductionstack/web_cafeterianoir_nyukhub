/* Referencia visual: la imagen adjunta es el inicio; el resto continúa con el mismo negro tinta, naranja espresso, señalética técnica y ritmo editorial. */
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Coffee,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShoppingBag,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

const CLEAN_HERO = "/imagenes/noir-hero-clean.png";
const MARK_IMAGE = "/imagenes/noir-mark.png";

const menuFilters = ["Todos", "Café", "Leche", "Fríos", "Bollería"];

const products = [
  {
    index: "01",
    name: "Espresso doble",
    description: "Corto, intenso y con una crema de cacao oscuro.",
    notes: "Cacao / Nuez / Naranja",
    category: "Café",
    origin: "Huehuetenango, GT",
    process: "Lavado",
    size: "60 ml",
    price: "2,40 €",
    image: "/imagenes/noir-espresso.png",
    accent: "espresso",
  },
  {
    index: "02",
    name: "Cappuccino Noir",
    description: "Crema sedosa, cuerpo redondo y un final dulce.",
    notes: "Caramelo / Avellana / Pan tostado",
    category: "Leche",
    origin: "Huila, CO",
    process: "Honey",
    size: "220 ml",
    price: "3,80 €",
    image: "/imagenes/noir-cappuccino.png",
    accent: "cream",
  },
  {
    index: "03",
    name: "Cold brew",
    description: "Extracción lenta, fría y limpia para tardes largas.",
    notes: "Fruta negra / Miel / Cítrico",
    category: "Fríos",
    origin: "Quindío, CO",
    process: "Natural",
    size: "350 ml",
    price: "4,20 €",
    image: "/imagenes/noir-coldbrew.png",
    accent: "amber",
  },
  {
    index: "04",
    name: "Croissant de mantequilla",
    description: "Hojaldre crujiente, horneado cada mañana en la barra.",
    notes: "Mantequilla / Bronce / Sal",
    category: "Bollería",
    origin: "Obrador Noir",
    process: "Horneado hoy",
    size: "1 pieza",
    price: "3,20 €",
    image: "/imagenes/noir-croissant.png",
    accent: "pastry",
  },
  {
    index: "05",
    name: "Flat white",
    description: "Doble shot y leche texturizada en una taza baja.",
    notes: "Miel / Almendra / Cacao",
    category: "Leche",
    origin: "Tarrazú, CR",
    process: "Lavado",
    size: "180 ml",
    price: "3,60 €",
    image: "/imagenes/noir-flatwhite.png",
    accent: "cream",
  },
  {
    index: "06",
    name: "Affogato Noir",
    description: "Gelato de vainilla atravesado por un espresso intenso.",
    notes: "Vainilla / Caramelo / Cacao",
    category: "Café",
    origin: "Blend Noir",
    process: "A la minute",
    size: "150 ml",
    price: "4,80 €",
    image: "/imagenes/noir-affogato.png",
    accent: "espresso",
  },
  {
    index: "07",
    name: "Espresso tonic",
    description: "Tónica fría, hielo limpio y café servido al momento.",
    notes: "Cítrico / Pomelo / Azúcar moreno",
    category: "Fríos",
    origin: "Nariño, CO",
    process: "Infusión fría",
    size: "300 ml",
    price: "4,50 €",
    image: "/imagenes/noir-tonic.png",
    accent: "amber",
  },
  {
    index: "08",
    name: "Pain au chocolat",
    description: "Hojaldre dorado con dos barras de chocolate negro.",
    notes: "Chocolate / Mantequilla / Sal marina",
    category: "Bollería",
    origin: "Obrador Noir",
    process: "Horneado hoy",
    size: "1 pieza",
    price: "3,40 €",
    image: "/imagenes/noir-painchocolat.png",
    accent: "pastry",
  },
];

function useScrollMotion() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-parallax]"));
    let ticking = false;

    const update = () => {
      const viewport = window.innerHeight;
      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = (center - viewport / 2) / viewport;
        const motion = Math.max(-22, Math.min(22, -distance * 18));
        target.style.setProperty("--scroll-shift", `${motion}px`);
      });
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return ref;
}

export default function Home() {
  const motionRef = useScrollMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const visibleProducts = activeFilter === "Todos" ? products : products.filter((product) => product.category === activeFilter);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleProduct = (index: number) => {
    setActiveProduct(index);
    toast.success(`${products[index].name} añadido a la selección`, { description: `${products[index].price} · ${products[index].notes}` });
  };

  return (
    <div className="noir-site" ref={motionRef}>
      <header className="site-header">
        <a href="#inicio" className="wordmark" aria-label="Cafetería Noir, inicio">
          <span className="wordmark-icon"><img src={MARK_IMAGE} alt="" /></span>
          <span className="wordmark-text">NOIR<small>CAFETERÍA / MADRID</small></span>
        </a>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Navegación principal">
          <button type="button" onClick={() => scrollTo("carta")}>Carta</button>
          <button type="button" onClick={() => scrollTo("ubicacion")}>Ubicación</button>
          <button type="button" onClick={() => scrollTo("delivery")}>Delivery</button>
          <button type="button" onClick={() => scrollTo("contacto")}>Contacto</button>
        </nav>
        <div className="header-actions">
          <span className="open-note"><i /> Abierto hoy / 08:00 — 20:00</span>
          <button className="mobile-menu" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          <a className="header-cta" href="#delivery">Pedir <ArrowUpRight size={14} /></a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-rail hero-rail-top"><span>CAFÉ / 2024</span><span>01 — 05</span></div>
          <div className="hero-poster-wrap">
            <img className="reference-hero" src={CLEAN_HERO} alt="Espresso cayendo en una taza negra y creando un splash dorado" />
            <div className="hero-poster-glow" aria-hidden="true" />
            <div className="hero-copy-overlay">
              <span>01&nbsp;&nbsp; DESPERTAR / 08:00H</span>
              <h2>DESPIERTA<br /><em>EN SERIO.</em></h2>
              <p>Origen único, extracción precisa y ninguna prisa.</p>
              <button type="button" onClick={() => scrollTo("carta")}>EXPLORAR LA CARTA <ArrowUpRight size={12} /></button>
            </div>
          </div>
          <div className="hero-bottom-rail">
            <span>Origen único / Huehuetenango</span>
            <span>DESPIERTA EN SERIO.</span>
            <a href="#carta">Explorar la carta <ArrowDownRight size={14} /></a>
          </div>
        </section>

        <section className="intro-section section-shell">
          <div className="section-index">A / 01</div>
          <div className="intro-grid">
            <div><p className="eyebrow">Café de especialidad / sin ruido</p><h1>Una pausa<br /><em>con dirección.</em></h1></div>
            <div className="intro-copy"><p>En Noir tostamos el momento. Granos de origen único, recetas precisas y una barra que deja que el café hable primero.</p><div className="intro-detail"><span><Sparkles size={15} /> Tostado lento</span><span><Clock3 size={15} /> Servido diario</span></div></div>
          </div>
        </section>

        <section className="menu-section section-shell" id="carta">
          <div className="section-header"><div><p className="eyebrow">Selección / 08 piezas</p><h2>La carta<br /><em>flota.</em></h2></div><p className="section-description">Pasa el cursor o desliza. Cada pieza se mueve con el scroll como si acabara de llegar a la barra.</p></div>
          <div className="menu-toolbar"><div className="filter-list" aria-label="Filtrar carta">{menuFilters.map((filter) => <button type="button" key={filter} className={activeFilter === filter ? "is-active" : ""} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><span className="menu-toolbar-note">Tostado / diario <span>•</span> 08:00—20:00</span></div>
          <div className="product-list">
            {visibleProducts.map((product) => {
              const productIndex = products.findIndex((item) => item.name === product.name);
              return <article className={`product-row ${activeProduct === productIndex ? "is-selected" : ""}`} key={product.name}>
                <div className="product-copy"><div className="product-number">{product.index}</div><div><p className="product-type">{product.category} / noir selection</p><h3>{product.name}</h3><p className="product-description">{product.description}</p><div className="product-specs"><span><small>Origen</small><strong>{product.origin}</strong></span><span><small>Proceso</small><strong>{product.process}</strong></span><span><small>Formato</small><strong>{product.size}</strong></span></div><p className="product-notes"><Sparkles size={12} /> {product.notes}</p><button type="button" className="product-action" onClick={() => handleProduct(productIndex)}>Añadir a la selección <ArrowUpRight size={14} /></button></div></div>
                <div className={`product-art art-${product.accent}`} data-parallax><div className="art-ring" aria-hidden="true" /><img src={product.image} alt={product.name} loading="lazy" /></div>
                <div className="product-price"><small>Desde</small>{product.price}</div>
              </article>;
            })}
          </div>
          <div className="menu-footer"><span>{String(visibleProducts.length).padStart(2, "0")} / 08</span><span className="menu-footer-line" /><span>La carta cambia con la cosecha</span></div>
        </section>

        <section className="location-section section-shell" id="ubicacion">
          <div className="section-index">B / 02</div>
          <div className="location-grid"><div><p className="eyebrow">Ubicación / horarios</p><h2>Ven por el<br /><em>aroma.</em></h2><p className="body-copy">Una barra tranquila en el centro de Madrid. Llega caminando, quédate por el olor a café recién molido.</p><a className="outline-cta" href="https://maps.google.com/?q=Plaza+de+la+Paja+6+Madrid" target="_blank" rel="noreferrer">Abrir en mapas <MapPin size={15} /></a></div><div className="location-card"><div className="map-surface"><span className="map-road road-a" /><span className="map-road road-b" /><span className="map-road road-c" /><span className="map-dot"><MapPin size={19} /></span><span className="map-label">NOIR / 28005</span></div><div className="address-row"><div><span>Dirección</span><strong>Plaza de la Paja, 6<br />28005 Madrid</strong></div><div><span>Hoy</span><strong>08:00 — 20:00<br /><small>Abierto ahora</small></strong></div></div></div></div>
        </section>

        <section className="delivery-section section-shell" id="delivery">
          <div className="section-index">C / 03</div>
          <div className="delivery-grid"><div><p className="eyebrow">Pedido / en tu puerta</p><h2>Tu café,<br /><em>en camino.</em></h2><p className="body-copy">Pide para recoger en barra o recíbelo donde estés. Preparamos cada pedido al momento.</p></div><div className="delivery-options"><a className="delivery-option option-primary" href="https://wa.me/34910000000?text=Hola%20Noir%2C%20quiero%20hacer%20un%20pedido" target="_blank" rel="noreferrer"><span><ShoppingBag size={19} /><small>01 / rápido</small></span><strong>Pedir por WhatsApp</strong><ArrowUpRight size={18} /></a><a className="delivery-option" href="#contacto"><span><Coffee size={19} /><small>02 / en barra</small></span><strong>Reservar para recoger</strong><ArrowUpRight size={18} /></a><div className="delivery-note"><Check size={15} /><span>Confirmación en menos de 5 min</span></div></div></div>
        </section>

        <section className="contact-section section-shell" id="contacto">
          <div className="section-index">D / 04</div>
          <div className="contact-grid"><div><p className="eyebrow">Contacto / hablemos</p><h2>Nos vemos<br /><em>en la barra.</em></h2></div><div className="contact-details"><a href="mailto:hola@cafeterianoir.es"><Mail size={16} /><span>hola@cafeterianoir.es</span><ArrowUpRight size={14} /></a><a href="tel:+34910000000"><Phone size={16} /><span>+34 91 000 00 00</span><ArrowUpRight size={14} /></a><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={16} /><span>@cafeterianoir</span><ArrowUpRight size={14} /></a></div></div>
          <div className="contact-footer"><a href="#inicio" className="footer-wordmark"><span className="wordmark-icon"><img src={MARK_IMAGE} alt="" /></span><span>NOIR</span></a><span>CAFÉ DE ESPECIALIDAD / MADRID</span><span>© 2024 — 2026</span></div>
        </section>
      </main>
    </div>
  );
}
