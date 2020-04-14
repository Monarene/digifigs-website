import React from 'react';

import '../css/service.css';

export default function Service( {image, text1, text2, imgClass} ) {
  return (
    <React.Fragment>
        <img src={image} alt="" className={imgClass} />
        <h4 className="targetText1">{text1}</h4>
        <h5 className="targetText2">{text2}</h5>
    </React.Fragment>
  )
}
