import { useLoaderData } from "react-router-dom";
import Hero from "../../pages/Hero";
import Chef from "../../pages/Chef";

const Home = () => {
	const data =useLoaderData()
	
	return (
		<>
			<Hero/>
			<div className="grid grid-cols-3 gap-4">
				{
					data.map(chef=> <Chef data={chef} key={chef.id} /> )
				}
			</div>
		</>
	);
}

export default Home;
