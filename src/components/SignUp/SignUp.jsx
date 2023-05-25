import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<div>
		<div className="hero min-h-screen " style={{backgroundImage:`url("/images/bg.jpg")`}}>
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-red-300 ">Register Here !</h1>
       </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
      <form className="card-body">
	<div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder=" Enter your name" className="input input-bordered" required />
        </div>
	<div className="form-control">
          <label className="label">
            <span className="label-text">Photo Link</span>
          </label>
          <input type="text" placeholder="Link " className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" required/>
          
	<label className="label">
            <p className="label-text-alt "> Already  have an account? <Link to='/login' className="label-text-alt link link-hover">Login here.</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-500 hover:bg-green-500">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
		
		</div>
	);
}

export default SignUp;
