
const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between p-5 border-b">
                <div className="w-36 h-10">
                    <img src="../public/logo.jpg" alt="logo" />
                </div>
                <div>
                    <ul className="flex gap-7 pt-2 text-2xl">
                        <li className="hover:text-blue-500"><a href="/">Home</a></li>
                        <li className="hover:text-blue-500"><a href="/menu">Menu</a></li>
                        <li className="hover:text-blue-500"><a href="/about">About</a></li>
                        <li className="hover:text-blue-500"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="pr-6 pt-1 text-xl ml-3">
                    <button className="bg-blue-800 py-2 px-6 font-bold hover:bg-slate-800 rounded-xl">Login</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar