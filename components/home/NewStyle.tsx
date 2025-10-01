"use client";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";

const NewStyle = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/assets/images/01.webp",
    "/assets/images/02.webp",
    "/assets/images/03.webp",
    "/assets/svgs/swan.svg",
  ];

  // 📝 matching texts for each image
  const texts = [
    "Be Connected. Be Safe.",
    "Be Safe. Be Smile.",
    "Be Smile. Be Living.",
    "Be Swan...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 7000); // stays 7s per image
    return () => clearInterval(interval);
  }, []);

  // Grid setup (3x3 → 9 tiles)
  const gridSize = 3;
  const tiles = Array.from({length: gridSize * gridSize}, (_, i) => i);

  const containerW = 332;
  const containerH = 499;

  return (
    <section className="w-full background-gradient">
      <div className="flex max-w-[1280px] w-full h-[500px] mx-auto flex-nowrap">
        {/* Left text */}
        <div className="flex-grow text-left p-[10px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={texts[currentImage]}
              className="text-3xl font-bold text-yellow-200 italic font-serif"
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              transition={{duration: 0.6}}>
              {texts[currentImage]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Right rotating image with tile animation */}
        <div
          className="relative flex-shrink-0 overflow-hidden rounded-2xl shadow-lg"
          style={{width: containerW, height: containerH}}>
          <AnimatePresence mode="wait">
            <motion.div
              key={images[currentImage]}
              className="absolute inset-0 grid grid-cols-3 grid-rows-3"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: {transition: {staggerChildren: 0.08}},
                exit: {
                  transition: {staggerChildren: 0.08, staggerDirection: -1},
                },
              }}>
              {tiles.map((i) => {
                const row = Math.floor(i / gridSize);
                const col = i % gridSize;

                return (
                  <motion.div
                    key={i}
                    className="relative overflow-hidden"
                    variants={{
                      hidden: {opacity: 0},
                      visible: {opacity: 1},
                      exit: {opacity: 0},
                    }}
                    transition={{duration: 0.4}}>
                    {/* ✅ use container size so height isn’t squished */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${images[currentImage]})`,
                        backgroundSize: `${containerW}px ${containerH}px`,
                        backgroundPosition: `${(col / (gridSize - 1)) * 100}% ${
                          (row / (gridSize - 1)) * 100
                        }%`,
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default NewStyle;
