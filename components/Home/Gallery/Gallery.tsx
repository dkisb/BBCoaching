import React, { useEffect, useState } from 'react'
import { GalleryList } from '../../../constant/constants'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};

// Custom arrow components for Carousel
const CustomLeftArrow = ({ onClick, ...rest }: any) => (
  <button
    aria-label="Previous"
    className="react-multi-carousel-arrow react-multi-carousel-arrow--left"
    onClick={onClick}
    style={{
      display: rest.carouselState?.expanded ? 'none' : 'block',
      position: 'absolute',
      left: 0,
      top: 'calc(50% - 15px)',
      zIndex: 2,
      background: 'rgba(0,0,0,0.5)',
      border: 'none',
      borderRadius: '50%',
      width: 40,
      height: 40,
      color: 'white',
      fontSize: 24,
      cursor: 'pointer'
    }}
    tabIndex={rest.carouselState?.expanded ? -1 : 0}
  >
    &#8592;
  </button>
);

const CustomRightArrow = ({ onClick, ...rest }: any) => (
  <button
    aria-label="Next"
    className="react-multi-carousel-arrow react-multi-carousel-arrow--right"
    onClick={onClick}
    style={{
      display: rest.carouselState?.expanded ? 'none' : 'block',
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 15px)',
      zIndex: 2,
      background: 'rgba(0,0,0,0.5)',
      border: 'none',
      borderRadius: '50%',
      width: 40,
      height: 40,
      color: 'white',
      fontSize: 24,
      cursor: 'pointer'
    }}
    tabIndex={rest.carouselState?.expanded ? -1 : 0}
  >
    &#8594;
  </button>
);

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Check if window is defined (to avoid SSR issues)
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 764);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (expandedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIndex(prev =>
      prev !== null
        ? (prev - 1 + GalleryList.length) % GalleryList.length
        : 0
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIndex(prev =>
      prev !== null
        ? (prev + 1) % GalleryList.length
        : 0
    );
  };

  // Hide carousel arrows when expanded
  const customArrowProps = expandedIndex !== null
    ? { arrows: false, customLeftArrow: <></>, customRightArrow: <></> }
    : {
        arrows: true,
        customLeftArrow: <CustomLeftArrow carouselState={{ expanded: false }} />,
        customRightArrow: <CustomRightArrow carouselState={{ expanded: false }} />
      };

  return (
    <div id='gallery' className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>Gallery</h1>
      <div className='w-[90%] sm:w-[70%] mx-auto mt-20'>
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={!isMobile}
          autoPlaySpeed={2000}
          itemClass="px-4"
          arrows={customArrowProps.arrows}
          customLeftArrow={customArrowProps.customLeftArrow}
          customRightArrow={customArrowProps.customRightArrow}
        >
          {GalleryList.map((gallery, i) => (
            <div
              key={gallery.id}
              data-aos-delay={i * 100}
              className="flex justify-center items-center cursor-pointer"
              onClick={() => setExpandedIndex(i)}
            >
              <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]">
                <Image
                  src={gallery.image}
                  alt={"Gallery Image"}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded shadow-md transition-transform duration-200 hover:scale-105"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 350px, 400px"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {expandedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setExpandedIndex(null)}
        >
          <div
            className="relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition z-10"
              onClick={() => setExpandedIndex(null)}
              aria-label="Close"
              type="button"
            >
              &times;
            </button>
            {/* Prev Button */}
            <button
              className="absolute top-1/2 left-0 -translate-y-1/2 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-80 transition z-10"
              onClick={handlePrev}
              aria-label="Previous"
              type="button"
              style={{ left: '-3rem' }}
            >
              &#8592;
            </button>
            {/* Next Button */}
            <button
              className="absolute top-1/2 right-0 -translate-y-1/2 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-80 transition z-10"
              onClick={handleNext}
              aria-label="Next"
              type="button"
              style={{ right: '-3rem' }}
            >
              &#8594;
            </button>
            <div className="relative w-[90vw] max-w-[800px] h-[80vh] flex items-center justify-center">
              <Image
                src={GalleryList[expandedIndex].image}
                alt="Expanded Gallery Image"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery