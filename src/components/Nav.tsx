import {navMenu} from '../../constants/index'


const Nav = ()=>{
    return (
        <div className="w-1/2 flex justify-evenly">
            {navMenu.map((item,index)=>(
                <div key={index}>{item.name}</div>
            ))}
        </div>
    )
}

export default Nav;