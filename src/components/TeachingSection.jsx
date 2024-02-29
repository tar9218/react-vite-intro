import {ways} from "../data.js";
import WayToTeach from "./WayToTeach.jsx";

function TeachingSection() {
    return (
        <section>
            <h3>Our lessons</h3>
            <ul>
                {ways.map((way) => (
                    <WayToTeach key={way.title} title={way.title} description={way.description}/>
                ))}
            </ul>
        </section>
    )
}

export default TeachingSection;
