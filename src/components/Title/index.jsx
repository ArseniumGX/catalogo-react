import './styles.css'

function SubTitle(props){
    return(
        <h2>{props.sub}</h2>
    )
}

function Title(){
    return(
        <div className="title">
            <h1>Blue EdTech</h1>
            <SubTitle sub='Módulo Fullstack' />
        </div>
    )
}

export default Title