import { IconType } from 'react-icons'

// Tipo para las habilidades (skills)
export interface Skill {
  name: string
  image: string
  width: number
  height: number
}

// Tipo para los enlaces de redes sociales
export interface SocialLink {
  name: string
  src: string
  link: string
}

// Tipo para las etiquetas de los proyectos
export interface Tag {
  name: string
  icon: IconType
}

// Tipo para los proyectos
export interface Project {
  id: number
  name: string
  src: string
  description: string
  tags: Tag[]
  link: string
}
