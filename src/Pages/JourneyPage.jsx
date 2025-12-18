import { useParams } from "react-router-dom"
import data from "../assets/data"
import { useState } from "react"

export default function JourneyPage() {

    const [viaggio, setViaggio] = useState(data)
    const [search, setSearch] = useState('')
    const { id } = useParams()


    const current = viaggio.find(current => Number(id) === current.id)

    const filteredPartecipanti = current.partecipanti.filter(partecipante => {
        const fullName = `${partecipante.nome} ${partecipante.cognome}`.toLowerCase()
        return fullName.includes(search.toLowerCase())
    })

    return (
        <>
            <section className="journey">
                <div className="container">

                    <input
                        className="form-control my-3"
                        type="text"
                        placeholder="Cerca per nome e cognome..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className="row row-cols-2">

                        {filteredPartecipanti.map(user => (
                            <div key={user.id} className="col">
                                <div className="card mt-3">
                                    <h6>{user.nome}</h6>
                                    <h6>{user.cognome}</h6>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </>
    )
}