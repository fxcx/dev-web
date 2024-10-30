'use client'
import { projects } from '@/data/proyects'
import Image from 'next/image'
import { useState } from 'react'

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
            className={`p-1.5 ${
              selectedTech.includes(tech) ? 'bg-blue-500' : 'bg-gray-500'
            } text-white`}
          >
            {tech}
          </button>
        ))}
      </div>
      <section className='flex justify-center flex-wrap gap-2 w-screen h-screen'>
        {filteredProjects.map((project, index) => (
          <li className='grid place-items-center' key={index}>
            <article className='grid place-content-center'>
              <div className='w-[300px]'>
                <h1 className='text-2xl text-center font-semibold text-white'>
                  {project.name}
                </h1>
                <Image
                  src={project.src}
                  alt={project.name}
                  width={300}
                  height={300}
                  className='rounded-lg p-1'
                />
                <div>
                  <p className='mt-2 text-gray-300 text-center'>
                    {project.description}
                  </p>
                </div>
                <div className='flex gap-1 mt-2'>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className='text-sm text-gray-300'>
                      {tag.icon && <tag.icon />}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </li>
        ))}
      </section>
    </section>
  )
}
