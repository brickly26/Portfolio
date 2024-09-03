"use client";

import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiGraphql,
  SiChakraui,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Postgresql",
      Icon: SiPostgresql,
    },
    {
      text: "Typescript",
      Icon: SiTypescript,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Prisma",
      Icon: SiPrisma,
    },
    {
      text: "GraphQL",
      Icon: SiGraphql,
    },
    {
      text: "Chakra UI",
      Icon: SiChakraui,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-green-400">
          <span>{"Skills "}</span>
          &#62;<span className="blink">_</span>
        </h1>
      </div>

      <HoverEffect items={skills} />
    </div>
  );
}
