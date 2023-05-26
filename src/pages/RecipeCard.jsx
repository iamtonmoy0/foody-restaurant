
import { useState } from "react";
import { toast } from "react-toastify";

const RecipeCard = ({data}) => {
	
	const {name,ratings,image,cooking_method,ingredients}=data;
	const [isFavorite, setIsFavorite] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(true);
    setIsDisabled(true);
    toast.success('Added to favorites!');
  };

	return (
		<div className="card card-side bg-base-100 shadow-xl  ">
  <figure className=""><img src={image}  alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className=" overflow-ellipsis overflow-hidden ">{cooking_method}</p>
    <div className="card-actions justify-end">
	<div className="badge badge-accent">Rating {ratings} star</div>
  <div className="badge badge-ghost  " disabled={isDisabled}
        onClick={handleFavoriteClick}
        style={{ opacity: isFavorite ? '0' : '1' }}><img src="/bm.svg" alt="" className="h-5" /></div>
      <p>Ingredients: {ingredients}</p>
      
    </div>
  </div>
</div>
	);
}

export default RecipeCard;
