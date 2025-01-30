interface Asset {
  url: string; // Field untuk URL gambar
}

export interface Product {
  namaProduk: string; // Nama produk (string)
  fotoProduk: Asset[]; // Foto produk (objek dengan field url)
  deskripsiProduk: string; // Deskripsi produk (string)
  hargaProduk: number; // Harga produk (number)
  satuanHargaProduk: string; // Satuan harga (string)
  lokasiProduk: string; // Lokasi produk (string)
  urlLokasiProduk: string; // URL lokasi produk (string)
}
