exports.Review={
    productRev:({productId}, args, {products}) => {
        return products.find(product => product.id === productId);
    },
};