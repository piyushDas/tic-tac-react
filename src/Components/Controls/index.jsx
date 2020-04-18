import React, { useContext } from 'react'
import './controls.css'
import { AppContext } from '../../context'

const Controls = () => {
    
  const  {
      resetGame,
      restartGame
    } = useContext(AppContext)

  return (
    <>
      <section className="flex-and-center controls">
        <button className="button primary-button restart" onClick={restartGame}>Restart</button>
        <button className="button primary-button restart" onClick={resetGame}>New Game</button>
      </section>
    </>
  )
}

export default Controls