import React from "react";
import { css } from "emotion";
// @ts-ignore
import keyboard from "../images/keyboard.svg";
// @ts-ignore
import mouse from "../images/mouse.svg";
import { mobile, notMobile } from "../utils/mediaQueries";

const KBMouse = () => (
    <div className={css`
        display: flex;
        justify-content: center;
        transform: translate(15%, 0px);

        ${notMobile} {
            margin-top: -2em;
        }

        ${mobile} {
            flex-direction: column;
        }
    `}>
        <img src={keyboard} className={css`
            transform: translate(-20%, 0px);

            ${mobile} {
                transform: translate(-60%, 0px) scale(0.8, 0.8);
            }
        `} />
        <img src={mouse} className={css`
            transform: translate(0px, -25%);

            ${mobile} {
                transform: translate(20%, -50%);
            }
        `} />
    </div>
);

export default KBMouse;