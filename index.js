function Product(name, price, currency,discount) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.discount = discount;
    };

    function MethodForDiscount() {
        this.showAllInfo = function () {
            console.log(`Product information : ${ this.name} ${this.price} ${this.currency}`);
          }

        this.makeDiscount = function () {
            this.price = (this.price-this.discount);
            return`Price is ${this.price} ${this.currency}.`
          }
        };

 Product.prototype = new MethodForDiscount();
 const product = new Product('T-shirt',679,'$',10);
 console.log(product);
 console.log(product.makeDiscount());