import img1 from "../imgs/aus2.png";

function About() {
  return (
    <>
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              alt="about"
              src={img1}
              className="img-fluid"
              style={{ marginTop: "7rem", width: "350px", height: "355px" }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT US</h2>
            <p className="main-p">
              First Choice Automotive Parts Cars LLC is a leading provider of
              high-quality automotive parts and vehicles in Abu Dhabi, UAE. With
              a commitment to customer satisfaction and a vast inventory of top
              brands, we strive to be your first choice when it comes to
              automotive solutions. Whether you are in need of spare parts, body
              parts, suspension parts, or engine parts, we have you covered. Our
              knowledgeable team and extensive range of products make us your
              trusted partner in keeping your vehicles running smoothly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
