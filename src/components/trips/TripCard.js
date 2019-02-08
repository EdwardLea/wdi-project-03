import React from 'react'
import { Link } from 'react-router-dom'

const TripCard = ({ _id, name, image, category, location }) => {
  return (
    <div className="card">
      <Link to={`/trips/${_id}`}>
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">{name}</h4>
          </div>
          {image && <div className="card-image">
            <figure className="image">
              <img src={image} alt={name} />
            </figure>
            <div className="content">
              <p><strong>Category: </strong> {category}</p>
              <p><strong>Location: </strong> {location}</p>
            </div>
          </div>}
        </div>
      </Link>
    </div>
  )
}

export default TripCard