"use client";

// RichText.tsx in your components folder

import { useState } from "react";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const handleImageUpload = (file) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("image", file);

    resolve("https://picsum.photos/360/360");
  });
};

export default function MantineV4({ defaultValue = "" }) {
  const [value, setValue] = useState(defaultValue);
  console.log(value);

  return (
    <RichTextEditor
      value={value}
      onChange={setValue}
      onImageUpload={handleImageUpload}
    />
  );
}
