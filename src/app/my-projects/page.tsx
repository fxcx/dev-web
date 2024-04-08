import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <section
      className="max-h-full h-screen"
      style={{ backgroundImage: "url(/main-bg.webp)" }}>
      <section className="grid place-items-center">
        <div className="">
          <h1 className=" text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Projects
          </h1>
        </div>

        <div className="flex flex-row gap-5 sm:flex sm:flex-wrap p-2">
          <ProjectCard
            src="/port.jpg"
            title="Next.js Portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            skill='nextjs'
          />
          <ProjectCard
            src="/memealo.jpg"
            title="Memealo"
            description="Memealo, a card game based on memes, may the best meme win, a fun interaction game with 7 players per room."
            skill='react'
          />
          <ProjectCard
            src="/memealo.jpg"
            title="Memealo"
            description="Memealo, a card game based on memes, may the best meme win, a fun interaction game with 7 players per room."
            skill='react'
          />
          <ProjectCard
            src="/memealo.jpg"
            title="Memealo"
            description="Memealo, a card game based on memes, may the best meme win, a fun interaction game with 7 players per room."
            skill='react'
          />
        </div>
      </section>
    </section>
  )
}

export default Projects