import Innerbanner from "../components/images/Innerbanner.webp";
import Udaan from "../components/images/Udaan.webp";

function Socialimpact() {
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
        <h2>About Udaan</h2>
        <p>
          A transformative and upskilling program for rural children of
          Karalkatte, Halagur (near Kanakapura) was officially launched on the
          14th January 2024. The platform will be built to drive sustainable
          development and upskilling programs for children of the village.
        </p>
      </div>
      <div>
        <div className="impact">
          <div>
            <img src={Udaan} alt="Udaan" className="img-fluid" />
          </div>
          <div>
            <h2>Key Focus</h2>
            <p>
              UDAAN will now launch skilling initiatives in February 2024 which
              will focus on Spoken English, Sports and Computer Literacy in
              Phase 1.
            </p>
            <p>
              The plan will also encourage specialists to come and teach
              children across subjects like music, dance, theatre, personality
              development, & employment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socialimpact;
