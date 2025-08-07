# Joyería Eterna - Sitio Web Oficial

> Aplicación web completa desarrollada con Next.js 14 + TypeScript para Joyería Eterna, especialistas en piezas de alta gama en Polanco, CDMX.

![Joyería Eterna](https://img.shields.io/badge/Joyer%C3%ADa-Eterna-DAA520?style=for-the-badge&logo=diamond&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 💫 Características Principales

✨ **Diseño Elegante**: Paleta de colores luxury con oro, dark slate y pearl  
📱 **Mobile-First**: Completamente responsive para todos los dispositivos  
⚡ **Alto Rendimiento**: Turbopack como bundler para desarrollo ultra-rápido  
💬 **WhatsApp Integration**: Contacto directo con mensajes pre-formateados  
📄 **Formularios Inteligentes**: Validación con Zod + React Hook Form  
💾 **LocalStorage**: Auto-guardado de formularios y preferencias de usuario  
🎯 **SEO Optimizado**: Metadata completa con Next.js 14 Metadata API  
🎨 **Animaciones Suaves**: Transiciones elegantes y contadores animados

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18.17 o superior
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/joyeria-eterna.git
cd joyeria-eterna/web

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo con Turbopack
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

### Construir para Producción

```bash
# Construir aplicación optimizada
npm run build
# o
yarn build
# o
pnpm build

# Iniciar servidor de producción
npm start
# o
yarn start
# o
pnpm start
```

## 📚 Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **Next.js** | 14.2.0 | Framework React con App Router |
| **TypeScript** | 5.3.0 | Tipado estático para JavaScript |
| **Tailwind CSS** | 3.4.0 | Framework de CSS utility-first |
| **React Hook Form** | 7.49.0 | Manejo de formularios performante |
| **Zod** | 3.22.0 | Validación de esquemas TypeScript |
| **Turbopack** | Incluido | Bundler de nueva generación |
| **clsx** | 2.1.0 | Utilidad para clases CSS condicionales |

## 📝 Estructura del Proyecto

```
web/
├── src/
│   ├── app/                    # App Router de Next.js 14
│   │   ├── layout.tsx           # Layout principal con SEO
│   │   ├── page.tsx             # Homepage completa
│   │   └── globals.css          # Estilos globales + Tailwind
│   ├── components/
│   │   ├── ui/                  # Componentes reutilizables
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Button.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   ├── sections/            # Secciones de la página
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Values.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx     # Formulario con validación
│   ├── lib/                     # Utilidades y lógica
│   │   ├── validations.ts       # Esquemas Zod
│   │   ├── storage.ts           # LocalStorage helpers
│   │   └── utils.ts             # Funciones de utilidad
│   ├── types/
│   │   └── index.ts             # Definiciones TypeScript
│   └── data/
│       └── content.json         # Contenido estructurado
├── public/                      # Archivos estáticos
├── next.config.js              # Configuración Next.js + Turbopack
├── tailwind.config.js          # Configuración Tailwind con tema luxury
├── tsconfig.json               # Configuración TypeScript
├── postcss.config.js           # Configuración PostCSS
└── package.json                # Dependencias y scripts
```

## 🎨 Paleta de Colores

```css
/* Tema Luxury */
luxury: {
  dark: '#2F4F4F',           /* Gris pizarra oscuro */
  gold: '#DAA520',           /* Oro dorado */
  pearl: '#F5F5DC',          /* Beige perla */
  'dark-secondary': '#1a2e2e',  /* Pizarra más oscura */
  'gold-secondary': '#B8860B'   /* Oro más oscuro */
}
```

## 💬 Integración WhatsApp

### Funcionalidades Implementadas:

- **Botón Flotante**: Acceso rápido desde cualquier sección
- **Mensajes Pre-formateados**: Diferentes mensajes según el contexto
- **Formulario de Contacto**: Envío directo con todos los datos estructurados
- **CTAs Inteligentes**: Botones de acción con mensajes específicos por servicio

### Ejemplos de Mensajes:

```javascript
// Contacto general
const generalMessage = '¡Hola! Me interesa conocer más sobre los servicios de Joyería Eterna.'

// Anillos de compromiso
const engagementMessage = '¡Hola! Me interesa conocer más sobre sus anillos de compromiso.'

// Formulario completo
const formMessage = `¡Hola! Me contacto desde la página web de Joyería Eterna.

👤 *Nombre:* ${nombre}
📞 *Teléfono:* ${telefono}
✉️ *Email:* ${email}
📎 *Servicio:* ${servicio}

💬 *Mensaje:* ${mensaje}`
```

## 📄 Formularios y Validación

### Esquema de Validación (Zod)

```typescript
const contactSchema = z.object({
  name: z.string().min(2, 'Nombre debe tener al menos 2 caracteres'),
  phone: z.string().regex(/^(\+52\s?)?[0-9]{10}$/, 'Formato: +52 55 1234 5678'),
  email: z.string().email('Email no válido'),
  service: z.enum(['anillo-compromiso', 'joyeria-personalizada', 'restauracion']),
  message: z.string().min(10, 'Mensaje debe tener al menos 10 caracteres')
})
```

### Características del Formulario:

- ✅ **Validación en tiempo real** con Zod
- ✅ **Auto-guardado** en localStorage
- ✅ **Recuperación de borradores** al recargar página
- ✅ **Estados de carga** y confirmación
- ✅ **Mensajes de error** personalizados en español
- ✅ **Limpieza automática** después del envío exitoso

## 💾 LocalStorage

### Datos Almacenados:

```typescript
// Borrador del formulario de contacto
const formDraft = {
  name: string,
  phone: string,
  email: string,
  service: string,
  message: string,
  timestamp: number
}

// Preferencias del usuario
const userPreferences = {
  hasVisited: boolean,
  preferredContactMethod: 'whatsapp' | 'email' | 'phone' | null,
  interestedServices: string[],
  lastVisit: number
}

// Contador de visitas
const visitCount = number
```

## 🎯 SEO y Metadata

### Configuración SEO:

```typescript
export const metadata: Metadata = {
  title: 'Joyería Eterna - Piezas de Alta Gama | Polanco, CDMX',
  description: 'Joyería artesanal de lujo en Polanco. Anillos de compromiso, diseño personalizado y restauración.',
  keywords: 'joyería, Polanco, anillos compromiso, oro, diamantes, CDMX',
  openGraph: {
    title: 'Joyería Eterna - Elegancia que Perdura',
    description: 'Descubre piezas únicas de alta joyería en el corazón de Polanco',
    type: 'website'
  }
}
```

## 🎨 Personalización

### Cambiar Información del Negocio:

Editar `/src/data/content.json`:

```json
{
  "businessData": {
    "name": "Tu Joyería",
    "owner": "Tu Nombre",
    "phone": "+52 55 0000 0000",
    "whatsapp": "525500000000",
    "email": "contacto@tudominio.com"
  }
}
```

### Cambiar Colores del Tema:

Editar `/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      luxury: {
        dark: '#TU_COLOR_OSCURO',
        gold: '#TU_COLOR_DORADO',
        pearl: '#TU_COLOR_CLARO'
      }
    }
  }
}
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo con Turbopack
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

## 📦 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
out
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🐛 Troubleshooting

### Problemas Comunes:

**Error de Turbopack:**
```bash
# Limpiar cache y reinstalar
rm -rf .next node_modules package-lock.json
npm install
```

**Problemas de TypeScript:**
```bash
# Verificar tipos
npx tsc --noEmit
```

**Estilos no aplicados:**
```bash
# Reconstruir CSS
npm run build
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📞 Contacto

**Joyería Eterna**  
📍 Av. Presidente Masaryk 123, Polanco V Sección, 11560 CDMX  
📞 +52 55 1234 5678  
✉️ maria.gonzalez@joyeriaeterna.com  
📱 [WhatsApp](https://wa.me/525512345678)

---

<div align="center">
  <strong>Hecho con ❤️ para Joyería Eterna</strong>
  <br>
  <sub>Desarrollado con Next.js 14 + TypeScript + Tailwind CSS</sub>
</div>