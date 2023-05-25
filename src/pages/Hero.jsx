
const Hero = () => {
	return (
		<div className="hero min-h-screen " style={{backgroundImage:`url('/images/images.jpg')`}}>
  <div className="hero-content flex-col lg:flex-row-reverse h-80">
    <img src="/images/dish.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div className="">
      <div className="text-7xl font-bold text-green-400 heroHeader textarea-bordered">
	<h1 > it's not just </h1>
        <h1 > Food, It's an </h1>
        <h1 > Experience. </h1>
      </div>
      <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-red-500 hover:bg-green-500">Book A Table</button>
    </div>
  </div>
</div>
	);
}

export default Hero;
