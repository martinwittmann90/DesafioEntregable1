class ProductManager{
    id = 1;
    constructor () {
        this.products = [];
    }
    addProduct (product) {
        let checkCode = this.products.find((p) => p.code === product.code);
        if (checkCode) {
            return 'This code already exists';
        }
        if (
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock 
        ) {
        return 'Fields missing';
    }
    let newProduct = { ...product, id: this.id };
    this.products.push(newProduct);
    this.id++;
    return 'Product added';
}
    getProductById(id) {
        let found = this.products.find((p) => p.id === id);
        if (!found) {
            return 'Not found';
        }
        return found;
    }
}

const product = {
    title: 'Alemania',
    description: 'Camiseta de Alemania',
    price: 'USD 100',
    thumbnail: 'https://ibb.co/HFLvTvg',
    code: 'C0001',
    stock: '5',
};
const product2 = {
    title: 'España',
    description: 'Camiseta España',
    price: 'USD 90',
    thumbnail: 'https://ibb.co/txv7HWV',
    code: 'C0002',
    stock: '3',
};
const product3 = {
    title: 'Portugal',
    description: 'Camiseta Portugal',
    price: 'USD 70',
    thumbnail: 'https://ibb.co/rZBvwTH',
    code: 'C0003',
    stock: '4',
};

const productManager = new ProductManager ();

console.log(productManager.addProduct(product));
console.log(productManager.addProduct(product2));
console.log(productManager.getProductById(1))
console.log(productManager.getProducts());