import './styles.css'

const Title = props => <h3>{props.title}</h3>
const Description = props => <p>{props.description}</p>
const IFrame = props => <iframe src={props.link}></iframe>

function Card(props){
    return(
    <>
        {props.data.map((f, d) => (
            <div className="cards" key={f.id}>
                <Title title={f.title}/>
                <Description description={f.description} />
                <IFrame link={f.link} />
            </div>
        ))}
    </>
    )
}

export default Card