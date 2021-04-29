const ordersList = document.getElementById('ordersList');
let hpOrders = [];
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup',(e) =>{ 
    const searchString =e.target.value.toLowerCase(); 
    const filteredOrders=hpOrders.filter((order) => {
        return(
            order.customer.toLowerCase().includes(searchString)||
            order.customerid.toLowerCase().includes(searchString)||
            order.orderid.toLowerCase().includes(searchString)
        );});    
    displayOrders(filteredOrders);
});
const loadOrders = async () => {
    try {
        const res = await fetch('pj.json');
        hpOrders = await res.json();
        displayOrders(hpOrders);
        console.log(hpOrders);
    } catch (err) {
        console.error(err);
    }};
const displayOrders = (orders) => {
    let htmlString="";
     orders.map((order) => {
            htmlString +=` 
            <div class="order">
                <h2>${order.customer}</h2>
                <h3>Order Id: ${order.orderid}</h3>
                <h3>Customer Id: ${order.customerid}</h3>
                <p>Invoice Address: ${order.invaddr}</p>
                <p>Delivery Address: ${order.delivaddr}</p>
                <p>Delivery Date: ${order.deliverydate}</p>
                <p>Customer Comments: ${order.comment}</p>
                <p>Total Price: ${order.totalprice}</p>
                `

        order.products.map(product=>{
                htmlString += 
                `
                <div>
                <p>Code: ${product.code}<input type="checkbox">Ready</p>
                <p>Product: ${product.product}</p>
                <p>Description: ${product.description}</p>
                <p>Supplier Code: ${product.suppliercode}</p>
                <p>Quantity: ${product.qty}</p>
                <p>Unit Price: ${product.unit_price}</p>
                <p>Shelf Position: ${product.shelf_pos}</p>


                </div>
                `

            })
            htmlString += `
            <textarea></textarea></br>
            <button onclick="window.location.href='project2.html'">Submit</button>
                </br><button onclick='window.print()'>Print this page</button>
                <hr/>
            </div>
            `
        })
        .join('');
    ordersList.innerHTML = htmlString;};
loadOrders();
