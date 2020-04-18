import React, { useState, createContext } from 'react'

export const AppContext = createContext({
  autoSelectedTile: {}
})

export const AppState = ({ children }) => {
  /*
    States used in the context
  */

  const [showModal, updateShowModal] = useState(true)
  const [playerOne, updatePlayerOne] = useState('')
  const [playerTwo, updatePlayerTwo] = useState('')
  const [gridSize, updateGridSize] = useState(3)
  // Assumption that 1 indicates player 1 and 2 indicates player 2
  const [playerUp, setPlayerUp] = useState(1)

  const resetGame = () => {
    updateShowModal(true)
    updateGridSize('')
    updatePlayerTwo('')
    updatePlayerOne('')
    setPlayerUp(1)
    setGameOver(false)
  }

  const restartGame = () => {
    setPlayerUp(1)
    updatePlayerTwo(playerOne)
    updatePlayerOne(playerTwo)
    setGameOver(false)
    startGame(gridSize)
  }

  const [tileArr, updateTileArr] = useState([])
  const [gameOver, setGameOver] = useState(false)

  const startGame = size => {
    let eachRow = []
    for (let index = 0; index < size; index++) {
        eachRow.push({
            value: ''
        })
    }
    let startArr = []
    for (let index = 0; index < size; index++) {
      startArr.push([...eachRow])
    }
    updateTileArr([...startArr])
  }

  return (
    <AppContext.Provider
      value={{
        showModal,
        updateShowModal,
        playerTwo,
        updatePlayerTwo,
        playerOne,
        updatePlayerOne,
        gridSize,
        updateGridSize,
        playerUp,
        setPlayerUp,
        resetGame,
        tileArr,
        updateTileArr,
        startGame,
        gameOver,
        setGameOver,
        restartGame
      }}
    >
      {children}
    </AppContext.Provider>
  )
}