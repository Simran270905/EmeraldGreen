const SectionDivider = ({ color = "#f7ddb0" }) => {
  return (
    <div className="flex items-center justify-center my-5">
      
      {/* Left Line */}
      <span
        className="w-24 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${color})`,
        }}
      />

      {/* Center Motif */}
      <span
        className="mx-4 text-sm"
        style={{ color }}
      >
        ✦
      </span>

      {/* Right Line */}
      <span
        className="w-24 h-px"
        style={{
          background: `linear-gradient(to left, transparent, ${color})`,
        }}
      />

    </div>
  );
};


export default SectionDivider;
