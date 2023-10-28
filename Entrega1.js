function notNull(value) {
    if (value === null || value === undefined) {
        throw new Error('Todos los campos deben estar completos.')
    }
    return (value)
}
let id = 1
class ProductManager {
    constructor() {
        this.products = []
    }
    getProducts() {
        return this.products.map(e => e.asPOJO())
    }

    addProduct(dataProduct) {
        if (this.products.some((p) => p.code === dataProduct.code)) {
            throw new Error('El producto tiene un codigo que ya existe.')
        }
        dataProduct.id = id++
        const newProduct = new Product(dataProduct)
        this.products.push(newProduct)
        return newProduct
    }
    getProductsById(id) {

        const filterById = this.products.find((p) => p.id == id);

        if (filterById) {

            return console.log(filterById);

        } else {
            throw new Error(`El producto con id ${id} no existe.`)
        }

    }
}

class Product {
    #price
    constructor({ id, title, price, description, thumbnail, code, stock }) {
        this.id = notNull(id)
        this.title = notNull(title)
        this.description = notNull(description)
        this.price = notNull(price)
        this.thumbnail = notNull(thumbnail)
        this.code = notNull(code)
        this.stock = notNull(stock)
    }
    get price() {
        return this.#price
    }
    set price(newPrice) {
        if (newPrice <= 0) throw new Error('El precio no puede ser menor a 0')
        this.#price = newPrice
    }
    asPOJO() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            code: this.code,
            stock: this.stock
        }
    }

}


const producto1 = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
}
const producto2 = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
}
const producto = new ProductManager()
// console.log(producto.getProducts())
producto.addProduct(producto1)
// producto.addProduct(producto2)
console.log(producto.getProducts())
// producto.getProductsById(15)
