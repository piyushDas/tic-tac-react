import React, { useContext } from 'react'
import './tile.css'
import { AppContext } from '../../context'

const Tile = ({ tile, row, col, updateTileValue }) => {
    const {
        playerUp,
        setPlayerUp
    } = useContext(AppContext)

    const makeMove = () => {
        let newTile = tile.value
        if (playerUp === 1 && !tile.value) {
            newTile = 'X'
            setPlayerUp(2)
        } else if (playerUp === 2 && !tile.value) {
            newTile  =  'O'
            setPlayerUp(1)
        }
        updateTileValue(newTile, row, col)
    }

    const { value } = tile

    return (
        <div className="tile flex-and-center" onClick={makeMove}>
            {value}
        </div>
    )
}

export default Tile