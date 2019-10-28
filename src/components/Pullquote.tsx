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
            float: right;
            width: 300px;
            padding-bottom: 0.7em;
            text-align: right;
            line-height: 1.7;
            font-style: italic;

            ${mobile} {
                width: 100%;
            }
        `}>
            <div className={css`
                display: flex;
            `}>
                <h1 className={css`
                    display: inline;
                    font-size: 4em;
                `}>&ldquo;</h1>
                <h2>{props.text}&rdquo;</h2>
            </div>
            <p className={css`
                font-size: 1em;
            `}>- Professor Korf</p>
        </div>
    )
}