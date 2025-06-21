import React from "react";
import CharacterAnimationIdle from "../CharacterAnimationIdle/CharacterAnimationIdle";
import classes from "./Characters.module.scss";
import classNames from "classnames";
import useStore from "@src/store/store";
import MainCharacter from "@src/components/MainCharacter/MainCharacter";

const Characters = () => {
  const currentPage = useStore((state) => state.currentPage);

  const characters = [
    {
      id: 1,
      src: "/assets/img1.webp",
    },
    {
      id: 2,
      src: "/assets/img2.webp",
    },
    {
      id: 3,
      src: "/assets/img3.webp",
    },
    {
      id: 4,
      src: "/assets/img4.webp",
    },
    {
      id: 5,
      src: "/assets/img5.webp",
    },
    {
      id: 6,
      src: "/assets/img6.webp",
    },
    {
      id: 7,
      src: "/assets/img7.webp",
    },
    {
      id: 8,
      src: "/assets/img8.webp",
    },
    {
      id: 9,
      src: "/assets/img9.webp",
    },
    {
      id: 10,
      src: "/assets/img10.webp",
    },
    {
      id: 11,
      src: "/assets/img11.webp",
    },
    {
      id: 12,
      src: "/assets/img12.webp",
    },
    {
      id: 13,
      src: "/assets/img13.webp",
    },
    {
      id: 14,
      src: "/assets/img14.webp",
    },
    {
      id: 15,
      src: "/assets/img15.webp",
    },
    {
      id: 16,
      src: "/assets/img16.webp",
    },

    {
      id: 17,
      src: "/assets/img1.webp",
    },
    {
      id: 18,
      src: "/assets/img2.webp",
    },
    {
      id: 19,
      src: "/assets/img3.webp",
    },
    {
      id: 20,
      src: "/assets/img4.webp",
    },
    {
      id: 21,
      src: "/assets/img5.webp",
    },
    {
      id: 22,
      src: "/assets/img6.webp",
      customComp: MainCharacter,
    },
    {
      id: 23,
      src: "/assets/img7.webp",
    },
    {
      id: 24,
      src: "/assets/img8.webp",
    },
    {
      id: 25,
      src: "/assets/img9.webp",
    },
    {
      id: 26,
      src: "/assets/img10.webp",
    },
    {
      id: 27,
      src: "/assets/img11.webp",
    },
    {
      id: 28,
      src: "/assets/img12.webp",
    },
    {
      id: 29,
      src: "/assets/img13.webp",
    },
    {
      id: 30,
      src: "/assets/img14.webp",
    },
    {
      id: 31,
      src: "/assets/img15.webp",
    },
    {
      id: 32,
      src: "/assets/img16.webp",
    },
    {
      id: 33,
      src: "/assets/img1.webp",
    },
    {
      id: 34,
      src: "/assets/img2.webp",
    },
    {
      id: 35,
      src: "/assets/img3.webp",
    },
    {
      id: 36,
      src: "/assets/img4.webp",
    },
    {
      id: 37,
      src: "/assets/img5.webp",
    },
    {
      id: 38,
      src: "/assets/img6.webp",
    },
    {
      id: 39,
      src: "/assets/img7.webp",
    },
  ];

  const totalLines = characters.length / 5;

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen overflow-hidden pointer-events-none">
      <div className="w-[1024px] lg:w-[600px] aspect-[1/2] transition-all">
        <div className="relative">
          {characters.map((character, index) => {
            const currentLine = Math.floor(index / 5);

            const currentIndex = Math.floor(index % 5);
            const isEven = currentLine % 2 !== 0;

            var startDrawingPlaceLeft = -97.65;
            var spaceHorizontalBetween = 78.125;

            if (isEven) {
              startDrawingPlaceLeft += 30;
            }

            var startDrawingPlaceTop = -30;
            var spaceVerticalBetween = 19.5;

            const isFirstPage = currentPage === 0;
            const isSecondPage = currentPage === 1;
            const isLastPage = currentPage === 2;

            if (character?.customComp) {
              return (
                <div
                  key={character.id}
                  className="absolute w-full transform scale-[1.2]"
                  style={{
                    zIndex: index,
                  }}
                >
                  <CharacterAnimationIdle
                    delay={0.05 * currentLine}
                    stop={!isFirstPage}
                  >
                    <character.customComp
                      characterState={
                        isFirstPage ? "idle" :
                          isSecondPage ? "laydown" :
                            "walk"
                      }
                    />
                  </CharacterAnimationIdle>
                </div>
              );
            }

            return (
              <div
                key={character.id}
                className={classNames(
                  "absolute transform w-full transition-transform ",
                  classes.character
                )}
                style={{
                  "--tw-translate-x": `${startDrawingPlaceLeft +
                    spaceHorizontalBetween * currentIndex
                    }%`,
                  "--tw-translate-y": `${startDrawingPlaceTop + spaceVerticalBetween * currentLine
                    }%`,
                  zIndex: index,
                }}
              >
                <div
                  className="transition-transform duration-1000 transform "
                  style={{
                    "--tw-translate-y": isFirstPage ? "0vw" : "200vh",
                    "--tw-translate-x": isFirstPage ? "0vw" : "200vw",
                    transitionDelay: `${0.03 * (totalLines - currentLine)}s`,
                  }}
                >
                  <CharacterAnimationIdle
                    delay={0.05 * currentLine}
                    stop={!isFirstPage}
                  >
                    <img src={character.src} className="w-full" />
                  </CharacterAnimationIdle>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );



};

export default Characters;
