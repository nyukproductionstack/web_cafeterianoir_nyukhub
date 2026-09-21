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

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProducts =
    activeFilter === "Todos"
      ? products
      : products.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleProducts]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProduct = (index: number) => {
    setActiveProduct(index);
    toast.success("Añadido: " + products[index].name, {
      description: "Guardado en tu pedido para recogida o delivery.",
    });
  };

  return (
    <div className="page-shell">
      <header className="site-header">
        <a href="#inicio" className="brand-wordmark">
          <span className="wordmark-icon">
            <img src={MARK_IMAGE} alt="Cafetería Noir Emblem" />
          </span>
          <span className="wordmark-text">NOIR</span>
        </a>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Navegación principal">
          <button type="button" onClick={() => scrollTo("carta")}>Carta</button>
          <button type="button" onClick={() => scrollTo("ubicacion")}>Ubicación</button>
          <button type="button" onClick={() => scrollTo("delivery")}>Delivery</button>
          <button type="button" onClick={() => scrollTo("contacto")}>Contacto</button>
        </nav>
        <div className="header-actions">
          <span className="open-note"><i /> Abierto hoy / 08:00 — 20:00</span>
          <button
            className="mobile-menu"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <a className="header-cta" href="#delivery">Pedir <ArrowUpRight size={14} /></a>
        </div>
      </header>

      <main>
        {/* HERO SECTION - FULL SCREEN, CLEAN IMAGE WITHOUT OVERLAY SHADOW */}
        <section className="hero-section" id="inicio">
          <div className="hero-poster-wrap">
            <img className="reference-hero" src={CLEAN_HERO} alt="Espresso artesanal Cafetería Noir" />
            <div className="hero-copy-overlay">
              <span className="hero-tag">01 &nbsp; DESPERTAR / 08:00H</span>
              <h2>DESPIERTA<br /><em>EN SERIO.</em></h2>
              <p>Origen único, extracción precisa y ninguna prisa.</p>
              <button type="button" onClick={() => scrollTo("carta")}>
                EXPLORAR LA CARTA <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
          <div className="hero-bottom-rail">
            <span>Origen único / Huehuetenango</span>
            <span>DESPIERTA EN SERIO.</span>
            <a href="#carta" onClick={(e) => { e.preventDefault(); scrollTo("carta"); }}>
              Explorar la carta <ArrowDownRight size={14} />
            </a>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="intro-section section-shell reveal-on-scroll">
          <div className="section-index">A / 01</div>
          <div className="intro-grid">
            <div>
              <p className="eyebrow">Café de especialidad / sin ruido</p>
              <h1>Una pausa<br /><em>con dirección.</em></h1>
            </div>
            <div className="intro-copy">
              <p>En Noir tostamos el momento. Granos de origen único, recetas precisas y una barra que deja que el café hable primero.</p>
              <div className="intro-detail">
                <span><Sparkles size={15} /> Tostado lento</span>
                <span><Clock3 size={15} /> Servido diario</span>
              </div>
            </div>
          </div>
        </section>

        {/* MENU SECTION - FULL CARD BACKGROUND IMAGES + OVERLAY TEXT WITH SHADOW */}
        <section className="menu-section section-shell reveal-on-scroll" id="carta">
          <div className="section-header">
            <div>
              <p className="eyebrow">Selección / 08 piezas</p>
              <h2>Nuestra<br /><em>Selección.</em></h2>
            </div>
            <p className="section-description">
              Café de especialidad de origen único y repostería artesanal horneada a diario en nuestra barra.
            </p>
          </div>

          <div className="menu-toolbar">
            <div className="filter-list" aria-label="Filtrar carta">
              {menuFilters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={activeFilter === filter ? "is-active" : ""}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="menu-toolbar-note">Tostado / diario <span>•</span> 08:00—20:00</span>
          </div>

          <div className="product-grid">
            {visibleProducts.map((product) => {
              const productIndex = products.findIndex((item) => item.name === product.name);
              const isSelected = activeProduct === productIndex;
              return (
                <article
                  className={"product-card " + (isSelected ? "is-selected" : "")}
                  key={product.name}
                >
                  <div className="card-bg-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <div className="card-overlay-gradient" />
                  </div>

                  <div className="card-content">
                    <div className="card-top-row">
                      <span className="product-number">{product.index}</span>
                      <span className="product-type-badge">{product.category}</span>
                    </div>

                    <div className="card-middle">
                      <h3 className="card-title">{product.name}</h3>
                      <p className="card-desc">{product.description}</p>
                      
                      <div className="product-specs">
                        <span>
                          <small>Origen</small>
                          <strong>{product.origin}</strong>
                        </span>
                        <span>
                          <small>Proceso</small>
                          <strong>{product.process}</strong>
                        </span>
                        <span>
                          <small>Formato</small>
                          <strong>{product.size}</strong>
                        </span>
                      </div>

                      <p className="product-notes">
                        <Sparkles size={12} /> {product.notes}
                      </p>
                    </div>

                    <div className="card-bottom-row">
                      <div className="card-price">
                        <small>Precio</small>
                        <strong>{product.price}</strong>
                      </div>
                      <button
                        type="button"
                        className="card-action-btn"
                        onClick={() => handleProduct(productIndex)}
                      >
                        Añadir <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="menu-footer">
            <span>{String(visibleProducts.length).padStart(2, "0")} / 08</span>
            <span className="menu-footer-line" />
            <span>La carta cambia con la cosecha</span>
          </div>
        </section>

        {/* LOCATION SECTION - REAL GOOGLE MAPS EMBED */}
        <section className="location-section section-shell reveal-on-scroll" id="ubicacion">
          <div className="section-index">B / 02</div>
          <div className="location-grid">
            <div>
              <p className="eyebrow">Ubicación / horarios</p>
              <h2>Ven por el<br /><em>aroma.</em></h2>
              <p className="body-copy">
                Una barra tranquila en el centro de Madrid. Llega caminando, quédate por el olor a café recién molido.
              </p>
              <a
                className="outline-cta"
                href="https://maps.google.com/?q=Plaza+de+la+Paja+6+Madrid"
                target="_blank"
                rel="noreferrer"
              >
                Abrir en Google Maps <MapPin size={15} />
              </a>
            </div>

            <div className="location-card">
              <div className="map-real-container">
                <iframe
                  title="Ubicación Cafetería Noir Madrid"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.669864700813!2d-3.7137889234407513!3d40.41285295533166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227c9a1ca8bfb%3A0x8e87498c3e80fcf5!2sPlaza%20de%20la%20Paja%2C%206%2C%20Centro%2C%2028005%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1es!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(70%) invert(92%) contrast(120%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="address-row">
                <div>
                  <span>Dirección</span>
                  <strong>Plaza de la Paja, 6<br />28005 Madrid</strong>
                </div>
                <div>
                  <span>Horario Hoy</span>
                  <strong>08:00 — 20:00<br /><small>• Abierto ahora</small></strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERY SECTION */}
        <section className="delivery-section section-shell reveal-on-scroll" id="delivery">
          <div className="section-index">C / 03</div>
          <div className="delivery-grid">
            <div>
              <p className="eyebrow">Pedido / en tu puerta</p>
              <h2>Tu café,<br /><em>en camino.</em></h2>
              <p className="body-copy">
                Pide para recoger en barra o recíbelo donde estés. Preparamos cada pedido al momento.
              </p>
            </div>
            <div className="delivery-options">
              <a
                className="delivery-option option-primary"
                href="https://wa.me/34910000000?text=Hola%20Noir%2C%20quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noreferrer"
              >
                <span><ShoppingBag size={19} /><small>01 / RÁPIDO</small></span>
                <strong>Pedir por WhatsApp</strong>
                <ArrowUpRight size={18} />
              </a>
              <a className="delivery-option" href="#contacto" onClick={(e) => { e.preventDefault(); scrollTo("contacto"); }}>
                <span><Coffee size={19} /><small>02 / EN BARRA</small></span>
                <strong>Reservar para recoger</strong>
                <ArrowUpRight size={18} />
              </a>
              <div className="delivery-note">
                <Check size={15} />
                <span>Confirmación en menos de 5 min</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section section-shell reveal-on-scroll" id="contacto">
          <div className="section-index">D / 04</div>
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Contacto / hablemos</p>
              <h2>Nos vemos<br /><em>en la barra.</em></h2>
            </div>
            <div className="contact-details">
              <a href="mailto:hola@cafeterianoir.es">
                <Mail size={16} />
                <span>hola@cafeterianoir.es</span>
                <ArrowUpRight size={14} />
              </a>
              <a href="tel:+34910000000">
                <Phone size={16} />
                <span>+34 91 000 00 00</span>
                <ArrowUpRight size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram size={16} />
                <span>@cafeterianoir</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="contact-footer">
            <a href="#inicio" className="footer-wordmark" onClick={(e) => { e.preventDefault(); scrollTo("inicio"); }}>
              <span className="wordmark-icon"><img src={MARK_IMAGE} alt="" /></span>
              <span>NOIR</span>
            </a>
            <span>CAFÉ DE ESPECIALIDAD / MADRID</span>
            <span>© 2024 — 2026</span>
          </div>
        </section>
      </main>
    </div>
  );
}
