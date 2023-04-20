import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 rounded flex items-center gap-4 group overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="album image"
              />
              <strong>Tipo gringa</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded flex items-center gap-4 group overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="album image"
              />
              <strong>Tipo gringa</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded flex items-center gap-4 group overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="album image"
              />
              <strong>Tipo gringa</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h1 className="font-semibold text-2xl mt-10">
            Made for Henrique Casagrande
          </h1>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="album image"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">See more</span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="album image"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">See more</span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="album image"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">See more</span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="album image"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">See more</span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="album image"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">See more</span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="album image"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">See more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
