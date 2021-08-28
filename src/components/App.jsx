import './App.css'
import Logo from './Logo'
import Title from './Title'
import Form from './Form'

function App(){
    return(
        <>
            <header>
                <Logo />
                <Title />
            </header>
            <section className="form">
                <Form />
            </section>
        </>
    )
}

export default App