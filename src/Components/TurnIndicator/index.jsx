import React from 'react'
import './turnIndicator.css'

const TurnIndicator = ({ playerOne, playerTwo, playerNext }) => {
    return (
        <div className="flex-and-center flex-wrap display">
            <div className="player-names">
                Player 1: {playerOne}
            </div>
            <div className="player-names">
                Player 2: {playerTwo}
            </div>
            <div className="next-move">
                Up Next: {playerNext === 1 ? playerOne : playerTwo}
            </div>
        </div>
    )
}

export default TurnIndicator