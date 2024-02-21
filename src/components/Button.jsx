import React from "react";

const Button = ({ styles, buttonText, buttonLink }) => (
  <a href={buttonLink}><button  type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient hover:bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {buttonText}
  </button></a>
);

export default Button;
