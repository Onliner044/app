import React from 'react';

const AutoLogin = ({src, onClick, type}) => {
    const alt = `Войти с помощью ${type}`;
    
    return (
        <img className="autoVerification"
            onClick={onClick}
            src={src} 
            alt={alt}
        />
    )
}

export default AutoLogin;