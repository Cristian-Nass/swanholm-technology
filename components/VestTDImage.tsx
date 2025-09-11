"use client";
import Image from "next/image";
import {useState} from "react";
const VestTDImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={{position: "relative"}}>
      <Image
        src="/assets/images/3d-vest.webp"
        alt="VestTD"
        width={400}
        height={400}
        useMap={"#product-vest-map"}
      />
      <map name="product-vest-map" className="cursor-pointer hover:bg-blue-200">
        <area
          shape="rect"
          coords="110,110,140,140"
          className="cursor-pointer hover:bg-blue-200"
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        />
      </map>
      {isHovered && (
        <>
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "12%",
              width: "260px",
              height: "80px",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              borderRadius: "10px",
              padding: "10px",
              zIndex: 10,
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
            }}>
            <h1>Alatm Button</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default VestTDImage;
