const urlFetch = "./products.json";

const GetJSONData = () => {
  return fetch(urlFetch)
    .then((response) => response.json())
    .then((data) => {
      const CleanData = data.results.map((product) => {
        return {
          id: product.id,
          name: product.name,
          status: product.status,
          price: product.price,
          image: product.image,
        };
      });
      return CleanData;
    });
};

export default GetJSONData;
