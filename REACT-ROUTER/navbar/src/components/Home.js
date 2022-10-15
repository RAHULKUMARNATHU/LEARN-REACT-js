import { Link } from "react-router-dom";

function Home(){
    return (<>
            <h2>
                Home Page

            </h2>
            <p>This is Home Page of our awesome App</p>
            <p>And here we are learning about Router</p>
            <Link to="/about">Go to About</Link>
        </>)
}

export default Home;


