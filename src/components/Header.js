import video from "../imgs/video.mp4";

function Header() {
  return (
    <header>
      <video src={video} loop autoPlay muted></video>
      <h1 style={{ fontSize: "40px" }}>
        Welcome to First Choice Automotive Parts Cars LLC
      </h1>
      <div className="row">
        <button to="services" className="btn">
          Driving Excellence in Quality and Service
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
