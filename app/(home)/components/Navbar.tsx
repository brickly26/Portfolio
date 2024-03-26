import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar() {
  // TODO: Install react Icons @6:50
  const socials = [
    {
      link: "https://www.linkedin.com/in/buraksu-s",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/brickly26",
      label: "Github",
      Icon: SiGithub,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center animate-move-down">
      <h1 className="text-2xl font-bold text-green-400">Burak Aksu 👨🏻‍💼</h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icons = social.Icon;
          return (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              aria-label={social.label}
            >
              <Icons className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
