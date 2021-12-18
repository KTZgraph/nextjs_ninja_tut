// nazwa pliku WAZNA
import Link from 'next/link';
import { useEffect } from 'react';
import {  useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    
    useEffect(() => {
        // trzy sekundy i potem przekirowanie
        setTimeout(() => {
            // router.go(-1) //back to history
            // +1 forward
            router.push('/')
        }, 3000)
    },[])
    
    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFound;