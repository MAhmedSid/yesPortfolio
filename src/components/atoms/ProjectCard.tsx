import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiLink, FiGithub } from "react-icons/fi";

const ProjectCard: React.FC<{
  imgSrc: string;
  imgAlt: string;
  projTitle: string;
  projType: string;
  githubLink: string;
  visitLink: string;
}> = ({ imgSrc, imgAlt, projTitle, projType, githubLink, visitLink }) => {
  return (
    <div className="group relative h-72 md:h-96 cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-full w-full md:h-auto md:w-auto">
        <Image
          className="h-full w-full object-fill transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={`https:${imgSrc}`}
          alt="project image"
          width={0}
          height={0}
          sizes="100%"
        />
      </div>
      <div className="absolute h-full inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/90 group-hover:to-black/80"></div>
      <div className="absolute  inset-0 m-2 flex flex-col items-center justify-center bg-black bg-opacity-5 px-9 text-center opacity-0 transition-all duration-500 group-hover:opacity-95">
        <h1 className=" mb-2 capitalize text-2xl text-white">{projTitle}</h1>
        <p className="mb-10 text-xs uppercase tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {projType}
        </p>
        <div className="flex gap-x-8">
          <Link href={githubLink}>
            <FiGithub className="text-3xl text-white hover:text-primaryBlue " />
          </Link>
          <Link href={visitLink}>
            <FiLink className="text-3xl text-white hover:text-primaryBlue " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
