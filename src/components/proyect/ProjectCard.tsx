import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="grid place-items-center ">
      <Image
        src={src}
        alt={title}
        width={300}
        height={300}
        className="rounded-lg p-1 "
      />
      <article className="grid place-items-center">
        <div className="w-[300px] ">
          <h1 className="text-2xl text-center font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300 text-center">{description}</p>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;