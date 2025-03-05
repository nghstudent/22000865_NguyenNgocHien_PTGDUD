import './Item.css'
export default function Item({text = 'show', image}){
    return(
        <div>
            <img height='200px' width='200px' src={image} alt="" />
            <br />
            <span style={{margin:10}}>{text}</span>
            <button>save</button>
        </div>
    )

}
