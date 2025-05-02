import { useState, useEffect } from "react";
import { VanDiv, VanImage } from "../pages/Home/HomeComponents";
import React from "react";

const VanComponent = () => {
  const [offset, setOffset] = useState(0);
  const minOffset = 0; 
  const maxOffset = -500; 
  let touchStartY = 0; 

  useEffect(() => {
    const handleScroll = (event: WheelEvent | TouchEvent) => {
      if ('deltaY' in event) { 
        setOffset((prev) => {
          if (event.deltaY > 0) {
            return Math.max(prev - 50, maxOffset);
          } else {
            return Math.min(prev + 50, minOffset);
          }
        });
      } else if ('touches' in event) { 
        const touchEndY = event.touches[0].clientY;
        const deltaY = touchStartY - touchEndY;

        setOffset((prev) => {
          if (deltaY > 0) {
            return Math.max(prev - 50, maxOffset);
          } else {
            return Math.min(prev + 150, minOffset);
          }
        });

        touchStartY = touchEndY; 
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <VanDiv style={{ transform: `translateX(${offset}px)` }}>
      <VanImage src="/VAN.webp" />
    </VanDiv>
  );
};

export default VanComponent;
