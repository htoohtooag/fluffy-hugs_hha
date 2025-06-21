import React from "react";
import classes from "./MainCharacter.module.scss";
import classNames from "classnames";

const MainCharacter = ({ characterState }) => {

  return (
    <div
      className={classNames(classes.mainCharacter, {
        [classes.laydown]: characterState === "laydown",
        [classes.walk]: characterState === "walk",
      })}
    >
      <div className="absolute top-0 left-0">
        <img src="/assets/human.webp" />

      </div>

    </div>
  );
};

export default MainCharacter;
