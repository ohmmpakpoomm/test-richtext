import dynamic from "next/dynamic";
const TinyMCE = dynamic(() => import("@/components/TinyMCE"), { ssr: false });

export default function page() {
  return (
    <div>
      <TinyMCE />
    </div>
  );
}
