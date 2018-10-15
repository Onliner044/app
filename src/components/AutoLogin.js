import React from 'react'

const AutoLogin = ({ src, onClick, type }) => {
  const alt = `Войти с помощью ${type}`
  return (
    <img
      className="autoVerification"
      onMouseEnter={onMouseEnter}
      onMouseOut={ononMouseOut}
      onClick={onClick}
      src={src}
      alt={alt}
    />
  )
}

const onMouseEnter = () => {
  document.documentElement.style.cursor = 'pointer'
}

const ononMouseOut = () => {
  document.documentElement.style.cursor = 'default'
}

export default AutoLogin
