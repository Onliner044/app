import React from 'react';

export const Verification = ({onClick, src}) => {
    return (
        <img onClick={onClick} src={src}/>
    );
}