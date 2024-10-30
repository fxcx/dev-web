import { Project } from '@/types/index'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiPostgresql, SiExpress } from 'react-icons/si'
export const projects: Project[] = [
  {
    id: 1,
    name: 'Next.js Portfolio',
    src: '/nextjs-portfolio.png',
    description: 'A personal portfolio built with Next.js, showcasing projects, skills, and experience.',
    tags: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind', icon: SiTailwindcss }
    ],
    link: '/nextjs-portfolio'
  },
  {
    id: 2,
    name: 'Memealo',
    src: '/public/proyects/memealo.jpg',
    description: 'A meme-based card game with a multiplayer setup, built for fun interactions with friends.',
    tags: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Tailwind', icon: SiTailwindcss }
    ],
    link: '/memealo'
  },
  {
    id: 3,
    name: 'Edulink',
    src: '/edulink.png',
    description: 'An educational platform that connects mentors and students to facilitate learning.',
    tags: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Tailwind', icon: SiTailwindcss }
    ],
    link: '/edulink'
  }
]
