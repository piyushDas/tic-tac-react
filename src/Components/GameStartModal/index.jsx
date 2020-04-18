import React, { useContext, useState } from 'react'
import { AppContext } from '../../context'
import './gameStartModal.css'

const GameStartModal = () => {
    const {
        updatePlayerOne,
        updatePlayerTwo,
        updateShowModal,
        updateGridSize
    } = useContext(AppContext)

    const [playerOneName, updatePlayerOneName] = useState('')
    const [playerTwoName, updatePlayerTwoName] = useState('')
    const [grid, updateGrid] = useState('')

    const setPlayerName = () => {
        if (playerOneName &&
            playerTwoName &&
            grid &&
            typeof Number.parseInt(grid) === 'number') {
            updatePlayerOne(playerOneName)
            updatePlayerTwo(playerTwoName)
            updateShowModal(false)
            updateGridSize(Number.parseInt(grid))
        }
    }

    return (
        <>
            <div className="flex-and-center">
                <div className="inputs">
                    <label htmlFor=""> Player 1:  </label>
                    <input type="text" value={playerOneName} onChange={e => updatePlayerOneName(e.currentTarget.value)} />
                </div>
                
                <div className="inputs">
                    <label htmlFor=""> Player 2:  </label>
                    <input type="text" value={playerTwoName} onChange={e => updatePlayerTwoName(e.currentTarget.value)} />
                </div>
            
                <div className="inputs">
                    <label htmlFor=""> Grid size:  </label>
                    <input type="text" value={grid} onChange={e => updateGrid(e.currentTarget.value)} />
                </div>
            </div>
            <div>
                <button className="button button-primary" onClick={setPlayerName}>
                    Play
                </button>
            </div>
        </>
    )
}

export default GameStartModal