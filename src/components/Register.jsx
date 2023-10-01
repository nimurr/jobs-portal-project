import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


export default function Register() {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        // const text = e.target.text.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.checked.checked;
        if(password.length < 6){
            toast.error(" Password At last 6 carector")
            return ;
        }
        if (!checkbox) {
            alert('please Check mark down')
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Successfully Register!')

            })
            .catch(error => {
                toast.error("Your have already register !")
            })
            e.target.email.value = '';
            e.target.password.value= '';
            e.target.text.value = '';
        // console.log(email, password)
    }

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form onSubmit={handleRegister} className="bg-blue-200 w-4/12 mx-auto my-10 rounded p-5">
                <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Register Form</h2>
                <label>
                    <p>Your Name</p>
                    <input className="w-full p-2 rounded mt-1" type="text" placeholder="Enter Your name" name="text" id="" />
                </label>
                <label>
                    <p className="mt-4">Your Email *</p>
                    <input className="w-full p-2 rounded mt-1" required type="email" placeholder="Enter Your Email" name="email" id="" />
                </label>
                <label>
                    <p className="mt-4">Your Password *</p>
                    <input className="w-full p-2 rounded mt-1" required type="password" placeholder="Enter Your password" name="password" id="" />
                </label>
                <label htmlFor="checked" >
                    <input type="checkbox"
                        className="my-4 mr-2"
                        name="checked"
                        id="checked" />
                    I agery to Terms and Condition
                </label>
                <input className="w-full bg-blue-600 cursor-pointer p-2 mt-5 text-white font-semibold rounded" type="submit" value="Register" />
                <p className="text-center my-1">Are Your Register ? <Link className="text-blue-500 font-semibold" to='/login'>Login</Link> </p>
            </form>
        </div>
    )
}
