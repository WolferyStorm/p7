import { useState } from "react";

export default function Carrousel ({slides}){
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
	
	
    return(
        <div className="carrousel">
            <i className="fa-sharp fa-solid fa-chevron-left arrow-left" onClick={previousSlide}></i>
            <i className="fa-sharp fa-solid fa-chevron-right arrow-right" onClick={nextSlide}></i>
            <img src={slides[current]} alt="Appartement à louer" />
        </div>
    )
}