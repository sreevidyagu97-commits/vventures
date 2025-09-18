import Innerbanner from "../components/images/Innerbanner.webp";
import Cheraaabout from "../components/images/Cheraaabout.jpg";

function About() {
  return (
    <div>
      <div class="container-fluid m-0 p-0">
        <div class="inner-banner-img">
          <img src={Innerbanner} class="img-fluid" alt="banner" />
        </div>
      </div>

      <div class="container brd-crmb">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div class="container-fluid p-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="about-intro">
                <h2 data-aos="fade-down" data-aos-duration="1000">
                  30 years of experience
                </h2>
                <p data-aos="zoom-in" data-aos-duration="1000">
                  Vishwam Ventures is an emerging Export startup, incepted by
                  professionals with over 30 years of experience, from diverse
                  backgrounds. Vishwam Ventures aims to export some of the most
                  essential products manufactured in India to various
                  destinations overseas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="about-img-inner">
              <img src={Cheraaabout} class="img-fluid" alt="Cheraa" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="about-info-inner">
              <h2 data-aos="fade-down" data-aos-duration="1000">
                About
              </h2>
              <p data-aos="zoom-in" data-aos-duration="1000">
                Vishwam Ventures envisages to foster the Make in India
                initiative by focusing on traditional, culture/heritage-value
                based products that would enhance the brand value of Bharath,
                and build a large loyal consumer base.
              </p>
              &nbsp;
              <p data-aos="zoom-in" data-aos-duration="1000">
                <span>Essence of Bharath</span>
              </p>
              <p data-aos="zoom-in" data-aos-duration="1000">
                Vishwam Ventures is committed to promoting, advocating and
                disseminating the essence of Bharath in all its projects and
                initiatives. This is a tribute to the rich Indian Culture and
                Heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
