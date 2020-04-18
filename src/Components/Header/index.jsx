import React from 'react'
import './header.css'

const Header = ({
  componentClassName
}) => {
  return (
    <header className="top-header flex-and-center flex-wrap" >
      <div className="page-title">
        Tic Tac Toe
      </div>
      <section className="">
        Win a friend or make a foe...
      </section>
    </header>
  )
}

export default Header