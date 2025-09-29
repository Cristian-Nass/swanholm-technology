import Image from "next/image";
const NewStyle = () => {
  return (
    <section className="w-full background-gradient">
      <div
        style={{
          display: "flex",
          maxWidth: "1280px",
          width: "100%", // responsive
          height: "400px",
          margin: "0 auto",
          flexWrap: "nowrap", // ensure no wrapping
        }}
        className="background-gradient">
        <div
          style={{
            flexGrow: 1, // take all remaining space
            textAlign: "left",
            padding: "10px",
          }}>
          <p>Text</p>
        </div>
        <div
          style={{
            width: "266px", // fixed size
            flexShrink: 0, // never shrink
            backgroundImage: "url('/assets/images/01.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <Image
            src="/assets/images/01.webp"
            alt="New Style"
            width={266}
            height={266}
          />
        </div>
      </div>
    </section>
  );
};

export default NewStyle;
