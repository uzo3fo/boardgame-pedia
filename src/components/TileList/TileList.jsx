import React from 'react'
import Tile from '../Tiles/Tile';
import './TileList.styles.css'

function TileList(props) {
    console.log(props)
    return (
        <div className='tile-list'>
            {props.boardgames.map(boardgame =>(
        <Tile key={boardgame.id} boardgame={boardgame} />
    ))}
        </div>  
    )
}

export default TileList


