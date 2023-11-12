import { Card, Container } from "react-bootstrap";
import { PostHeader } from "../post-header/header";
import { PostBody } from "../post-info/body";
import { PostPicture } from "../post-picture/picture";
import { useFeed } from "../../context/FeedContext";
import { useState } from "react";

export const Post = () => {

  const feed = useFeed();

  return (

    <Container className="post">

      {feed.map((item, index) => (

        <Card key={index}>

          {/* - - - - - </> HEADER </> - - - - - */}
          <PostHeader name={item.feed.feedname} photo={item.feed.thumbnail}/>

          {/* - - - - - </> PHOTOS </> - - - - - */}
          <PostPicture pictures={item.pictures}/>

          {/* - - - - - </> BODY </> - - - - - */}
          <PostBody name={item.feed.feedname} likes={item.likes} description={item.description}/>

        </Card>
        
      ))}

    </Container>

  );

}