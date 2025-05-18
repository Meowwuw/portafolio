# Portfolio de Magenta - Desarrollado con Astro

Este es un portfolio personal desarrollado con Astro y Tailwind CSS.

## 📚 Stack Tecnológico

- **[Astro](https://astro.build/)**: Framework web para sitios enfocados en contenido
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitario
- **[Inter](https://fonts.google.com/specimen/Inter)**: Tipografía principal

## 🚀 Inicio Rápido

1. **Clonar el repositorio**

```bash
git clone <tu-repositorio>
cd portfolio-magenta
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

El sitio estará disponible en http://localhost:4321

## 📂 Estructura del Proyecto

```
portfolio-magenta/
├── public/             # Archivos estáticos (favicon, imágenes, etc)
├── src/
│   ├── assets/         # Imágenes y archivos que serán procesados
│   ├── components/     # Componentes reutilizables
│   ├── layouts/        # Layouts para las páginas
│   ├── pages/          # Páginas del sitio
│   └── styles/         # Estilos globales
├── astro.config.mjs    # Configuración de Astro
└── tailwind.config.cjs # Configuración de Tailwind CSS
```

## 🖼️ Personalización

### Colores

Los colores principales se pueden personalizar en el archivo `tailwind.config.cjs`:

- **magenta**: Color principal de la marca
- **customBlue, customPurple, customYellow**: Colores para el gradiente de fondo

### Fuentes

El proyecto utiliza la fuente "Inter" de Google Fonts. Puedes cambiarla en:

1. `src/layouts/MainLayout.astro`: Actualiza los enlaces a Google Fonts
2. `tailwind.config.cjs`: Actualiza la configuración de `fontFamily`

## 🚀 Despliegue

Astro permite desplegar fácilmente a varias plataformas:

```bash
# Para construir el sitio (los archivos se generarán en ./dist)
npm run build

# Para previsualizar la versión de producción localmente
npm run preview
```

### Plataformas recomendadas para despliegue:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)

## 📝 Próximos pasos sugeridos

1. Reemplazar el SVG placeholder por tu imagen real en `Hero.astro`
2. Añadir secciones adicionales (Proyectos, Sobre mí, Contacto)
3. Personalizar colores y estilos según tu preferencia
4. Añadir animaciones con librerías como GSAP o Motion One
5. Implementar modo oscuro