const query = `
  {
    produks {
      namaProduk
      fotoProduk {
        url
      }
      deskripsiProduk
      noTelponPenjual
      hargaProduk
      satuanHargaProduk
      lokasiProduk
      urlLokasiProduk
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
      query: query,
      cache: 'no-store'
    }),
  });

  const { data } = await response.json();
  return data.produks;
}
