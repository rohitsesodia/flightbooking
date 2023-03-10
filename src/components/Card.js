import React from 'react'

export default function Card({title, img}) {
  return (
    <div className='col-sm-4'>
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <b>1</b>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
  )
}
