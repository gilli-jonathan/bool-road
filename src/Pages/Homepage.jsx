import data from "../assets/data"
import { useState } from "react"
import { Link } from "react-router-dom";

export default function Homepage() {

    const [viaggi, setViaggi] = useState(data)
    console.log(viaggi);





    return (

        <section className="homepage">
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-3">
                    {viaggi.map((journey => (

                        <div className="col" key={journey.id} >
                            <Link to={`/${journey.id}`} >

                                <div className="card" >
                                    <h2>{journey.meta}</h2>
                                    <h2>{journey.data_partenza}</h2>
                                    <h2>{journey.data_ritorno}</h2>
                                </div>
                            </Link>
                        </div>
                    )))

                    }
                </div>

            </div>
        </section>
    )
}