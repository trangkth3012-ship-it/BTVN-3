function order(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.total = function() {
        return this.price * this.quantity;
    };
    this.output = function() {
        document.write("<div style='border:1px solid #ccc; margin:10px 0; padding:10px;'>");
        document.write("<p><strong>Product:</strong> " + this.product + "</p>");
        document.write("<p><strong>Price:</strong> " + this.price + "</p>");
        document.write("<p><strong>Quantity:</strong> " + this.quantity + "</p>");
        document.write("<p><strong>Total:</strong> " + this.total() + "</p>");
        document.write("</div>");
    };
}

var example1 = new order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new order("Untitled #23", 10, 4);

example1.output();
example2.output();
