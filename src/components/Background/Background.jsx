import React from "react";
import classes from "./Background.module.scss";
import classNames from "classnames";
import useStore from "@src/store/store";

const Background = () => {
  const currentPage = useStore((state) => state.currentPage);
  const isPage2 = currentPage === 2;
  const showBubble = currentPage > 0;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Bubbles background */}
      <div
        className={classNames(
          classes.background,
          classes.bubbles,
          {
            [classes.horizontalScroll]: isPage2,
            [classes.verticalScroll]: !isPage2 && showBubble,
            [classes.visible]: showBubble,
          }
        )}
      />

      {/* Animals background for page 2 */}
      <div
        className={classNames(
          classes.background,
          classes.animals,
          {
            [classes.visible]: isPage2,
          }
        )}
      />

      {/* Paper Clip & Neko */}
      <div className="relative h-full">
        <div
          className={classNames("absolute top-0 right-0", classes.paper, {
            [classes.active]: isPage2,
          })}
        >
          <div className="w-[100px] md:w-[200px] aspect-[2/3] transform absolute top-0 right-0">
            <div
              className="bg-[#ffe1aa] w-full h-full"
              style={{
                transform: "translate(77%, -39%) rotate(-45deg)",
              }}
            ></div>
          </div>
          <div className="w-[100px] md:w-[200px] aspect-[2/3] transform -rotate-45 translate-x-0 translate-y-0 overflow-hidden">
            <div
              className="relative w-full h-full bg-white"
              style={{
                transform: "translate(85%, -23.4%) rotate(34deg)",
              }}
            ></div>
          </div>
          <img
            src="/assets/burasagari.webp"
            className={classNames(
              "absolute",
              {
                "top-0 right-0": !isPage2,
                "top-[-10px] left-[-10px]": isPage2,
              },
              classes.neko
            )}
            alt="Neko"
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
