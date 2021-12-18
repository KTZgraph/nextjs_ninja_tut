export const getStaticPaths = async () => {
    //mówi nextowi jak wiele strony statycznych musi zostać wygenerowanych bazujących na naszych dancyh
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            // paths: [{}, {}, {params: {id} }]
            params: {id: ninja.id.toString()}
        }
    })

    return {
        // paths: paths
        // dizeki paths nextjs wie ile strony musi wygenerować
        paths, // nextjs produkcyjnei wygenereuje 10 stron dla kazdgeo uzytkownika z danych
        fallback: false // fallback pages 404 gdy user chce zobaczyc uzytkownika ktorego id nie istenije
    }
}

// next ma id userów z paths wyżej i te dane przekazane sa przez parametr context - dane do fetcha danych dla pojedynczego usera
export const getStaticProps = async (context) => {
    //dla każdego obiektu z paths nextjs uruchomi ten fukcje i pobierze dane
    //potem wstawie te dane z fetch do komponentu
    // i wygeneruje template dla kazdej strony, ewentualnie wygeneruje stronę dla każddego indywidealnego elemntu

    // dane dla indywidualnego usera
    const id = context.params.id; // funkcja usuchamiana 10 razy bo tyle jest userów
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id) // one single item
    const data = await res.json()
    
    return {
        props: {ninja: data} // single object
    }
}


// ({destrukturyzacjaObiektu})
const Details = ({ninja}) => {
    return (
        <div>
            <h1>{ ninja.name }</h1>
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
            <p>{ ninja.address.city }</p>

        </div>
    )

}

export default Details;