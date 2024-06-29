import React from "react";

const Footer = () => {
  return (
    <div className="flex absolute w-full bottom-0 items-center justify-center text-center p-4 bg-black">
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
