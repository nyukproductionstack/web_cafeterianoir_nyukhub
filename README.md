# ☕ Cafetería Noir — Specialty Coffee Roasters

> **Cafetería Noir** — Café de especialidad, tostado con intención y servido sin ruido. Experiencia digital inmersiva desarrollada con estética editorial contemporánea, tipografía elegante y diseño altamente responsivo.

🌐 **Demo en Vivo:** [https://cafeteria-noir.vercel.app](https://cafeteria-noir.vercel.app)

---

## 🎨 Características Principales

- **Diseño Noir Contemporáneo:** Paleta de colores en negro tinta (`#050505`), crema de seda y detalles dorados/naranja espresso.
- **Interacciones Micro-animadas:** Animaciones suaves de paralaje, efectos de brillo en tarjetas de menú y transiciones fluidas de categoría.
- **Filtrado de Menú Interactivo:** Navegación por categorías (*Todos, Café, Leche, Fríos, Bollería*) con datos detallados de origen, proceso de tostado y notas de cata.
- **Secciones Editoriales Completas:**
  - **Hero Header:** Titular de alto impacto con animación de vertido de espresso.
  - **Filosofía & Tostado:** Reseña del compromiso con granos de origen único y comercio ético.
  - **Menú de Especialidad:** Galería fotográfica en alta resolución de bebidas y repostería artesanal.
  - **Ubicación & Horarios:** Información detallada de barra física en Plaza de la Paja 6, Madrid.
  - **Pedidos & Delivery:** Integración directa para pedidos rápidos vía WhatsApp y recogida en barra.
- **100% Responsivo:** Adaptación precisa para dispositivos móviles, tablets y monitores ultra-wide.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React 19, TypeScript, Vite 7
- **Estilos:** Tailwind CSS v4, Lucide React Icons, Google Fonts (*Bebas Neue*, *DM Sans*)
- **Animaciones:** Framer Motion, Parallax con Hooks personalizados
- **Notificaciones & Interacción:** Sonner Toast Notifications
- **Despliegue & Hosting:** Vercel (Producción Static SPA Output)

---

## 🚀 Instalación y Desarrollo Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/nyukproductionstack/web_cafeterianoir_nyukhub.git
   cd web_cafeterianoir_nyukhub
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en entorno de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir para producción:**
   ```bash
   npm run build
   ```

---

## 📦 Estructura del Proyecto

```text
cafeteria-noir/
├── client/
│   ├── public/
│   │   └── imagenes/       # Fotografía de alta resolución de café y repostería
│   ├── src/
│   │   ├── components/     # Componentes de UI de Radix & Tailwind
│   │   ├── hooks/          # Custom hooks de interacción y scroll parallax
│   │   ├── pages/          # Home.tsx (Página principal Noir)
│   │   ├── index.css       # Sistema de diseño de estilos globales
│   │   └── main.tsx        # Punto de entrada de la aplicación
│   └── index.html          # HTML5 semántico con SEO optimizado
├── vercel.json             # Configuración de despliegue en Vercel
├── vite.config.ts          # Configuración de Vite & Aliases
└── package.json            # Dependencias y scripts de construcción
```

---

© 2024 - 2026 **Cafetería Noir**. Todos los derechos reservados.
