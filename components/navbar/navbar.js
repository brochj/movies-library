import Sidebar from './sidebar';
import RightNav from './right-nav';


export default function Navbar({}){
    return(
        <>
         {/* <div className="w-full h-14 flex justify-between items-center border-b-2">
             <p className="px-5 text-2xl">LOGO</p> */}
            <Sidebar />
            <RightNav/>
        {/* </div> */}
        </>
    )
}