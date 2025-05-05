import type { Route } from "./+types/HomePage";

import Navbar from "~/shared/components/organisms/Navbar";
import Footer from "~/shared/components/organisms/Footer";
import CustomSlider from "~/shared/components/organisms/Slide";
import { FaShoppingCart } from "react-icons/fa";

const offers = [
  {
    title: "Tasty Thursdays",
    discount: "20%",
    image:
      "https://images.unsplash.com/photo-1605478521116-3e4e7b3f9d57?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Pizza Days",
    discount: "15%",
    image:
      "https://images.unsplash.com/photo-1601924582975-dfbd6e20e3e8?auto=format&fit=crop&w=500&q=80",
  },
];

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
      </header>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="bg-[#2c2f3f] rounded-lg p-6 flex items-center justify-between gap-6"
            >
              <div className="min-w-[120px]">
                <div className="w-32 h-32 rounded-full border-4 border-yellow-500 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 text-white text-center md:text-left">
                <h3 className="font-cursive text-xl">{offer.title}</h3>
                <p className="text-3xl font-semibold">
                  {offer.discount}{" "}
                  <span className="text-base font-normal">Off</span>
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-400 transition text-white px-5 py-2 rounded-full flex items-center gap-2 justify-center text-sm mt-2">
                  Order Now <FaShoppingCart className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
