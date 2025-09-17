import Innerbanner from "../components/images/Innerbanner.webp";

function Contact() {
  return (
    <div>
      <div>
        <img
          src={Innerbanner}
          alt="Innerbanner"
          className="img-fluid"
          width="100%"
        />
      </div>
      <div>
        <h2>Contact</h2>
      </div>
      <div className="contact">
        <div>
          <p>
            <b>Reach Us</b>
          </p>
          <p>M-707, Lynx, Brigade Gateway, 26/1,</p>
          <p>Dr. Rajkumar Road, Malleshwaram West,</p>
          <p>Bengaluru-560055, Karnataka, India.</p>
        </div>
        <div>
          <p>
            <b>Email</b>
          </p>
          <p>abcd123@gmail.com</p>
          <p>xyz789@gmail.com</p>
          <p>pqr567@gmail.com</p>
        </div>
        <div>
          <p>
            <b>Phone</b>
          </p>
          <p>Nagaraja: 9448273017</p>
          <p>Ashwin: 98867 98670</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
