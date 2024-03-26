import Link from "next/link";
import React from "react";
import Blob from "./Blobs";

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hello! 👋🏼
          <br />
          Im
          <span className="bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.blue.700),theme(colors.green.400))] text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
            {" Burak"}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          Welcome to my corner of the internet. I am a full stack developer
          based in New York.
        </p>

        <Link
          href={"mailto:sabburak26@gmail.com"}
          className="inline-block group"
        >
          <div>
            <h1 className="text-3xl font-bold">
              <span className="group-hover:bg-[linear-gradient(to_left,theme(colors.green.400),theme(colors.blue.700),theme(colors.green.400))] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[length:200%_auto] animate-gradient-fast">
                Contact Me{" "}
              </span>{" "}
              📬
            </h1>
          </div>
        </Link>
      </div>
      <Blob />
    </div>
  );
}
