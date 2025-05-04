import type { Route } from "./+types/HomePage";

import Navbar from "~/shared/components/organisms/Navbar";
import Footer from "~/shared/components/organisms/Footer";
import CustomSlider from "~/shared/components/organisms/Slide";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Restaurante" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <header>
        <div className="flex flex-col relative w-full h-[50rem] md:h-screen overflow-hidden">
          <Navbar />

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              className="w-full h-full object-cover overflow-hidden"
              src="https://themewagon.github.io/feane/images/hero-bg.jpg"
              alt="Hero Background"
            />
          </div>
          <CustomSlider />
        </div>

        <div></div>
      </header>

      {/* <main></main>

      <section></section> */}

      <Footer />
    </div>
  );
}
