const query = `
  {
    wisatas {
      namaTempatWisata
      fotoTempatWisata {
        url
      }
      deskripsiTempatWisata
      hargaTiketWisata
      satuanHargaTiket
      lokasiWisata
      urlLokasiWisata
    }
  }
`;

export async function getDestinationFromServer() {
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
  return data.wisatas;
}
