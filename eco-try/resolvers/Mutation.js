const { v4 : uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, {input}, {categories}) => {
    const { name } = input;
    
    const newCategory = {
      id: uuid(),
      name
    };

    categories.push(newCategory);

    return newCategory;
  },

  addProduct:(parent, {input}, {products}) => {
      const {name, description, image, quatity, price, onSale, categoryId} = input;

      const newPro = {
          id: uuid(),
          name,
          description,
          image,
          quantity: quatity,
          price,
          onSale,
          categoryId
      };

      products.push(newPro);

      return newPro;
  }
};
