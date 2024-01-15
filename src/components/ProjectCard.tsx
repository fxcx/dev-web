import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="grid place-items-center overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={300}
        height={300}
        className="object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl text-center font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-center">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;