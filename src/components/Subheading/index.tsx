import React from "react";
import { css } from "emotion";
import "./style.css";

type SubheadingProps = {
    text: string;
}

const Subheading: React.FC<SubheadingProps> = ({ text }) => (
    <h2 className={css`
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        text-transform: uppercase;
        padding-left: 0.3em;
    `}><span className="subheading-span">{text}</span></h2>
);

export default Subheading;