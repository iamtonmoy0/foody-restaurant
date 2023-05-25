import { Link } from "react-router-dom";

const Chef = ({data}) => {
	const {id,name,experience,image,likes,recipe}=data;
	return (
		<>
		<div className="card w-80 bg-red-100 shadow-xl">
		<figure><img src={image} alt="Shoes" /></figure>
		<div className="card-body">
    		<h2 className="card-title">
     			 {name}
      <div className="badge badge-secondary">{likes} Likes</div>
    </h2>
       <div className="card-actions justify-end">
      <div className="badge badge-outline  bg-green-200">Experience {experience} year</div>
      <div className="badge badge-outline bg-green-200">{recipe} Recipe</div>
    </div>
    <button type="submit" className="btn bg-green-600">View Recipes</button>
  </div>
</div>
	
		</>
	);
}

export default Chef;
