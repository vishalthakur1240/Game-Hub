import { Image } from '@chakra-ui/react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

interface Slide {
    id: number;
    image: string;
  }

interface Props {
    slides: Slide[] | undefined;
}
const ImageSlider = ({ slides }: Props) => {

  return (
    <Carousel showThumbs={false}>
      {slides && slides.map((slide) => 
         <Image src={slide.image} key={slide.id} />
      )}
    </Carousel>
  )
}

export default ImageSlider