import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Player } from "@lottiefiles/react-lottie-player";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const {logIn,gitLogin,googleLogin}=useContext(AuthContext)

  const handleLogin=(e)=>{
    e.preventDefault();
    const form = e.target;
    const email=form.email.value;
    const password=form.password.value;
    logIn(email,password)
    .then(result=>{
      form.reset()
       toast.success('successfully Logged in')
    })
    .catch(error=>{
      toast.error(error.message,'Try again')
    })
  
     }
    //  google
const googleProvider=new GoogleAuthProvider()
    const handleGoogle=()=>{
      return googleLogin(googleProvider)
      
    }
	return (
		<>
		<div className="hero min-h-screen " style={{backgroundImage:`url("/images/bg.jpg")`}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-red-300 ">Login now!</h1>
      <ToastContainer/>
       </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name="password" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
	<label className="label">
            <p className="label-text-alt "> Doesn't  have an account? <Link to='/signup' className="label-text-alt link link-hover">Register here.</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-red-500 hover:bg-green-500">Login</button>
           </div>
           
      </form>
      <p className="self-center">Sign in Using</p>
       <div className="flex self-center">
              <button className="btn bg-lime-200 border-0" onClick={handleGoogle} > <Player  src='https://assets1.lottiefiles.com/private_files/lf30_3nvqj06a.json' className="player" autoplay loop style={{height:'60px'}}/> </button>
              <button className="btn btn-ghost"> <Player  src='https://assets3.lottiefiles.com/packages/lf20_S6vWEd.json' className="player" autoplay loop style={{height:'60px'}}/></button>
            </div>

    </div>
  </div>
</div>
		



		</>
	);
}

export default Login;
