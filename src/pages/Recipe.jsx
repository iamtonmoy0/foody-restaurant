import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";


const Recipe = () => {
	const recipe=useLoaderData()
	
	return (
		<div className="grid lg:grid-cols-2 gap-5 justify-center sm:grid-cols-1 justify-center ">
			{
				recipe.map(data=><RecipeCard key={data.id} data={data}  />)
			}
		</div>
	);
}

export default Recipe;
