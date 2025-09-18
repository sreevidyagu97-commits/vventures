import React from "react";
import Banner from "../components/images/Banner.webp";
import About from "../components/images/About.webp";
import Essence from "../components/images/Essence.webp";
import Jamora from "../components/images/Jamora.webp";
import Cheraa from "../components/images/Cheraa.jpg";
import Aromas from "../components/images/Aromas.webp";
import Incensticks from "../components/images/Incensticks.jpg";

function Home() {
  return (
    <div>
      <img src={Banner} alt="banner" width="100%" />
      <div className="banner-info">
        <h1>
          Products <b>Made-in-India</b> with pride, and a passion to promote
          rich Indian Culture, and Heritage, globally.
        </h1>
      </div>
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <div class="about-img">
                <img src={About} class="img-fluid" alt="about" />
              </div>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div class="about-info">
                <h2 data-aos="fade-down" data-aos-duration="1000">
                  About Vishwam Ventures{" "}
                </h2>
                <p data-aos="zoom-in" data-aos-duration="1000">
                  Vishwam Ventures is an Export Startup, with a vision to take
                  the ‘Essence of Bharath,’ to global destinations. The range of
                  products have an indigenous footprint, embodying the diverse
                  Indian Cultural Heritage.{" "}
                </p>
                <div class="more-1" data-aos="zoom-in" data-aos-duration="1000">
                  <a href="/about">More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div class="bharath-info">
                <h2 data-aos="fade-down" data-aos-duration="1000">
                  Essence of Bharath
                </h2>
                <p data-aos="zoom-in" data-aos-duration="1000">
                  A vision to promote the ‘Essence of Bharath,’ worldwide,
                  Vishwam Ventures is committed to build a global audience base
                  for all products made-in-India. The essence translates beyond
                  the products, to the ancient knowledge systems, the cultural
                  fabric, tradition, and ethos of the country.
                </p>
              </div>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <div class="bharath-img">
                <img src={Essence} class="img-fluid" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="prdt-hdng">
                <h2 data-aos="fade-down" data-aos-duration="1000">
                  Products
                </h2>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="product-img">
                <img
                  src={Jamora}
                  class="img-fluid"
                  alt="product"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
                <p data-aos="fade-up" data-aos-duration="1000">
                  Ja'mora Incense Sticks
                </p>
                <div
                  class="view"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="product-img">
                <img
                  src={Cheraa}
                  class="img-fluid"
                  alt="product"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
                <p data-aos="fade-up" data-aos-duration="1000">
                  Cheraa Incense Sticks
                </p>
                <div
                  class="view"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid p-0">
        <div class="container">
          <div class="row launch">
            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <p data-aos="zoom-in" data-aos-duration="1000">
                Launching a series of naturally hand-made Incense Sticks to
                experience the best fragrances.
              </p>
              <div class="more-2" data-aos="zoom-in" data-aos-duration="1000">
                <a href="/products">More</a>
              </div>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <img src={Incensticks} class="img-fluid" alt="Essence" />
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <div class="unique-img">
                <img src={Aromas} class="img-fluid" alt="Aromas" />
              </div>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div class="unique-info">
                <h2 data-aos="fade-down" data-aos-duration="1000">
                  Unique Aromas for
                </h2>
                <h2 data-aos="fade-down" data-aos-duration="1000">
                  Diverse Experiences{" "}
                </h2>
                <p data-aos="zoom-in" data-aos-duration="1000">
                  Timeless and unique - the range of Incense Sticks create
                  distinctive experiences from spiritual, ambient, subtle and
                  opulent.
                </p>
                <p data-aos="zoom-in" data-aos-duration="1000">
                  Our products are Avant Garde, with a commitment to
                  eco-friendliness and responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
