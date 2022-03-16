
//Binding toan bo input
var productTag = document.getElementaryById('product_id')
var manufacturerTag = document.getElementaryById('manufacturer_id')
var priceTag = document.getElementaryById('price_id')
var totalPriceTag = document.getElementaryById('totalPrice_id')
var categoryTag = document.getElementaryById('category_id')
var resulttag = document.getElementaryById('result')

//Tu dong tinh tong
function updateTotalPrice() {
	var price = priceTag.value
	var quantity = quantity.value

	totalPriceTag.value = price*quantity
}