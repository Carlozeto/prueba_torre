import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Tooltip } from "@nextui-org/react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <div className="flex items-center">
        <span className="text-lg font-bold">Favorite</span>
      </div>
      <div>
        <Tooltip showArrow={true} content="Favorites" position="top">
          <i>
            <AiOutlineHeart className="mr-2" size={24} />
          </i>
        </Tooltip>
      </div>
    </div>
  );
};

export default Navbar;
