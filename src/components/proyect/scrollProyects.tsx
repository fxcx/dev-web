import ProjectCard from "@/components/proyect/ProjectCard"

const ScrollProyect = () => {
    return (
        <section className="flex justify-center flex-wrap gap-2 w-screen h-screen">

            <div className="p-1">
                <ProjectCard
                    src="/port.jpg"
                    title="Next.js Portfolio"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <div className=" grid place-content-center">
                    <div className="flex flex-wrap gap-2 justify-center w-[300px] ">
                        <span className="rounded-lg bg-slate-500 p-1.5 font-sans text-xs font-bold uppercase text-white">Next.js</span>
                        <span className="rounded-lg bg-slate-500 p-1.5 font-sans text-xs font-bold uppercase text-white">typeScript</span>
                        <span className="rounded-lg bg-slate-500 p-1.5 font-sans text-xs font-bold uppercase text-white">Tailwind</span>
                    </div>
                </div>
            </div>
            <div className="p-1">
                <ProjectCard
                    src="/memealo.jpg"
                    title="Memealo"
                    description="Memealo, a card game based on memes, may the best meme win, a fun interaction game with 7 players per room."
                />
                <div className=" grid place-content-center">
                    <div className="flex flex-wrap gap-2 justify-center w-[300px]">
                        <span className="rounded-lg bg-slate-500 p-1.5 font-sans text-xs font-bold uppercase text-white">Next.js</span>
                        <span className="rounded-lg bg-slate-500 p-1.5 font-sans text-xs font-bold uppercase text-white">typeScript</span>
                        <span className="rounded-lg bg-slate-500 p-1.5 font-sans text-xs font-bold uppercase text-white">Prisma</span>
                        <span className="rounded-lg bg-slate-500 p-1.5 font-sans text-xs font-bold uppercase text-white">PostgreSQL</span>
                        <span className="rounded-lg bg-slate-500 p-1.5 font-sans text-xs font-bold uppercase text-white">express.js</span>
                        <span className="rounded-lg bg-slate-500 p-1.5 font-sans text-xs font-bold uppercase text-white">Tailwind</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScrollProyect