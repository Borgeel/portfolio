import React from "react";
import { BsFacebook, BsGithub, BsMailbox } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.facebook.com/irfan.cesir/">
        <BsFacebook />
      </a>
      <a href="https://github.com/Borgeel">
        <BsGithub />
      </a>
      <a onClick={() => (window.location = "mailto:irfancesir93@gmail.com")}>
        <BsMailbox />
      </a>
    </div>
  );
};

export default SocialMedia;
