import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "../assets/cricket.png";
import Image1 from "../assets/football.jpg";
import Image2 from "../assets/basketball.jpg";

function Card() {
  return (
    <>
      {/* {user.map((user) => (
        <div
          key={user.id}
          className="m-5 w-64 h-64 border-black border-2 inline-block rounded-xl shadow-md shadow-emerald-500 hover:shadow-lg hover:shadow-red-600 hover:cursor-pointer align-middle"
        >
          <p className="text-center p-2">Name: {user.name}</p>
          <p className="text-center p-2">UserName: {user.userName}</p>
          <p className="text-center p-2">Age: {user.age}</p>
        </div>
      ))} */}

      <Carousel variant="dark">
        <Carousel.Item interval={2000}>
          <img className=" w-full h-1/4" src={Image} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className=" w-full h-1/4" src={Image1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className=" w-full h-1/4" src={Image2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Card;
