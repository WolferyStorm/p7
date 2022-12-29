import { useNavigate, useParams } from "react-router-dom";
import data from "../logement.json";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Star from "../components/Star";
import Tag from "../components/Tag";
import Host from "../components/Host";
import { useEffect } from "react";
import { useState } from "react";

export default function Fiche(){
    const params = useParams();
    const navigate = useNavigate();
    const [bean,setBean] = useState({});
    const [found,setFound] = useState(false);
    const [options,setOPtion] = useState({})

    useEffect(()=>{
        let findLogement = data.find((logement) => logement.id === params.id )

    if (findLogement !== undefined ){
        setBean(findLogement)
        let equip =findLogement.equipments.map((item, index) => (
			<li key={index} className="equip">
				{item}
			</li>
		));
        setOPtion(equip)
        setFound(true)
    }
    else{
        navigate("/error")
    }
    },[found])
    
    
    return(
        <>
        {found && (<section>
            <div className="carrousel-container">
                <Carrousel slides={bean.pictures}/>
            </div>
            <div className="info">
                <div  className="fiche-container">
                    <div>
                        <h1>{bean.title}</h1>
                        <h2>{bean.location}</h2>
                    </div>
                    <div className="fiche-tag">
                        {bean.tags.map((tag) => (
							<Tag key={tag} tag={tag} />
							))}
                    </div>
                </div>
                <div className="star-container">
                    <div>
                     <Host hostName={bean.host.name} hostPic={bean.host.picture}/>
                    </div>
                    <div>
                     <Star score={bean.rating}/>
                    </div>
                </div>
            </div>
            <div className="fiche-container_collapse">
                <Collapse aboutTitle="Description" aboutText={bean.description} />
                <Collapse aboutTitle="Équipements" aboutText={options}/>
            </div>
        </section>
    )}
        </>
)}