import Socialimpactimg from "../components/images/Socialimpactimg.webp";
import Udaan from "../components/images/Udaan.webp";
import Donate from "../components/images/Donate.webp";
import Teach from "../components/images/Teach.webp";
import Programs from "../components/images/Programs.webp";
// import g1 from "../components/images/g1.webp";
// import g2 from "../components/images/g2.webp";
// import g3 from "../components/images/g3.webp";
// import g4 from "../components/images/g4.webp";

function Socialimpact() {
  return (
    <div>
      <div class="container-fluid p-0">
        <div class="inner-banner-img">
          <img src={Socialimpactimg} class="img-fluid" alt="banner" />
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
                  Social Impact
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
                  About Udaan
                </h2>
                <p data-aos="zoom-in" data-aos-duration="1000">
                  A transformative and upskilling program for rural children of
                  Karalkatte, Halagur (near Kanakapura) was officially launched
                  on the 14th January 2024. The platform will be built to drive
                  sustainable development and upskilling programs for children
                  of the village.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="about-img-inner">
              <img src={Udaan} class="img-fluid" alt="udaan" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="about-info-inner">
              <h2 data-aos="fade-down" data-aos-duration="1000">
                Key Focus
              </h2>
              <p data-aos="zoom-in" data-aos-duration="1000">
                UDAAN will now launch skilling initiatives in February 2024
                which will focus on Spoken English, Sports and Computer Literacy
                in Phase 1.
              </p>
              &nbsp;
              <p data-aos="zoom-in" data-aos-duration="1000">
                The plan will also encourage specialists to come and teach
                children across subjects like music, dance, theatre, personality
                development, & employment.
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="udaan-info">
                <h2 data-aos="fade-down" data-aos-duration="1000">
                  Support
                </h2>
                <p data-aos="zoom-in" data-aos-duration="1000">
                  UDAAN currently supports 30 rural children in the age group of
                  7 – 15.
                </p>
                &nbsp;
                <p data-aos="zoom-in" data-aos-duration="1000">
                  <span>How you can support?</span>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div
                class="support-img"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img src={Donate} class="img-fluid" alt="Donate" />
                <div class="img-bg"></div>
                <h3>Donate</h3>
                <p>Books, Used Computers,</p>
                <p>Sports Kits or Cash</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div
                class="support-img"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img src={Teach} class="img-fluid" alt="Teach" />
                <div class="img-bg"></div>
                <h3>Teach</h3>
                <p>You can volunteer to</p>
                <p>teach syllabus or skills</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div
                class="support-img"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img src={Programs} class="img-fluid" alt="Programs" />
                <div class="img-bg"></div>
                <h3>Programs</h3>
                <p>
                  You can conduct development programs or bring specialists to
                  address the children
                </p>
                &nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container-fluid">
        <div class="container">
          <div class="udaan-info">
            <h2 data-aos="fade-down" data-aos-duration="1000">
              Gallery
            </h2>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="client-section">
                <div class="each-products">
                  <img src={g1} class="img-fluid" alt="gallery-image" />
                </div>
                <div class="each-products">
                  <img src={g2} class="img-fluid" alt="gallery-image" />
                </div>
                <div class="each-products">
                  <img src={g3} class="img-fluid" alt="gallery-image" />
                </div>
                <div class="each-products">
                  <img src={g4} class="img-fluid" alt="gallery-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Socialimpact;
