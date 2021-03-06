import React, { useState } from "react";
import { css } from "emotion";
import colors from "../../utils/colors";
import events from "./events.json";
import "./style.css";

const NullText = "Scroll and click on a year below to see what happened with the Internet that year."

const Timeline = () => {
    const [description, setDescription] = useState("");

    return (
        <>
            <p className={css`
                background-color: ${colors.blue.med};
                padding: 1em;
                max-width: 500px;
                text-align: center;
            `}>{description == "" ? NullText : description}</p>
            <div className={css`
            width: 100vw;
            height: 100px;
            background-color: ${colors.blue.light};
            border-top: 3px solid white;
            border-bottom: 3px solid white;
            display: flex;
            overflow-x: scroll;
        `}>
                {events.map((e, i) => (
                    <div key={e.year} className={`timeline-item ${e.year == "1900s" && "timeline-item-old"} ${e.year == "1940s" && "timeline-1940s"}`}>
                        <div className={css`
                        background-color: ${i % 2 == 0 ? "white" : colors.bg};
                        color: ${i % 2 == 0 ? colors.bg : "white"};
                        border-radius: 10%;
                        z-index: 2;
                        font-size: 2em;
                        font-weight: 900;
                        padding: 0px 0.5em;
                        cursor: pointer;
                    `} onClick={() => setDescription(e.description)}>
                            {e.year}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Timeline;