import React, { useContext, useState, useEffect } from 'react'
import Controls from '../Controls'
import Tile from '../Tile'
import './gameboard.css'
import { AppContext } from '../../context'

const Gameboard = () => {
    const {
        startGame,
        tileArr,
        gridSize,
        updateTileArr,
        gameOver,
        setGameOver,
        playerOne,
        playerTwo
    } = useContext(AppContext)
    
    const [winner, setWinner] = useState('')
    useEffect(() => {
        startGame(gridSize)
    }, [gridSize])

    const updateTileValue = (val, row, col) => {
        const updatedArr = [...tileArr]
        updatedArr[row][col] = {
            value: val
        }
        verifyMove(updatedArr, val, row, col)
        updateTileArr(updatedArr)
    }

    const verifyMove = (arr, val, row, col) => {
        // for straightPaths
        let verticalCount = 0
        for (let index = 0; index < gridSize; index++) {
            if (arr[index][col].value === val) {
                verticalCount += 1
            }
        }

        let horizontalCount = 0
        for (let index = 0; index < gridSize; index++) {
            if (arr[row][index].value === val) {
                horizontalCount += 1
            }
        }

        let leftDiagonalCount = 0
        if (row === col) {
            for (let index = 0; index < gridSize; index++) {
                if (arr[index][index].value === val) {
                    leftDiagonalCount += 1
                }
            }
        }

        let rightDiagonalCount = 0
        if (gridSize - row - 1 === col) {
            for (let index = 0; index < gridSize; index++) {
                if (arr[index][gridSize - 1 - index].value === val) {
                    rightDiagonalCount += 1
                }
            }
        }

        if (verticalCount === gridSize ||
            horizontalCount === gridSize ||
            leftDiagonalCount === gridSize ||
            rightDiagonalCount === gridSize) {
                setGameOver(true)
                setWinner(val === 'X' ? playerOne : playerTwo)
        }
    }

    return (
        <>
            <div className="game-area">
                <div className={`overlay ${gameOver ? '': 'open'}`}>
                    <div>
                        {winner} has won the game
                    </div>
                </div>
                {
                    tileArr.map((tileRow, row) => (
                    <div className="flex-and-center" key={`index_${row}`}>
                        {
                            tileRow.map((eachTile, col) => (
                                <Tile
                                    key={`index_${row}_${col}`}
                                    tile={eachTile}
                                    row={row}
                                    col={col}
                                    updateTileValue={updateTileValue}
                                />
                            ))
                        }
                    </div>  
                    ))
                }
            </div>
            <Controls />
        </>
    )
}

export default Gameboard