import './style.css'
import logoImg from '../../assets/images/bugtube.svg'

function Logo(){
    return(
        <div className="logo">
            <img src={logoImg} alt="Logo Bugflix"/>
            <h1>BugTube</h1>
        </div>
    )
}

export default Logo
