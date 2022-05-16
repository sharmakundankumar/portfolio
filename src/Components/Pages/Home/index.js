import React from "react";
import Button from "../../Buttons/Resume/index";
import "./App.css";
const index = () => {
  return (
    <>
      <div id="fs" className="container">
        <div className="first-container">
          <h1><u> Gilded Sharma </u></h1>
          <Button />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laboriosam ad illum corporis suscipit, pariatur molestiae, eligendi iste veniam quo consequatur earum iusto accusamus nobis, qui recusandae. Esse, reiciendis architecto!</p>
        </div>
        <div className="left-container">
          <img src="/Images/logo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default index;
