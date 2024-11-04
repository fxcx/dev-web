import ScrollProyect from '@/components/proyect/scrollProyects'

const Projects = (): JSX.Element => {
  return (
    <section
      className='grid max-h-full h-screen w-screen'
      style={{ backgroundImage: 'url(/main-bg.webp)' }}
    >
      <div className='relative'>
        <h1 className=' text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-20 pb-5'>
          Mis Proyectos
        </h1>
        <p className='text-center text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-5'>puede selecionar el proyecto por tecnologias </p>
      </div>
      <div />
      <section className='grid place-items-center overflow-x-hidden mb-[70px]'>
        <ScrollProyect />
      </section>
    </section>
  )
}

export default Projects
