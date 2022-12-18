import React from "react";
import '../assests/css/Spinner.css'


const Spinner = () => {
  return (
    <div>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
