import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concert Program | STLVGMO",
  description: "View the STLVGMO concert program.",
};

export default function Program() {
  return (
    <main className="w-full h-screen">
      <iframe
        src="/assets/STLVGMO_Oct2025_Program_V4.pdf"
        className="w-full h-full"
        title="STLVGMO Concert Program"
        style={{ border: 'none' }}
      />
    </main>
  );
}
