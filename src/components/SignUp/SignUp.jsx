import { Link } from "react-router-dom";


const handleRegister=(e)=>{
  e.preventDefault();
  const form=e.target;
  const name=form.name.value;
  const photoLink=form.link.value;
  const email=form.email.value;
  const password=form.password.value;
  console.log(name,photoLink,email,password)

}

const SignUp = () => {
	return (
		<div>
		<div className="hero min-h-screen " style={{backgroundImage:`url("/images/bg.jpg")`}}>
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-red-300 ">Register Here !</h1>
       </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
      <form className="card-body" onSubmit={handleRegister}>
	<div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder=" Enter your name" className="input input-bordered" name="name" required />
        </div>
	<div className="form-control">
          <label className="label">
            <span className="label-text">Photo Link</span>
          </label>
          <input type="text" placeholder="Link " className="input input-bordered" name="link" required />
        </div>
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
