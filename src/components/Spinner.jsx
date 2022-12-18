import React from "react";
import '../assests/css/Spinner.css'


const Spinner = () => {
  return (
    <div>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
