import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/buraksu-s",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "",
      label: "Github",
      Icon: SiGithub,
    },
  ];
  return (
    <div className="border-t mt-10">
      <nav className="py-10 flex flex-col space-y-5 items-center">
        <h1>
          Made with <span className="px-2">❤️</span> by Burak Aksu
        </h1>
        <div className="flex items-center gap-5">
          {socials.map((social, index) => {
            const Icons = social.Icon;
            return (
              <Link key={index} href={social.link} aria-label={social.label}>
                <Icons className="w-5 h-5 hover:scale-125 transition-all" />
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
