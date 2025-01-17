export interface Product {
    productName: string;
    productDescription: string;
    productImage: {
        url: string;
    };
    productPrice: number;
    productLocation: string;
    productLocationUrl: string;
}