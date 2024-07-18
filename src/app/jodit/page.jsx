import dynamic from "next/dynamic";

const Jodit = dynamic(() => import("@/components/Jodit"), { ssr: false });

export default function page() {
  return (
    <div>
      <Jodit />
    </div>
  );
}
