import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  SiNextdotjs,
  SiReactquery,
  SiSupabase,
  SiTailwindcss,
  SiSanity,
  SiApollographql,
  SiChakraui,
  SiPrisma,
  SiTypescript,
  SiReact,
  SiPassport,
} from "react-icons/si";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Chess",
      tech: [SiReact, SiTypescript, SiPassport, SiPrisma, SiTailwindcss],
      site: "http://localhost:3000",
      github: "https://github.com/brickly26/Chess",
      cover: "/project1.png",
      gif: "/project1.gif",
      background: "bg-blue-700",
      description:
        "Our new product is designed to revolutionize the way you work. With powerful features and a sleek interface, its the perfect tool for your team.",
    },
    {
      title: "iMessenger",
      tech: [SiNextdotjs, SiApollographql, SiTypescript, SiPrisma, SiChakraui],
      site: "https://www.i-message.app/",
      github: "https://github.com/brickly26/iMessage",
      cover: "/project2.png",
      gif: "/project2.gif",
      background: "bg-green-400",
      description:
        "Our new product is designed to revolutionize the way you work. With powerful features and a sleek interface, its the perfect tool for your team.",
    },
    {
      title: "Memories",
      tech: [SiNextdotjs, SiReactquery, SiChakraui, SiPrisma],
      site: "http://localhost:3000",
      github: "https://github.com/brickly26/memories-frontend",
      cover: "/project1.png",
      gif: "/project1.gif",
      background: "sm:bg-green-400 bg-blue-700",
      description:
        "Our new product is designed to revolutionize the way you work. With powerful features and a sleek interface, its the perfect tool for your team.",
    },
    {
      title: "Muse",
      tech: [SiSanity, SiReactquery, SiSupabase, SiTailwindcss],
      site: "https://muse-eta.vercel.app",
      github: "",
      cover: "/project4.png",
      gif: "/project4.gif",
      background: "sm:bg-blue-700 bg-green-400",
      description:
        "Our new product is designed to revolutionize the way you work. With powerful features and a sleek interface, its the perfect tool for your team.",
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
            <Dialog key={idx}>
              <DialogTrigger>
                <div className={cn("p-3 rounded-md", project.background)}>
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
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <div>
                  <img
                    alt="project img"
                    className="w-full rounded-md"
                    height="300"
                    src={project.gif}
                    style={{
                      aspectRatio: "600/300",
                      objectFit: "cover",
                    }}
                    width="600"
                  />
                  <div className="mt-6 flex items-center space-x-4">
                    {project.tech.map((Icon, idx) => {
                      return <Icon key={idx} className="h-8 w-8" />;
                    })}
                  </div>
                  <p className="mt-6 text-center text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
                <div className="flex w-full justify-between">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href={project.site}
                  >
                    Visit
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href={project.github}
                  >
                    GitHub
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
}
