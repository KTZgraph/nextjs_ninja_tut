export const getStaticPaths = async () => {
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
        paths, // nextjs produkcyjnei wygenereuje 10 stron dla kazdgeo uzytkownika z danych
        fallback: false // fallback pages 404 gdy user chce zobaczyc uzytkownika ktorego id nie istenije
    }
}

const Details = () => {
    return (
        <div>
            <h1>Details</h1>
        </div>
    )

}

export default Details;