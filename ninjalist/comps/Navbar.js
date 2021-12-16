// reużywalny komponent - wazna sciezka

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            {/*brak href  */}
            <a>Home</a>
            <a>About</a>
            <a>Ninja Listing</a>
        </nav>
     );
}
 
export default Navbar;