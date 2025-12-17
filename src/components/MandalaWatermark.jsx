import mandala from "../assets/image/mandala.png";

const MandalaWatermark = ({ position = "center" }) => {
  const positions = {
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    top: "top-10 left-1/2 -translate-x-1/2",
    bottom: "bottom-10 left-1/2 -translate-x-1/2",
  };

  return (
    <img
      src={mandala}
      className={`absolute ${positions[position]} w-[500px] opacity-[0.06] pointer-events-none`}
      alt="Mandala watermark"
    />
  );
};

export default MandalaWatermark;
