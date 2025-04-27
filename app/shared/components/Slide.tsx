import Slider from "react-slick";

export default function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 400000,
    arrows: false,
    dotsClass: "slick-dots slick-thumb text-amber-800",
  };

  return (
    <div className="w-full h-full flex flex-col justify-center bg-gradient-to-r from-[#0d0e10] to-[#3d4548] mx-auto container px-20">
      <Slider {...settings}>
        <div className="flex flex-col items-start">
          <h3 className="text-white">Fast Food Restaurant</h3>
          <p className="text-white">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-white">Fast Food Restaurant</h3>
          <p className="text-white">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-white">Fast Food Restaurant</h3>
          <p className="text-white">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
        </div>
      </Slider>
    </div>
  );
}
