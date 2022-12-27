import Banner from "../components/Banner"
import Card from "../components/Cards"
import data from "../logement.json";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <Banner/>
            <div className="home-container">
            {
            data.map(logement =>{
                return(
                    <div className="home-container_link" key={logement.id} >
                            <Link className="home-container_link">
                            <Card  cover={logement.cover} title={logement.title}/>
                            </Link>
                    </div>
                )
            })
            }
            </div>

        </div>
    )
}


