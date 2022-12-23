import React from "react";
import { BsFacebook, BsGithub, BsMailbox } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsFacebook />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsMailbox />
      </div>
    </div>
  );
};

export default SocialMedia;
