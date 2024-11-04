import { Project } from '@/types/index'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiPostgresql, SiExpress, SiMongodb, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'
export const projects: Project[] = [
  {
    id: 1,
    name: 'Portfolio',
    src: '/projects/port.png',
    description: 'Un portafolio personal creado con Next.js, donde muestro proyectos, habilidades y experiencias que me han aportado valor.',
    tags: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind', icon: SiTailwindcss }
    ],
    link: 'https://github.com/fxcx/dev-web'
  },
  {
    id: 2,
    name: 'Subaru prolineService',
    src: '/projects/subaru.png',
    description: 'Un servicio de taller y venta de autos donde desarrollé su página oficial y despliegue web.',
    tags: [
      { name: 'JS', icon: SiJavascript },
      { name: 'html', icon: SiHtml5 },
      { name: 'css', icon: SiCss3 }
    ],
    link: 'https://github.com/fxcx/Taller_Subaru'
  },
  {
    id: 3,
    name: 'Edulink',
    src: '/projects/edulink.webp',
    description: 'Una plataforma educativa que conecta mentores y estudiantes, facilitando el aprendizaje y priorizando la suscripción y el seguimiento del progreso.',
    tags: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Tailwind', icon: SiTailwindcss }
    ],
    link: 'https://gitlab.com/sistema-de-gestion-de-inscripciones/sistema-inscripciones-react'
  },
  {
    id: 4,
    name: 'Reves',
    src: '/projects/reves.png',
    description: 'Una página de servicios y venta de productos que ofrece revestimiento para muros y pisos, permitiendo a los clientes elegir colores, contactarse con el proveedor y adquirir productos de su propia marca o de su elección.',
    tags: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind', icon: SiTailwindcss }
    ],
    link: 'https://github.com/fxcx/front-revestimiento'
  },
  {
    id: 5,
    name: 'Memealo',
    src: '/projects/memealo.jpg',
    description: 'Uno de mis primeros proyectos, donde trabajé en un equipo de 17 personas, desarrollando el backend y frontend con roles rotativos.',
    tags: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Tailwind', icon: SiTailwindcss }
    ],
    link: 'https://github.com/fxcx/memealo-be/tree/develop'
  }
]
