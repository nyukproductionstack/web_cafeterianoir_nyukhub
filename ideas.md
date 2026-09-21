# Dirección visual — Cafetería Noir

## Tres rutas exploradas

### 1. Archivo nocturno
**Very Brief Intro:** Una interfaz editorial, casi de revista independiente, que convierte el café en una pieza de cultura visual. Negro tinta, naranja tostado y tipografía condensada para una presencia intensa y memorable.
**Probability:** 0.04

### 2. Barra de barrio refinada
**Very Brief Intro:** Un lenguaje cálido y táctil inspirado en menús impresos, azulejos y madera de barra. Crema, terracota y serifas suaves para una experiencia cercana y doméstica.
**Probability:** 0.07

### 3. Laboratorio de extracción
**Very Brief Intro:** Una experiencia técnica y luminosa que presenta cada bebida como un experimento de precisión. Grises minerales, azul acero y gráficos de medición para una cafetería especializada.
**Probability:** 0.02

## Enfoque elegido: Archivo nocturno

### Design Movement
Editorial brutalism refinado, con ecos de carteles de club, portadas de revistas de música y dirección de arte de cafeterías de especialidad.

### Core Principles
- **La imagen manda:** la bebida es el centro de gravedad; el texto editorial funciona como una capa de señalética.
- **Contraste honesto:** negro casi absoluto, blanco de papel y naranja tostado, sin gradientes decorativos ni volumen artificial.
- **Ritmo asimétrico:** composición vertical inspirada en la referencia, con una franja de navegación compacta y bloques que se desplazan en diagonal.
- **Interfaz como objeto:** cada control debe parecer una pieza física de una consola de reproducción, no un botón genérico.

### Color Philosophy
El negro profundo crea silencio y concentra la atención en el café. El naranja tostado representa el primer sorbo, el calor y el brillo de una extracción recién servida; aparece poco, pero siempre con intención. El blanco roto evita una sensación clínica y se comporta como tinta sobre papel.

### Layout Paradigm
Una composición de póster vertical, con encabezado editorial, precio protagonista, tarjeta de campaña a sangre y controles de reproducción en el borde inferior. En pantallas grandes, el lienzo se abre en una columna principal y una banda lateral de metadatos; en móvil, el ritmo se mantiene con scroll y capas pegadas al borde.

### Signature Elements
- Etiquetas técnicas diminutas en mayúsculas con separadores y numeración.
- Una tarjeta de campaña con recorte de imagen, borde fino y una micro-etiqueta naranja.
- Controles circulares y barras de progreso inspirados en una interfaz de audio analógica.

### Interaction Philosophy
Los controles responden como una consola: cambios breves de color, compresión al pulsar y estados activos muy claros. Los elementos no saltan ni reordenan el espacio; la interacción se siente precisa y contenida.

### Animation
Entrada escalonada de 60 ms por bloque, con desplazamientos cortos y opacidad. El marcador de progreso avanza lentamente y el halo de la taza respira con una escala mínima. Hover en tarjetas con elevación de 4 px y cambio de borde; active con `scale(0.97)`. Todo queda desactivado o reducido con `prefers-reduced-motion`.

### Typography System
- **Display:** Bebas Neue, en mayúsculas, tracking negativo y peso visual fuerte para titulares y precio.
- **Body/UI:** DM Sans, para navegación, etiquetas, botones y párrafos.
- **Jerarquía:** titular 5–7rem en desktop y 4rem en móvil; precio 4rem; labels entre 10–12px con tracking amplio; copy de apoyo en 14–16px.

### Brand Essence
**Cafetería Noir convierte el café diario en una pieza editorial para personas que buscan sabor, ritmo y una pausa con carácter.** Personalidad: precisa, intensa, cinematográfica.

### Brand Voice
Las titulares suenan directos, sensoriales y ligeramente provocadores. Los CTAs son breves y accionables; el microcopy parece salido de una carta de edición limitada.

Ejemplos:
- “Despierta con intención.”
- “Pide el siguiente corte.”

### Wordmark & Logo
Un símbolo geométrico de taza vista desde arriba: un círculo incompleto atravesado por una línea vertical de vapor, construido con dos cortes rectos como una marca de impresión. El wordmark “NOIR / CAFÉ” se muestra con una sans condensada y una barra diagonal, nunca como texto de sistema sin tratamiento.

### Signature Brand Color
**Naranja espresso — `#F26A21`**, un naranja quemado y energético que solo aparece en la acción, el precio destacado y la marca de campaña.
