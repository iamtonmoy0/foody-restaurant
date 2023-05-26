import React from 'react';

const CustomerReviewSection = () => {
  const reviews = [
    {
      name: 'John Smith',
      comment: 'The food was absolutely delicious! The flavors were unique and perfectly balanced. The service was impeccable, and the atmosphere was cozy. Can\'t wait to visit again!',
      rating: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkG_RK170pe7X0gXMoF2fwWQQqggG0z8mAg&usqp=CAU',
    },
    {
      name: 'Emily Johnson',
      comment: 'I had an amazing dining experience at this restaurant. The presentation of the dishes was stunning, and the taste exceeded my expectations. The staff was friendly and attentive. Highly recommended!',
      rating: 4.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQCzY28DutddllgXeLvjl5MSs8xDvzwRvi-3GtvytP0rnlij2Igg7LFUVnENys83vvhg&usqp=CAU',
    },
    {
      name: 'David Thompson',
      comment: 'Ive been to many restaurants, but this one stands out from the crowd. The quality of the ingredients and the attention to detail in every dish were impressive. The staff went above and beyond to ensure a delightful evening. Will definitely return!',
      rating: 4,
      image: 'https://m.media-amazon.com/images/M/MV5BZTYwMzlmNWEtNDhhNy00NmMxLTg3NTQtOGFmYTNiZDZiY2NmXkEyXkFqcGdeQXVyMTA2MTIzNjY2._V1_.jpg',
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-center mb-4">
                <img className="rounded-full h-16 w-16 object-cover" src={review.image} alt={review.name} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-600 mb-4">{review.comment}</p>
              <div className="flex items-center">
                <span className="text-yellow-500">
                  {Array.from(Array(Math.floor(review.rating)), (_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                    </svg>
                  ))}
                </span>
                <span className="text-gray-500 ml-1">{review.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewSection;
