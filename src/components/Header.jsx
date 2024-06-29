import React from "react";

const Header = (props) => {
  const title = props.title;
  return (
    <div>
      <h1 className="p-2 mt-10 text-center text-4xl font-bold  text-white ">
        {title}
      </h1>
    </div>
  );
};

export default Header;
