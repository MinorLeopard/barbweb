import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>BARB💇‍♂️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
    </div>
  );
}
