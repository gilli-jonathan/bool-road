import data from "../assets/data"

export default function Homepage() {

    console.log(data);


    return (

        <section className="homepage">
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-3">
                    <div className="col">
                        <div className="card"></div>

                    </div>

                </div>

            </div>
        </section>
    )
}