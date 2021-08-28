import './styles.css'

function Button(props){
    return(
        <button 
            type={props.type}
            disabled={props.disable}
            className={props.className}
            onClick={props.onClick}
        >
                {props.name}
        </button>
    )
}

export default Button