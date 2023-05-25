import { useLoaderData, useNavigate } from "react-router-dom";
import Hero from "../../pages/Hero";
import Chef from "../../pages/Chef";


const Home = () => {
	const data =useLoaderData()
	
	return (
		<>
			<Hero/>
			
			<p className="text-4xl text-center font-bold font-serif">Our Chef's</p>

			<div className="grid lg:grid-cols-3 gap-4 justify-center sm:grid-cols-1 ">
				
				{
					data.map(chef=> <Chef data={chef} key={chef.id} /> )
				}
				
			</div>
		</>
	);
}

export default Home;
