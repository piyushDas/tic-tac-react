import React, { useContext } from 'react'
import Gameboard from '../../Components/Gameboard'
import GameStartModal from '../../Components/GameStartModal'
import TurnIndicator from '../../Components/TurnIndicator'
import Modal from '../../Components/Modal'
import Header from '../../Components/Header'
import { AppContext } from '../../context'

const AppShell = () => {
    const {
        showModal,
        updateShowModal,
        updateGridSize,
        gridSize,
        playerUp,
        playerOne,
        playerTwo
    } = useContext(AppContext)

    const closeModal = () => {
        updateShowModal(false)
        updateGridSize(Number.parseInt(gridSize))
    }

    return (
        <>  
            <Header />
            <TurnIndicator playerOne={playerOne} playerTwo={playerTwo} playerNext={playerUp} />
            <Gameboard />
            {showModal && <Modal
                title="Input player names"
                modalContent={<GameStartModal />}
                closeHandler={closeModal}
            />}
        </>
    )
}

export default AppShell