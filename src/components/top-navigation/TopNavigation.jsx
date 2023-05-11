import { BsSearch } from "react-icons/bs";
import './TopNavigation.css'


const TopNavigation = () => {
  return (
    <>
        <div className="topnav-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <div className="topnav-search">
                <form>
                    <input type='text' />
                    <button><BsSearch /></button>
                </form>
            </div>
        </div>
    </>
  )
}

export default TopNavigation