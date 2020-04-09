import React from 'react';
import '../css/caption.css'

export default function CaptionImage({ image }) {
  return (
    <React.Fragment>
        <div className="img-wrapper">
          <div>
            <img alt="" src={image} className="image1 mt-3" />
          </div>
          
        </div>
    </React.Fragment>
  )
}
