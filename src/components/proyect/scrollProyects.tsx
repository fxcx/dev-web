'use client'
import { projects } from '@/data/proyects'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.tags.map((tag) => tag.name)))
)
export default function ScrollProyect (): JSX.Element {
  const [selectedTech, setSelectedTech] = useState<string[]>([])

  const toggleTech = (tech: string): void => {
    return setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    )
  }

  const filteredProjects = projects.filter((project) =>
    selectedTech.length === 0
      ? true
      : project.tags.some((tech) => selectedTech.includes(tech.name))
  )

  return (
    <section className='py-1'>
      <div className='flex flex-wrap gap-4 justify-center'>
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => toggleTech(tech)}
            className={`p-2.5  rounded-l-3xl ${
              selectedTech.includes(tech) ? 'bg-blue-500' : 'bg-blue-900'
            } text-white`}
          >
            {tech}
          </button>
        ))}
      </div>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-full justify-items-center items-center'>
        {filteredProjects.map((project, index) => (
          <li className='list-none' key={index}>
            <article className='flex flex-col items-center p-4 rounded-lg'>
              <p className='text-2xl text-center font-semibold text-white'>
                {project.name}
              </p>
              <div>
                <Image
                  src={project.src}
                  alt={project.name}
                  width={300}
                  height={300}
                  layout='fixed'
                  className='rounded-lg  p-1'
                />
              </div>
              <p className='p-2 text-gray-300 text-center'>
                {project.description}
              </p>
              <div className='flex flex-wrap justify-center gap-2'>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className='text-sm text-gray-300 px-2 hover:scale-150'>
                    <tag.icon />
                  </span>
                ))}
              </div>
              <Link href={project.link} className='block text-center mt-4'>
                <p className='text-fuchsia-50 border-2 p-1 rounded-3xl'>
                  Ver repositorio ➕
                </p>
              </Link>
            </article>
          </li>
        ))}
      </section>

    </section>
  )
}
