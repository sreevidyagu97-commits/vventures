import Innerbanner from "../components/images/Innerbanner.webp";

function Contact() {
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
                  <a href="/l">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="about-intro">
                <h2 data-aos="fade-down" data-aos-duration="1000">
                  Contact
                </h2>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="con-info">
                <h3 data-aos="zoom-in" data-aos-duration="1000">
                  Reach Us
                </h3>
                <p data-aos="zoom-in" data-aos-duration="1000">
                  M-707, Lynx, Brigade Gateway, 26/1,
                </p>
                <p data-aos="zoom-in" data-aos-duration="1000">
                  Dr. Rajkumar Road, Malleshwaram West,
                </p>
                <p data-aos="zoom-in" data-aos-duration="1000">
                  Bengaluru-560055, Karnataka, India.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="con-info">
                <h3 data-aos="zoom-in" data-aos-duration="1000">
                  Email
                </h3>
                <p>abcd123@gmail.com</p>
                <p>xyz890@gmail.com</p>
                <p>pqr567@gmail.com</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="con-info">
                <h3 data-aos="zoom-in" data-aos-duration="1000">
                  Phone
                </h3>
                <p data-aos="zoom-in" data-aos-duration="1000">
                  Nagaraja: 1234567890
                </p>
                <p data-aos="zoom-in" data-aos-duration="1000">
                  Ashwin: 0987654321
                </p>
              </div>
            </div>
          </div>
          <div class="enquire">
            <h3>Get in touch</h3>
            <form action="mail.php" method="post">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="enq-frm">
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="enq-frm">
                    <input
                      type="email"
                      name="Email"
                      id="Email"
                      placeholder="email ID"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="enq-frm">
                    <input
                      type="tel"
                      name="Phone"
                      id="Phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="enq-frm">
                    <textarea name="msg" placeholder="Message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="submit">
                    <input type="submit" placeholder="Submit" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
