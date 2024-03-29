/**
 * @author Gregory Vincent
 * @date 6/18/2022
 * Image Gallery component for the homepage
 */

/**Picture Imports */
import ImageTwo from "./Images/ImageTwo.jpeg";
import ImageThree from "./Images/ImageThree.jpeg";
import ImageFour from "./Images/ImageFour.jpg";
import ImageFive from "./Images/ImageFive.jpg";
import ImageSix from "./Images/ImageSix.jpg";
import ImageSeven from "./Images/ImageSeven.jpeg";
import ImageEight from "./Images/ImageEight.jpeg";

/**React Imports */
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import "./imageGallery.css";

const pictureList = [
  //Each image is a js object for dynamic info
  {
    image: ImageFour,
    heading: "Image #2",
    Address: "2520 Watt Street",
  },
  {
    image: ImageTwo,
    heading: "Image #3",
    Address: "110 Jackson Ave",
  },
  {
    image: ImageThree,
    heading: "Image #3",
    Address: "101 Jackson Ave",
  },
  {
    image: ImageFive,
    heading: "Image #5",
    Address: "108 Jackson Avenue",
  },
  {
    image: ImageSix,
    heading: "Image #6",
    Address: "2520 Watt Street",
  },
  {
    image: ImageSeven,
    heading: "Image #7",
    Address: "2528 Watt Street",
  },
  {
    image: ImageEight,
    heading: "Image #8",
    Address: "2522 Watt Street",
  },
];

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const picListLength = pictureList.length - 1;
  //always start at first image on load
  useEffect(() => {
    setCurrentImage(0);
  }, []);

  //used for auto scroll feature
  const scroll = true;
  let picInterval;
  let interval = 6000;

  function auto() {
    //timer that keeps track of when to call the nextImg fn to change the picture
    picInterval = setInterval(NextImg, interval);
  }
 
  useEffect(() => {
    //automatically scroll to the next picture
    if (scroll) {
      auto();
    }
    //after each new picture is shown, reset the timer.
    return () => clearInterval(picInterval);
  }, [currentImage]);

  /**logic for handling the next and prev images*/
  const NextImg = () => {
    //check list position before incrementing
    setCurrentImage(currentImage === picListLength ? 0 : currentImage + 1);
  };
  const PrevImg = () => {
    setCurrentImage(currentImage - 1 === -1 ? picListLength : currentImage - 1);
  };

  return (
    <div className="img-main-container">
      <AiOutlineArrowLeft className="arrow" id="prev" onClick={PrevImg} />
      <AiOutlineArrowRight className="arrow" id="next" onClick={NextImg} />
      <div className="white-block"></div>
      {pictureList.map((picture, index) => {
        return (
          <div
            className={index === currentImage ? "picture current" : "picture"}
            key={index}
          >
            {index === currentImage && (
              <div>
                <img src={picture.image} alt="nice" />
                <div className="picture-info">
                  <h2>{picture.Address}</h2>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ImageGallery;
