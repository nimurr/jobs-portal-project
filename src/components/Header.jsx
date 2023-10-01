import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from './../AuthProvider/Authprovider';

export default function Header() {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                console.log('user LogOut successFully !')
            })
            .catch(error => {
                console.log(error)
            })
        console.log('logout')
    }
    

    const navgation = <>

        <li><NavLink className='px-4 font-semibold py-2' to='/'>Home</NavLink></li>


        {
            !user ?
                <>
                    <li><NavLink className='px-4 font-semibold py-2' to='/login'>Login</NavLink></li>
                    <li><NavLink className='px-4 font-semibold py-2' to='/register'>Register</NavLink></li>
                </>
                :
                <>
                    <li><NavLink className='px-4 font-semibold py-2' to='/jobs'>Selected Jobs</NavLink></li>
                    <li><NavLink className='px-4 font-semibold py-2' to='/dashboard'>Dashboard</NavLink></li>
                    <li><img className="w-10 h-10 rounded-full" src="https://i.ibb.co/Db3hWb3/1686378915854-2-1.png" alt="" /></li>
                    <li className="bg-red-500 text-white py-1 px-2 cursor-pointer rounded flex items-center gap-2" onClick={handleLogout}>
                        Logout <i className='bx bx-right-arrow-alt text-xl'></i></li>
                </>
        }


    </>
    return (
        <div className="flex items-center justify-between py-5 px-20 bg-blue-100 ">
            <h2 className="text-4xl font-semibold text-blue-600">
                <Link to='/'><img className="w-32 drop-shadow-xl drop-shadow--blue-500" src="https://i.ibb.co/2htnrG2/Screenshot-1-removebg-preview.png" alt="" /></Link>
            </h2>
            <ul className="flex gap-2 items-center">
                {navgation}

            </ul>
        </div>
    )
}
