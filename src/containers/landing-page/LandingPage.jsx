import React, { useEffect, useState } from "react";
import unsplash from "../../apis/unsplash";
import FullPageLoading from "../../components/loading/FullPageLoading";
import Slider from "../../components/slider/Slider";

const LandingPage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    unsplash.get(`/search/photos`).then((response) => {
      console.log(response.data);
      setImages(response.data.results);
    });
  }, []);
  if (!images) return <FullPageLoading />;
  return <Slider images={images} />;
};

export default LandingPage;
