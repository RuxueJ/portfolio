"use client";

import { useSwiper } from "swiper/react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
  iconsStyles,
  currentIndex,
  totalImages,
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      {/* disable prev button if currentIndex is 0 */}
      {currentIndex > 0 && (
        <button
          className={`${btnStyles} absolute left-4 bottom-[calc(50%-22px)] transform -translate-y-1/2`}
          onClick={() => swiper.slidePrev()}
        >
          <PiCaretLeftBold className={iconsStyles} />
        </button>
      )}

      {/* disable next button if currentIndex is the last image */}
      {currentIndex < totalImages - 1 && (
        <button
          className={`${btnStyles} absolute right-4 bottom-[calc(50%-22px)] transform -translate-y-1/2`}
          onClick={() => swiper.slideNext()}
        >
          <PiCaretRightBold className={iconsStyles} />
        </button>
      )}
    </div>
  );
};

export default WorkSliderBtns;
