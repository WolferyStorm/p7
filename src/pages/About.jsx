import Aboutbanner from "../components/Aboutbanner";
import Collapse from "../components/Collapse";
import about from "../about.json";

export default function About(){
    return(
        <section>
            <Aboutbanner/>
            <div className="about">
            {about.map((rule,index) => (
				<Collapse
					key={index}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
				/>
			))}
            </div>
        </section>
    )
}