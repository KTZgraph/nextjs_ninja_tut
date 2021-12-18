import Link from 'next/link';
import Image from 'next/image';
// reużywalny komponent - wazna sciezka

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
              <Image src="/logo.png" width={128} height={77}/>
            </div>
            {/*brak href  */}
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;