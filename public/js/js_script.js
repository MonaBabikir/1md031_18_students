/*
function MenuItem(prod_name, kCal, lactose, gluten, img_source){
	this.prod_name = prod_name;
	this.kCal = kCal;
	this.lactose = lactose;
	this.gluten = gluten;
	this.img_source = img_source;
	this.prod_desc = function(){
		return this.prod_name + ' ' + this.kCal;
	};
}
console.log("Iam Here");

var m1 = new MenuItem("The Fire Burger","750 kCal","Contains lactose","Contains gluten","https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4409427.jpg");
var m2 = new MenuItem("Fried Turkey Burger","600 kCal","Contains lactose","", "https://www.nuggetmarket.com/media/images/cowpoke_turkey_burger.jpg");
var m3 = new MenuItem("Double Cheese Burger","1800 kCal","Contains lactose","Contains gluten","https://1.bp.blogspot.com/-i2e3XPfVwYw/V9GgRgn2Y3I/AAAAAAAAxeM/Ih2LoXrSQr0NBgFKLeupxYNzwGZXBv1VwCLcB/s1600/Hardees-Classic-Double-Cheeseburger.jpg");
var menue = [m1,m2,m3];
*/
var menue = MenuItem;

//var parent_div = document.getElementsByClassName('burger_types');
console.log("parent-div: ");
console.log(menue[0].prod_name);
for(var i= 0; i< menue.length; i++){
	/*creating the head/title of the menue item (burger type)*/
	var h= document.createElement('h3');
	var headline = document.createTextNode(menue[i].prod_name);
	h.appendChild(headline);
	/* setting the description of each burger type and put them in unordered list*/
	var ul = document.createElement('ul');
	var li1 = document.createElement('li');
	var li2 = document.createElement('li');
	var li3 = document.createElement('li');
	var cal = document.createTextNode(menue[i].kCal);
	var lactose = document.createTextNode(menue[i].lactose);
	var gluten = document.createTextNode(menue[i].gluten);
	li1.appendChild(cal);
	li2.appendChild(lactose);
	li3.appendChild(gluten);
	ul.appendChild(li1);
	ul.appendChild(li2);
	ul.appendChild(li3);
	
	/*adding img of the burger*/
	var img = document.createElement("IMG");
	img.setAttribute("src", menue[i].img_source);
	img.setAttribute("width", "150");
    img.setAttribute("height", "100");
	
	/*creating the child div and add all the burger property to it */
	var child_div = document.createElement('div');
	child_div.appendChild(h);
	child_div.appendChild(img);
	child_div.appendChild(ul);
	
	/* adding the whole div to the parent div */
	document.getElementById("burger_types_js").appendChild(child_div);
	
	/*the other way is to include all the above by using innerHTML*/
	//document.getElementById("burger_types_js").innerHTML +=  "<div class='type"+ i+"'>" + "<h3>" + menue[i].prod_name +"</h3>" +"</h3>" + "<img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4409427.jpg' width= '150' height= '100'>" +"<ul> <li>750 kCal</li> <li>Contains <span class='ing'>lactose </span></li> <li>Contains  <span class='ing'>gluten </span> </li> </ul>" +"</div>"
}

/*creating an event listener for the order button*/
var orderButton = document.getElementById("order_button");
orderButton.onclick = function () {
	console.log("Button clicked!");
	order = read_order_values("order_form");
	console.log(order);
}

function read_order_values(form_id){
	delivery_info = [];
	var f = document.getElementById(form_id);
	delivery_info.push(f.elements["fullName"].value);
	delivery_info.push(f.elements["Email"].value);
	delivery_info.push(f.elements["street"].value);
	delivery_info.push(f.elements["house"].value);
	delivery_info.push(f.elements["rcp"].value);
	delivery_info.push(f.elements["gender"].value);
	//console.log(delivery_info);
	return delivery_info
}
	