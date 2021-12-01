import Head from "next/head";
import Contact from "../components/Contact.tsx";
import Hero from "../components/Hero.tsx";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center  max-w-full min-w-max w-full min-h-screen py-2">
      <Head>
        <title>BARB💇‍♂️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Contact />
    </div>
  );
}
