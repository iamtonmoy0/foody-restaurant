import { useLoaderData } from "react-router-dom";
import Hero from "../../pages/Hero";
import Chef from "../../pages/Chef";
import OurStory from "../../pages/OurStory";
import CustomerReviewSection from "../../pages/CustomerReviewSection";


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
			<p className="text-center text-5xl font-bold heroHeader ">Our Story</p>
			
			<OurStory/>
			<CustomerReviewSection/>
		</>
	);
}

export default Home;
