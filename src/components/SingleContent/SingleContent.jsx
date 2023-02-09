import React from 'react'
import {img_300, unavailable} from "../../config/config"
import "./SingleContent.css"
const SingleContent = ({id,poster,title,date,media_type,vote_average}) => {
  return (
    <div className='media'>
      <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <p className="title">{title}</p>
      <div className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <div className="subTitle">{date}</div>
      </div>
    </div>
  );
}

export default SingleContent