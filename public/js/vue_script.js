var vm1 = new Vue({
  el: '#burger_types_vue',
  /*data: {
    MenuItems: [ 
	
    {"prod_name":"The Fire Burger","kCal":"750 kCal","lactose":"Contains lactose","gluten":"Contains gluten", "img_source": "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4409427.jpg"}, 
    {"prod_name":"Fried Turkey Burger","kCal":"600 kCal","lactose":"Contains lactose","gluten":"" , "img_source": "https://www.nuggetmarket.com/media/images/cowpoke_turkey_burger.jpg"},
	{"prod_name":"Double Cheese Burger","kCal":"1800 kCal","lactose":"Contains lactose","gluten":"Contains gluten", "img_source":"https://1.bp.blogspot.com/-i2e3XPfVwYw/V9GgRgn2Y3I/AAAAAAAAxeM/Ih2LoXrSQr0NBgFKLeupxYNzwGZXBv1VwCLcB/s1600/Hardees-Classic-Double-Cheeseburger.jpg"}
	
	]
  } */
  
  data:{ 
  MenuItems: ''
  }
})

vm1.MenuItems = MenuItem

var vm2 = new Vue({
  el: '#order_button',
  methods: {
        clicked1: function() {
            console.log("Button clicked!");
        },
		clicked2: function(form_id, burger_type){
			delivery_info = [];
			
			/*check and add the selected burger types*/
			var burger_count = document.getElementById(burger_type).childElementCount;
			for(var i=0; i< burger_count; i++){
				if(document.getElementById(MenuItem[i].prod_name).checked == true){
					delivery_info.push(MenuItem[i].prod_name);
				}
			}
			/*check and add the delivery info*/
			
			var f = document.getElementById(form_id);
			delivery_info.push(f.elements["fullName"].value);
			delivery_info.push(f.elements["Email"].value);
			delivery_info.push(f.elements["street"].value);
			delivery_info.push(f.elements["house"].value);
			delivery_info.push(f.elements["rcp"].value);
			delivery_info.push(f.elements["gender"].value);
			console.log(delivery_info);
			
			
			
			vm3.currentOrder = "your order info is : "+ delivery_info  // this to display the order after the button pressed
			//return delivery_info
		}
		
    }
})

var vm3 = new Vue({
  el: '#current_order',
  data:{
	  currentOrder: ''
  }
})

