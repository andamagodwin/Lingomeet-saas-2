import { navMenu } from "../../constants/index";

const Nav = () => {
  return (
    <div className="w-1/2 flex justify-evenly items-center">
      {navMenu.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="text-white hover:text-green-400 transition duration-300 font-medium"
        >
          {item.name}
        </a>
      ))}
      
    </div>
  );
};

export default Nav;