import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";

export default function Hero() {
  const images = [
    "/menu-images/Bibimbap.png",
    "/menu-images/Budae-Jjigae.png",
    "/menu-images/Japchae.png",
  ];

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className="sb-hero">
      {}
      <div className="sb-hero-content">
        <p className="tagline">Authentic Korean Cuisine</p>
        <h1>
          Taste the Flavors of <br /> Seoul Bites
        </h1>

        {}
        <a href="/menu" className="hero-btn">
          View Menu
        </a>
      </div>

      {}
      <div className="sb-hero-carousel">
        <div className="orange-card">
          <Slider {...settings}>
            {images.map((src, i) => (
              <div className="slide" key={i}>
                <img src={src} alt={`slide-${i}`} />
              </div>
            ))}
          </Slider>

          {}
          <span className="hero-label">Menu Highlights</span>
        </div>
      </div>
    </section>
  );
}
