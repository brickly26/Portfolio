import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  SiNextdotjs,
  SiReactquery,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "E-learning platform",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      link: "http://localhost:3000",
      cover: "/project1.png",
      background: "bg-blue-700",
    },
    {
      title: "E-learning platform",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      link: "http://localhost:3000",
      cover: "/project1.png",
      background: "bg-green-400",
    },
    {
      title: "E-learning platform",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      link: "http://localhost:3000",
      cover: "/project1.png",
      background: "sm:bg-green-400 bg-blue-700",
    },
    {
      title: "E-learning platform",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      link: "http://localhost:3000",
      cover: "/project1.png",
      background: "sm:bg-blue-700 bg-green-400",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-green-400">
          <span>{"Projects "}</span> 👨🏻‍🔧
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, idx) => {
          return (
            <Link href={project.link} key={idx}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full cursor-pointer"
                >
                  <div className="space-y-5 bg-[rgba(0,0,0,0.7)] p-2 rounded-md">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, idx) => {
                        return <Icon key={idx} className="h-8 w-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
