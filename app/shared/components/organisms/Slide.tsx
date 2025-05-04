import Slider from "react-slick";
import Button from "../atoms/Button";

export default function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 400000,
    pausaOnHover: true,
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div className="w-full h-full flex flex-col justify-center bg-gradient-to-r from-[#0d0e10] to-[#3d4548] px-5 md:px-32 lg:px-40">
      <Slider {...settings} className="py-10">
        <div className="flex flex-col items-start md:!w-[50%] w-[100%]">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Comida Rápida Deliciosa
          </h3>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Disfruta de nuestras hamburguesas jugosas, papas crujientes y combos
            irresistibles preparados al momento. ¡Sabor, rapidez y frescura en
            cada bocado!
          </p>
          <Button type="button" width="sm:w-1/2 w-full">
            Ver menú
          </Button>
        </div>
        <div className="flex flex-col items-start md:!w-[50%] w-[100%]">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Postres Deliciosos
          </h3>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Descubre nuestra variedad de postres artesanales preparados con
            ingredientes frescos. Cada bocado es una explosión de sabor dulce e
            inolvidable.
          </p>
          <Button
            type="button"
            bgColor="bg-pink-500"
            bgColorHover="bg-pink-600"
            width="sm:w-1/2 w-full"
          >
            Explorar
          </Button>
        </div>
        <div className="flex flex-col items-start md:!w-[50%] w-[100%]">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Bebidas Refrescantes
          </h3>
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            Desde jugos naturales hasta sodas especiales, tenemos la bebida
            perfecta para acompañar tu comida favorita. ¡Refresca tu día con
            nosotros!
          </p>
          <Button
            type="button"
            bgColor="bg-blue-500"
            bgColorHover="bg-blue-600"
            width="sm:w-1/2 w-full"
          >
            Ver catálogo
          </Button>
        </div>
      </Slider>
    </div>
  );
}
