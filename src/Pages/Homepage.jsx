import data from "../assets/data"
import { useState } from "react"
import Card from "../components/Card";

export default function Homepage() {

    const [viaggi, setViaggi] = useState(data)
    console.log(viaggi);

    // const = `/${journey.id}`



    return (

        <section className=" homepage">
            <div className="container">


                <div className="row row-cols row-cols-lg-2">
                    {viaggi.map((journey => (

                        <div className="col p-4">
                            <Card key={journey.id} image={journey.immagine} title={journey.meta} inizio={journey.data_partenza} fine={journey.data_ritorno} link={`/${journey.id}`} />
                        </div>

                    )))}
                </div>

            </div>
        </section>
    )
}