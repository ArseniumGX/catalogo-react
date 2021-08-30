import './styles.css'
import { v4 as uuid } from 'uuid'
import Btn from '../Btn'
import { useState } from 'react'


const Field = props => {
    return(
        <div>
            <label htmlFor={props.name}>{props.name}</label>
            <input
                type="text"
                value={props.value}
                id={props.name}
                name={props.name}
                onChange={props.onChange}
            />
        </div>
    )
}

const handleSubmit = e => {
    e.preventDefault()
    
}

function Form(props){
    const [titulo, setTitulo] = useState('')
    const [description, setDescripton] = useState('')
    const [link, setLink] = useState('')
    
    return(
        <form onSubmit={handleSubmit} className={props.modal ? 'show' : ''}>
            <Field name="Título" value={titulo} onChange={ e => setTitulo(e.target.value) }/>
            <Field name="Descrição" value={description} />
            <Field name="URL" value={link} onChange={ e => setLink(e.target.value) } />
            <Btn 
                type="submit" 
                name="Enviar" 
                disable={titulo && link ? false : true} 
                className={titulo && link ? 'isActive' : ''}
                onClick={() => {
                    const obj = {
                        id: uuid(),
                        title: titulo,
                        description,
                        link: link.replace('watch?v=', 'embed/')
                    }

                    return(obj)
                }} />
        </form>
    )
}

export default Form