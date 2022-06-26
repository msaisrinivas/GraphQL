exports.Query = {
  sai: (paren, args, context) => {
    return ["Hello Sai", "sushanth", "Rajeev"];
  },
  age: () => {
    return 22;
  },
  score: () => {
    return 99.99;
  },
  crazy: () => {
    return [true, false, true, false];
  },

  products: (parent, {filter}, {products, reviews}) => {
    let filterPro = products

    if(filter)
    {
      const {onSale, avgRating} = filter;
      if(onSale)
      {
        filterPro = filterPro.filter(product => product.onSale)
      }
      if(avgRating in [1,2,3,4,5])
      {
        filterPro = filterPro.filter((product) => {
          let sumRating = 0;
          let reviewsCount = 0;
          reviews.forEach((review) => {
            if(review.productId === product.id)
            {
              sumRating += review.rating;
              reviewsCount += 1;
            }
          });
          const avgFilterRating = sumRating/reviewsCount;
          return avgFilterRating <= avgRating;
        })
      }
    }

    return filterPro
  },

  product: (parent, {id}, {products}) => {
    return products.find((product) => product.id === id);
  },

  categories: (parent, args, {categories}) => categories,

  category: (parent, {id}, {categories}) => {
    return categories.find((category) => category.id === id);
  },

  reviews: (parent, args, {reviews}) => reviews,
};
