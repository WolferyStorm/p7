export default function Cards({cover,title}){
    return(
        <article className="card">
            <img className="card_img" src ={cover} alt="appartement"/>
            
                <p className="card_div">{title}</p>
        </article>
    )
}