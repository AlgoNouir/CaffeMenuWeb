import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Logo from "@/public/logo.png";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <main className="w-scren h-screen flex items-center justify-center flex-col">
      <div className="flex flex-row items-center space-x-5 max-sm:absolute max-sm:top-20">
        <Image src={Logo} className="w-20 h-20 sm:w-44 sm:h-44" alt="logo" />
        <h1 className="text-4xl sm:text-7xl text-text">Raha Caffe</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:gap-20 sm:grid-cols-3 p-10">
        <button>
          <p className="text-2xl text-text text-center">about us</p>
        </button>
        <button onClick={() => router.push("menu/")}>
          <p className="text-4xl text-text text-center">menu</p>
        </button>
        <button>
          <p className="text-2xl text-text text-center">tour info</p>
        </button>
      </div>
      <div className="absolute">
        <div className={styles.center} />
      </div>
    </main>
  );
}
