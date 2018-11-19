/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm4 = new Vue({
  el:'#main',
  data: {
    orders: {},
	position:{}
  },
    //commented the listining (task 5-2_3)
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  }, 
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (form_id, burger_type) { //, form_id, burger_type
	  //////////////
	  console.log("i am here inside the addOrder method :)");
	  var delivery_info = [];
			
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
	  //delivery_info.push(f.elements["street"].value);
	  //delivery_info.push(f.elements["house"].value);
	  delivery_info.push(f.elements["rcp"].value);
	  delivery_info.push(f.elements["gender"].value);
	  console.log(delivery_info);
	  //////////////
	  
      //var offset = {x: event.currentTarget.getBoundingClientRect().left,
        //            y: event.currentTarget.getBoundingClientRect().top};
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: this.position,
                                orderItems: delivery_info
                              });
    },
	
	displayOrder: function (event) {
		console.log("i am here inside the displayOrder method :)");
		var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
		socket.emit("displayOrder", {details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y }
                              });
		this.position = { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y };
	}
  }
});
