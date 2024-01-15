import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <section
    className="max-h-full h-screen"  
    style={{ backgroundImage: "url(/main-bg.webp)" }}>
    <div
      className="grid place-content-center gap-3"
    >
      <h1 className=" text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="flex flex-col-1 flex-wrap justify-center gap-1 px-10">
        <ProjectCard
          src="/port.jpg"
          title="Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/memealo.jpg"
          title="Memealo"
          description="Memealo, a card game based on memes, may the best meme win, a fun interaction game with 7 players per room."
        />
      </div>
    </div>
    </section>
  );
};

export default Projects;