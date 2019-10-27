import React from 'react'
import { css } from 'emotion';
import { mobile } from '../utils/mediaQueries';

export interface PQProps {
    text: string
}

export default function CustomPullQuote(props: PQProps) {
    return (
        <div className={css`
            display: inline;
            font-size: 1.2em;
            float: right;
            width: 300px;
            padding-bottom: 0.8em;
            text-align: right;
            line-height: 1.7;
            font-style: italic;

            ${mobile} {
                width: 100%;
            }
        `}>
            <span>{props.text}</span>
            <p className={css`
                font-size: 0.8em;
            `}>- Professor Korf</p>
        </div>
    )
}