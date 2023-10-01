import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";

 
export default function Login() {
    const {loginWithGmail, user } = useContext(AuthContext);
    
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(!email){
            toast.error("Please Enter The Valid Email")
            return;
        }
        else if(user){
            toast.error(" User Already Login go to home")
            return;
        }

        else if(password.length < 6){
            toast.error(" Password At last 6 carector")
            return ;
        }

        loginWithGmail(email, password)
        .then(result =>{
            console.log(result.user)
            toast.success('Successfully Login!')
        })

        .catch(error =>{
            toast.error(" Please Register Before Login")

        })
        e.target.email.value = '';
        e.target.password.value = '';

    }
  return (
    <div>
        <Toaster
                position="top-center"
                reverseOrder={false}
            />
        <form onSubmit={handleLogin} className="bg-blue-200 w-4/12 mx-auto my-20 rounded p-5">
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Login Form</h2>
            <label>
                <p>Your Email *</p>
                <input className="w-full p-2 rounded mt-1" type="email" placeholder="Enter Your Email" name="email" id="" />
            </label>
            <label>
                <p className="mt-4">Your Password *</p>
                <input className="w-full p-2 rounded mt-1" type="password" placeholder="Enter Your password" name="password" id="" />
            </label>
            
                 <input className="w-full bg-blue-600 cursor-pointer p-2 mt-5 text-white font-semibold rounded" type="submit" value="Login" />
                <p className=" text-center my-2">New User ? <Link className="text-blue-500 font-semibold" to='/register'>Register</Link></p>
            
        </form>
    </div>
  )
}
