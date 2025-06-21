import React from "react";
import styles from "./ShakyKanjiBlock.module.scss";

const ShakyKanjiBlock = ({ lines }) => {
  return (
    <div className={styles.block}>
      {lines.map((line, i) => (
        <p key={i} className={styles.line}>
          {Array.from(line).map((char, j) => (
            <span
              key={j}
              className={styles.char}
              style={{
                animationDelay: `${(j % 10) * 0.15}s`,
              }}
            >
              {char}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default ShakyKanjiBlock;
