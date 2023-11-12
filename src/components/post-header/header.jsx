import { CardHeader, CardImg } from "react-bootstrap";
import "./header.css";

export const PostHeader = (props) => {

  return (

    <CardHeader>

      {/* - - - - - </> PHOTO </> - - - - - */}
      <CardImg src={props.photo} className="post-avatar"></CardImg>

      {/* - - - - - </> NAME </> - - - - - */}
      <strong>{props.name}</strong>

    </CardHeader>

  );

};