import Innerbanner from "../components/images/Innerbanner.webp";
import Cheraaabout from "../components/images/Cheraaabout.jpg";

function About() {
  return (
    <div>
      <div>
        <img
          src={Innerbanner}
          alt="banner"
          className="img-fluid"
          width="100%"
        />
      </div>

      <div>
        <h2>30 years of experience</h2>
        <p>
          Vishwam Ventures is an emerging Export startup, incepted by
          professionals with over 30 years of experience, from diverse
          backgrounds. Vishwam Ventures aims to export some of the most
          essential products manufactured in India to various destinations
          overseas.
        </p>
      </div>
      <div className="inner-about">
        <div>
          <img src={Cheraaabout} alt="Cheraaabout" className="img-fluid" />
        </div>
        <div>
          <h2>About</h2>
          <p>
            Vishwam Ventures envisages to foster the Make in India initiative by
            focusing on traditional, culture/heritage-value based products that
            would enhance the brand value of Bharath, and build a large loyal
            consumer base.
          </p>
          <p>
            <b>Essence of Bharath</b>
          </p>
          <p>
            Vishwam Ventures is committed to promoting, advocating and
            disseminating the essence of Bharath in all its projects and
            initiatives. This is a tribute to the rich Indian Culture and
            Heritage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
