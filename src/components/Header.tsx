import Nav from "./Nav"


const Header =()=>{
    return (
        <div className="flex items-center justify-between w-full bg-black">
            <div className="flex items-center">
                <img src="./logo.svg" alt="logo" className="w-20 h-20" />
            </div>
            <Nav />
        </div>
    )
}

export default Header