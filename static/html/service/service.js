define('modules/html/service/service', function(require, exports, module) {

  var $ = require('modules/lib/jquery');
  var Vue = require('modules/lib/vue');
  var p=require('modules/js/common');
  
  module.exports = {
      init: function () {
      	var orderList;
      	$.ajax({
      		url:"/eneryi/mock/order.json?t="+new Date().getTime(),
      		type:"GET",
      		success:function(data){
      			orderList=data.data;
      			console.log(orderList);
  
                                          for(var j = 0;j<orderList.rows.length;j++){
                                                                          orderList.rows[j].checked = false;
                                          }
  
      			var posi=new Vue({
  		             	el:'#order-table',
  		             	data:{
  		             		orderRows:orderList.rows,
  		             		orderTotal:orderList.total
  		           		},
                                                      methods:{
                                                          dischoose: function(){
                                                              for(var i=0;i<this.orderRows.length;i++){
                                                                  this.orderRows[i].checked=!this.orderRows[i].checked;
                                                              }
                                                          },
                                                          changeChecked:function(index,rows){
                                                              rows[index].checked=!rows[index].checked;
                                                          }
                                                      }
  		      	})
      		},
      		error:function(err){
      			console.log(err.message);
      		}
      	})
      }
  };
  

});
