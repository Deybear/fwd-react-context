import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './picture.css';

export const PostPicture = (props) =>
{

  return (

    <Carousel>
      
      {props.pictures.map((item, index) => (

        <Carousel.Item key={index}>

          {/* - - - - - </> IMAGE </> - - - - - */}
          <img src={item} className='carousel-img'/>

        </Carousel.Item>

      ))}

    </Carousel>

  );

};
