import card1 from "../imgs/s1.png";
import card2 from "../imgs/s2.png";
import card3 from "../imgs/s3.png";

function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="card">
              <br />
              <div className="text-center" style={{ marginTop: "50px" }}>
                <img
                  alt="card-img"
                  src={card1}
                  className="text-center img-fluid"
                  style={{ height: "160px" }}
                />
              </div>
              <div className="text-center">
                <h3 className="card-title">Spare Parts</h3>
              </div>
              <div className="p-3">
                <p className="card-text">
                  We stock a comprehensive range of spare parts for various
                  vehicle makes and models. Whether you require a replacement
                  part for your engine, body, or suspension, our vast inventory
                  ensures that you find the right component to keep your vehicle
                  in optimal condition.
                </p>
              </div>
            </div>

            <div className="card">
              <br />
              <div className="text-center">
                <img
                  alt="card-img"
                  src={card2}
                  className="text-center img-fluid"
                />
              </div>
              <div className="text-center">
                <h3 className="card-title">Body Parts</h3>
              </div>
              <div className="p-3">
                <p className="card-text">
                  Our selection of body parts caters to both aesthetic
                  enhancements and functional repairs. From fenders and bumpers
                  to doors and hoods, we provide high-quality body parts to
                  restore the appearance and integrity of your vehicle.
                </p>
              </div>
            </div>

            <div className="card">
              <br />
              <div className="text-center">
                <img
                  alt="card-img"
                  src={card3}
                  className="text-center img-fluid"
                />
              </div>
              <div className="text-center">
                <h3 className="card-title">Engine Parts</h3>
              </div>
              <div className="p-3">
                <p className="card-text">
                  Keep your engine performing at its best with our superior
                  engine parts. Whether you need filters, belts, or engine
                  components, we offer reliable and durable products to ensure
                  the smooth operation of your vehicle's heart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
