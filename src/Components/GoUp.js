import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/ScrollUp.css";

function GoUp() {
    const [goUp, setGoUp] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const onPageScroll = () => {
            if (window.scrollY > 600) {
                setGoUp(true);
            } else {
                setGoUp(false);
            }
        };
        window.addEventListener("scroll", onPageScroll);

        return () => {
            window.removeEventListener("scroll", onPageScroll);
        };
    }, []);

    return (
        <div
            onClick={scrollToTop}
            className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
            <FontAwesomeIcon icon={faAngleUp} />
        </div>
    );
}

export default GoUp;
