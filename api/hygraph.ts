

const query = `
  {
    products {
      productName
      productDescription
      productImage {
        url
      }
      productPrice
      productLocation
      productLocationUrl
    }
  }
`;


export async function getProductFromServer() {
  if (!process.env.NEXT_HYGRAPH_ENDPOINT) {
    throw new Error('HYGRAPH_ENDPOINT is not defined');
  }
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      query : query 
    }),
  });

  const { data } = await response.json();
  return data.products;
}
