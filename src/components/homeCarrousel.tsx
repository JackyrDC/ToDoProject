import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel autoplay={true}  className=" w-screen h-screen mt-4 ">
      <img
        src="../../img/1.png"
        className="w-fit h-fit"
      />
      <img
        src="../../img/2.png"
        className="w-fit h-fit"
      />
    </Carousel>
  );
}