import React from "react";
import Banner from "../components/images/Banner.webp";
import About from "../components/images/About.webp";
import Essence from "../components/images/Essence.webp";
import Jamora from "../components/images/Jamora.webp";
import Cheraa from "../components/images/Cheraa.jpg";
import Aromas from "../components/images/Aromas.webp";

function Home() {
  return (
    <div>
      <img src={Banner} alt="banner" width="100%" />
      <div className="banner-txt">
        <h1>
          Products Made-in-India with pride, and a passion to promote rich
          Indian Culture, and Heritage, globally.
        </h1>
      </div>
      <div className="about">
        <img src={About} alt="about" className="img-fluid" />
        <div className="about-text">
          <h2>About Vishwam Ventures</h2>
          <p>
            Vishwam Ventures is an Export Startup, with a vision to take the
            ‘Essence of Bharath,’ to global destinations. The range of products
            have an indigenous footprint, embodying the diverse Indian Cultural
            Heritage.
          </p>
          <a href="/about">More</a>
        </div>
      </div>
      <div className="about">
        <div className="about-text">
          <h2>Essence of Bharath</h2>
          <p>
            A vision to promote the ‘Essence of Bharath,’ worldwide, Vishwam
            Ventures is committed to build a global audience base for all
            products made-in-India. The essence translates beyond the products,
            to the ancient knowledge systems, the cultural fabric, tradition,
            and ethos of the country.
          </p>
          <a href="/about">More</a>
        </div>
        <img src={Essence} alt="about" className="img-fluid" />
      </div>
      <h2>Products</h2>
      <div className="products">
        <img src={Jamora} alt="jamora" className="img-fluid" />
        <img src={Cheraa} alt="cheraa" className="img-fluid" />
      </div>

      <div className="about">
        <div className="about-text">
          <p>
            Launching a series of naturally hand-made Incense Sticks to
            experience the best fragrances.
          </p>
          <a href="/about">More</a>
        </div>
        <img src={Essence} alt="about" className="img-fluid" />
      </div>
      <div className="about">
        <img src={Aromas} alt="about" className="img-fluid" />
        <div className="about-text">
          <h2>Unique Aromas for Diverse Experiences</h2>
          <p>
            Timeless and unique - the range of Incense Sticks create distinctive
            experiences from spiritual, ambient, subtle and opulent.
          </p>
          <p>
            Our products are Avant Garde, with a commitment to eco-friendliness
            and responsibility.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
