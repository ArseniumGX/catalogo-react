import { useState } from 'react'
import './App.css'
import Logo from './Logo'
import Title from './Title'
import Form from './Form'
import Btn from './Btn'
import Card from './Card'

function App(){
    const [list, setList] = useState([
        {
            id: 1,
            title: "PLANTS VS ZOMBIES: UM POUCO DIFERENTE (ANIMAÇÃO)",
            description: "Resumo do que realmente é",
            link: "https://www.youtube.com/embed/Zbqr-kj4o-A"
        },
        {
            id: 2,
            title: "MINECRAFT: JORNADA ÁS CEGAS (ANIMAÇÃO)",
            description: "Vida de um jogador de minecraft",
            link: "https://www.youtube.com/embed/Ndia2PBiGok"
        },
        {
            id: 3,
            title: "VOCÊ ESTÁ BEM HYOGA? - CAVALOS DO ZOOZ (ANIMAÇÃO)",
            description: "Animação fiel a cena",
            link: "https://www.youtube.com/embed/w5jvRcTr0lM"
        },
        {
            id: 4,
            title: "ATIVIDADE ANORMAL - INVOCAÇÃO",
            description: "Mais uma obra de arte",
            link: "https://www.youtube.com/embed/x96UOVey52o"
        },
        {
            id: 5,
            title: "CONSELHO DO HE MAN: NÃO USE DR0GAS",
            description: "Sobre dorgas",
            link: "https://www.youtube.com/embed/dMTHJ20cvZg"
        },
        {
            id: 6,
            title: "MONGOL BALL Z",
            description: "Obra de arte do canal do Rabisco",
            link: "https://www.youtube.com/embed/T_HCjihcDsQ"
        },
        {
            id: 7,
            title: "MARTA!",
            description: "A santa do bairro",
            link: "https://www.youtube.com/embed/glymdDVbdUk"
        },
        {
            id: 8,
            title: "FREE FIRE FAMILY FRIENDLY",
            description: "Nunca joguei e nem tenho vontade",
            link: "https://www.youtube.com/embed/CcvRlNhG-q0"
        },
        {
            id: 9,
            title: "FORTNITE FAMILY FRIENDLY",
            description: "se hoje podemos jogar jogos sem nos tornarmos violentos, agradeça ao roblox",
            link: "https://www.youtube.com/embed/1ttmjCCGpm8"
        },
        {
            id: 10,
            title: "TIREI A BALA COM A TESTA! - Mr.President",
            description: "Maluco, tá cada vez mais difícil salvar o veio mas eu salvo! Segurança é o bicho, é mito vai vendo só!",
            link: "https://www.youtube.com/embed/_5Y9FfyYVu0"
        }
    ])

    const [ modal, setModal ] = useState(false)

    return(
        <>
            <header>
                <Logo />
                <Btn type="button" name={ modal ? 'Cancelar' : 'Adicionar' } className="isActive" onClick={ e => setModal( !modal ) } />
                <Title />
            </header>
            <section className="modal">
                <Form modal={modal} />
            </section>
            <section className="content">
                <Card data={list} />
            </section>
        </>
    )
}

export default App