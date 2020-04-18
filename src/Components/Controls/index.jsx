import React, { useContext } from 'react'
import './controls.css'
import { AppContext } from '../../context'

const Controls = () => {
    
  const  {
      resetGame
    } = useContext(AppContext)

  return (
    <>
      <section className="flex-and-center">
        <button className="button primary-button" onClick={resetGame}>Restart</button>
      </section>
    </>
  )
}

export default Controls