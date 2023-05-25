import { split } from "postcss/lib/list";

const RecipeCard = ({data}) => {
	
	const {name,ratings,image,cooking_method,ingredients}=data;
	
	return (
		<div className="card card-side bg-base-100 shadow-xl  ">
  <figure className=""><img src={image}  alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className=" overflow-ellipsis overflow-hidden ">{cooking_method}</p>
    <div className="card-actions justify-end">
	<div className="badge badge-accent">Rating {ratings} star</div>
	<p>Ingredients: {ingredients}</p>
      
    </div>
  </div>
</div>
	);
}

export default RecipeCard;
