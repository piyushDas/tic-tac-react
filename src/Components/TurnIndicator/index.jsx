import React from 'react'

const TurnIndicator = ({ playerOne, playerTwo, playerNext }) => {
    return (
        <div className="flex-and-center">
            <div>
                Player 1: {playerOne}
            </div>
            <div>
                Player 2: {playerTwo}
            </div>
            <div>
                Up Next: {playerNext === 1 ? playerOne : playerTwo}
            </div>
        </div>
    )
}

export default TurnIndicator