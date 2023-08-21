class Product {
    id = 0;
    title = 'plate ';
    price = 0;
    image = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fb.rgbimg.com%2Fcache1nDHUb%2Fusers%2Fm%2Fmz%2Fmzacha%2F600%2Fmhis9OY.jpg&f=1&nofb=1&ipt=866aa241952c4351da17540d944fb83058647ea92f6b46b14a980ce3405f2b50&ipo=images';

    #numberLimit = 100;

    constructor(id) {
        this.id = id;
        this.title = this.title + this.makeRandomNumber();
        this.price = this.makeRandomNumber();
        this.#numberLimit;
    }

    makeRandomNumber() {
        return Math.floor(Math.random() * this.#numberLimit);
    }
}

/* make some products */
function generateProducts(limit) {
    let products = [];

    for (let i = 0; i < limit; i++) {
        products.push(new Product(i))
    }

    return products;
}

export let products = generateProducts(50);
