import { CardBody, CardTitle } from "react-bootstrap";
import { useState } from "react";

export const PostBody = (props) => {

  const [getLikes, setLikes] = useState(props.likes);
  const [getClicked, setClicked] = useState(false);

  const handleChange = (event) => {

    const likes = event.target.value;
    setLikes(likes);

    if (getClicked)
    {
      setLikes(parseInt(likes) - 1);
    }
    else
    {
      setLikes(parseInt(likes) + 1);
    }

    setClicked(!getClicked);
    
  };

  return (

    <CardBody>

      {/* - - - - - </> NAME </> - - - - - */}
      <CardTitle>{props.name}</CardTitle>

      {/* - - - - - </> DESCRIPTION </> - - - - - */}
      <CardBody>{props.description}</CardBody>

      {/* - - - - - </> BUTTONS </> - - - - - */}
      <button onClick={handleChange} value={getLikes}>{getLikes} {getLikes == 1 ? 'like' : 'likes'}</button>

    </CardBody>

  );

};
