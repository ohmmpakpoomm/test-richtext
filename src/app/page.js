"use client";

import Link from "next/link";

import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <Carousel
        withIndicators
        height={200}
        w={600}
        dragFree
        slideGap="md"
        align="start"
      >
        <Carousel.Slide>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Norway"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Norway"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Norway"
          />
        </Carousel.Slide>
      </Carousel>
      <h1>Test Rich Text Editor</h1>
      <div className="flex flex-row justify-center items-center space-x-4">
        <Link href="/mantineV4">MantineV4</Link>
        <Link href="/tinyMCE">TinyMCE</Link>
        <Link href="/ckEditor">CKEditor</Link>
      </div>
    </div>
  );
}
