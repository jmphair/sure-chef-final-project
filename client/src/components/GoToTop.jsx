import React from "react";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import "./GoToTop.css";

const GoToTop = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    window.addEventListener("resize", handleVisibleButton);
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
      window.removeEventListener("resize", handleVisibleButton);
    };
  }, []);

  return (
    <>
      <div
        className={showGoTop ? "goTop" : "goTopHidden"}
        onClick={handleScrollUp}
      >
        <FontAwesomeIcon icon={faAnglesUp} className="goTop_text" />
      </div>
    </>
  );
};

export default GoToTop;
