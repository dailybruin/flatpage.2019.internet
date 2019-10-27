import React from 'react';

type HeaderProps = {
    title: string;
    authors: string;
}

const Header: React.FC<HeaderProps> = ({ title, authors }) => (
    <div style={{
        paddingTop: "4em",
        paddingLeft: "0.5em",
        paddingRight: "0.5em",
        minWidth: "90vw",
        textAlign: "center"
    }}>
        <h1 style={{
            fontSize: "3em"
        }}>{title}</h1>
        <p style={{
            textTransform: "uppercase"
        }}>By {authors}</p>
    </div>
);

export default Header;