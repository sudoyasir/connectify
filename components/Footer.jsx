import { Heart, Link } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="text-white text-center font-normal">
      <div
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
        className="flex items-center justify-center gap-2"
      >
        Made with <Heart size={22} color="red" /> by{" "}
        <a href="https://yasirnawaz.me" target="_blank" className="font-medium">
          Yasir Nawaz
        </a>
      </div>
    </div>
  );
};

export default Footer;
