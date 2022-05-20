import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/prakat-neupane-28aa37150/"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://github.com/PrakatNeupane">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
