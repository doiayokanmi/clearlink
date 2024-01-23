import Link from "next/link";
import Image from "next/image";
import React from "react";
import { quickLinks } from "@/util";

const QuickLinks = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between p-4 py-8 lg:px-24 lg:py-12">
      <div className="basis-1/4">
        <Link href="/">
          <Image src="/images/logo.png" width={100} height={100} alt="logo" />
        </Link>

        <p className="text-gray-500 text-xs py-8">
        ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!
        </p>
      </div>

      <div className="basis-2/4 lg:px-12 flex-1 text-sm font-semibold flex flex-wrap justify-between items-center">
        {
            quickLinks.map((qLink, index) => (
                <div key={index}>
                    <h1 className="pb-4">{qLink.title}</h1>
                    <ul className="flex text-gray-500 text-xs flex-col gap-4">
                        {
                            qLink.links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            ))
        }
      </div>

      <div className="lg:px-4 py-4 lg:py-0 flex flex-col space-y-4">
        <h2 className="text-blue-700 font-semibold">
        Get the app
        </h2>
        <Link href="/">
            <Image src="/images/googleplay.png" width={100} height={100} alt="logo" />
        </Link>
        <Link href="/">
            <Image src="/images/applestore.svg" width={100} height={100} alt="logo" />
        </Link>
      </div>
    </section>
  );
};

export default QuickLinks