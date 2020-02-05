import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Tile.styles.css'
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom'


function Tile(props) {
  
    return (
      <div className='tile-container'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ `${props.boardgame.image_url}`}  />
          <Card.Body>
            <Card.Title>{props.boardgame.name}</Card.Title>
            <Card.Text><FaThumbsUp /> {props.boardgame.num_user_ratings}</Card.Text>
            <Button variant="primary"><Link to='/GameDetails'>Go somewhere</Link></Button>
          </Card.Body>
        </Card>
        
      </div>
    )
}

export default Tile

