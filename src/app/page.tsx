import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] min-h-screen text-white">
      <div className="flex flex-col justify-center items-center gap-12 px-4 py-16 container">
        <h1 className="font-extrabold text-5xl text-white sm:text-[5rem] tracking-tight">
          YOO
        </h1>
      </div>
    </main>
  );
}
