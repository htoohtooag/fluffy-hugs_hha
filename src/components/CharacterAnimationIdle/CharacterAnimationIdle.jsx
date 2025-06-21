import React from "react";
import classes from "./CharacterAnimationIdle.module.scss";
import classNames from "classnames";

const CharacterAnimationIdle = ({ children, delay, stop }) => {
  return (
    <div
      className={classNames(classes.transformAnimate, {
        [classes.stop]: stop,
      })}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default CharacterAnimationIdle;
