import Link from 'next/link';
import styles from '../../styles/Ninja.module.css'; 

export const getStaticProps = async () => {
    // zostanie wykonana przed wyrenderowaniem templatu do przegladrki
    // tylko do danych po stronie serwera - nie mozna funcku ktore sie wykonuja po stronie przegladrki
    const rest = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await rest.json();

    return {
        props: {ninjas: data} //dane dostepne jako props w komponent template
    }
}

const Ninjas = ({ninjas}) => {
    return ( 
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map( ninja => (
                <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                  <a className={styles.single}>
                    <h3>{ninja.name}</h3>
                  </a>
                    
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;