import React from 'react'

const Banner = ({ img, title, description }) => {
  return (
    <div className="banner row">
      <div className="banner__text">
        <div className="banner__title">{title}</div>
        <div className="banner__description">{description}</div>
      </div>
      <img src={img} alt="banner-img" className="banner__img" />
    </div>
  )
}

export default Banner
