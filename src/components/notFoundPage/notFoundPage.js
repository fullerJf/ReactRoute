import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../../Assets/Images/PageNotFound.PNG";
class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <img src={PageNotFound} />
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
