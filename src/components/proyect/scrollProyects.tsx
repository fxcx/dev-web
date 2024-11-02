'use client'
import { projects } from '@/data/proyects'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

// Extrae las tecnologías únicas
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
    <section>
      <div className='flex flex-wrap gap-4 justify-center'>
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => toggleTech(tech)}
            className={`p-1.5  rounded-l-3xl ${
              selectedTech.includes(tech) ? 'bg-blue-500' : 'bg-blue-900'
            } text-white`}
          >
            {tech}
          </button>
        ))}
      </div>
      <section className='flex justify-center flex-wrap gap-4 w-screen h-screen'>
        {filteredProjects.map((project, index) => (
          <li className='grid place-items-center' key={index}>
            <article className='grid place-content-center py-2 mt-2'>
              <div className='w-[300px] py-2 place-content-center'>
                <p className='text-2xl text-center font-semibold text-white'>
                  {project.name}
                </p>
                <Image
                  src={project.src}
                  alt={project.name}
                  width={300}
                  height={300}
                  className='rounded-lg py-1'
                />
                <div>
                  <p className='mt-2 p-2 text-gray-300 text-center'>
                    {project.description}
                  </p>
                </div>
                <div className='flex justify-start mb-4'>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className='text-sm text-gray-300 pl-2 pr-2 hover:scale-150'>
                      <tag.icon />
                    </span>
                  ))}
                </div>
                <Link href={project.link} className='flex justify-end'>
                  <p className='text-fuchsia-50 block border-2 p-1 rounded-3xl'>ver repositorio➕</p>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </section>
    </section>
  )
}
