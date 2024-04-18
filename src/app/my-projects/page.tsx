import ScrollProyect from "@/components/proyect/scrollProyects"

const Projects = () => {
  return (
    <section
      className="grid max-h-full h-screen w-screen"
      style={{ backgroundImage: "url(/main-bg.webp)" }}>
      <div className="relative">
        <h1 className=" text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
      </div>
      <div>
      </div>
      <section className="grid place-items-center overflow-x-hidden">
        <ScrollProyect />
      </section>
    </section>
  )
}

export default Projects