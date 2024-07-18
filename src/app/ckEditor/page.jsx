"use client";

import dynamic from "next/dynamic";

const CkEditor = dynamic(
  () => import("@/components/CKEditor").then((mod) => mod.default),
  { ssr: false }
);

export default function page() {
  return (
    <div>
      <CkEditor />
    </div>
  );
}
