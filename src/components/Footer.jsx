import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center text-center p-4 mt-20 bg-neutral-950 w-full">
      <p>
        &copy; {new Date().getFullYear()}
        <span>
          {" "}made by{" "}
          <a target="_blank" className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/hassaanvfx/">Hassaan Ali</a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
