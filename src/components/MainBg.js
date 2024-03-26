import videoBg from "../assets/blue.mp4";

function MainBg() {
  return (
    <div className="main-bg">
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
}

export default MainBg;
