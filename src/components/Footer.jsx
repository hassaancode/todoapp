import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center text-center p-4 mt-20 bg-black w-full">
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
