import { useParams } from "react-router-dom";
import data from "../logement.json";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Star from "../components/Star";
import Tag from "../components/Tag";
import Host from "../components/Host";

export default function Fiche(){
    const params = useParams();
    console.log(params)
    const findLogement = data.find((logement) => logement.id === params.id )
    console.log(findLogement)
    return(
        <section>
            <div className="carrousel-container">
                <Carrousel slides={findLogement.pictures}/>
            </div>
            <div  className="fiche-container">
                <div>
                    <h1>{findLogement.title}</h1>
                    <h2>{findLogement.location}</h2>
                </div>
                <div>
                    <Host hostName={findLogement.host.name} hostPic={findLogement.host.picture}/>
                </div>
            </div>
            <div className="tag-star-container">
                <div className="fiche-tag">
                {findLogement.tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
                </div>
                <div>
                    <Star score={findLogement.rating}/>
                </div>
            </div>
            <div className="fiche-container_collapse">
                <Collapse aboutTitle="Description" aboutText={findLogement.description} />
                <Collapse aboutTitle="Équipements" aboutText={findLogement.equipments}/>
            </div>
        </section>
    )
}