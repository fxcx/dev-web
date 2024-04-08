import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  skill: string;
}

const ProjectCard = ({ src, title, description, skill }: Props) => {
  return (
    <div className="grid place-items-center ">
      <Image
        src={src}
        alt={title}
        width={300}
        height={300}
      />
      <div className="p-1 cotainer md:w- first-letter:1200">
        <h1 className="text-2xl text-center font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-center">{description}</p>
      </div>
      <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-slate-500 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
        <span className="">{skill}</span>
      </div>
    </div>
  );
};

export default ProjectCard;