import {NavLink} from "react-router-dom"
function Header(){
    return (
      <header>
        <div className="p-3 flex justify-between items-center h-16 shadow-md">
          <div className="text-xl font-bold flex items-center pl-3 ">
            <span>your</span>
            <span className="text-orange-600">logo</span>
            <span className="text-gray-400">*</span>
          </div>
          <div className="lg:w-1/5 space-x-2   lg:flex justify-between content-baseline hidden  ">
            <NavLink
              to="/"
              className={({isActive}) => 
                ` hover:text-orange-600 ${isActive ? "text-orange-600" : "text-black"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="About"
              className={({isActive}) => 
                ` hover:text-orange-600 ${isActive ? "text-orange-700" : "text-black"}`
              }
            >
             About 
            </NavLink>
            <NavLink
              to="Contact"
              className={({isActive}) => 
                ` hover:text-orange-600 ${isActive ? "text-orange-700" : "text-black"}`
              }
            >
             Contact</NavLink>
            <NavLink
              to="Github"
              className={({isActive}  ) => 
                ` hover:text-orange-600 ${isActive ? "text-orange-700" : "text-black"}`
              }
            >
             Github 
            </NavLink>
          </div>
          <div className="space-x-2 pr-9  ">
            <button className=" px-1 rounded-lg  ">Log in</button>
            <button className="text-white bg-orange-600 p-2 rounded-lg">
              Get started
            </button>
          </div>
        </div>
      </header>
    );
}

export default Header