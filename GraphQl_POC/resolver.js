const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.resolvers = {
    Query: {
        getResponse: async (GetResponse, id) => {
            const response = await fetch(`https://api.github.com/users/${id.login}`);
            const data = await response.json();

            return data;
        }
    }
};