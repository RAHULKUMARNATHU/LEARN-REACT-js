import { Link } from "react-router-dom";

function About(){
    return (<>
        <h2>
            About Page

        </h2>
        <p>This is About Page of our awesome App</p>
        <p>And here we are learning about Router</p>
            <Link to="/">Go to Home</Link>
    </>)
}

export default About;


