import { useState } from 'react'
import './App.css'
import Logo from './Logo'
import Title from './Title'
import Form from './Form'
import Btn from './Btn'

function App(){
    const [ modal, setModal ] = useState(false)
    return(
        <>
            <header>
                <Logo />
                <Btn type="button" name={ modal ? 'Cancelar' : 'Adicionar' } className="isActive" onClick={ e => setModal( !modal ) } />
                <Title />
            </header>
            <section className="form">
                <Form modal={modal} />
            </section>
        </>
    )
}

export default App