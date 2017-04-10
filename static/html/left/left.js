define('modules/html/left/left', function(require, exports, module) {

  var $ = require('modules/lib/jquery');
  var Vue = require('modules/lib/vue');
  var p=require('modules/js/common');
  
  $(".nav-left").find("[data-page="+p.fileName+"]").addClass("cur").siblings().removeClass('cur');
  $(".nav-left>li").eq(p.pindex).addClass('cur').children('ul').css("display","block").parent().siblings('li').removeClass('cur');
  
  module.exports={
  	init:function(){
  		p.getPosition();
  		var nav=new Vue({
  			el:'#nav-left',
  			data:{},
  			methods:{
  				jump:function(){
  					var $target=$(arguments[0].target);
  					var dataPage=$target.data("page");
  					location.href=dataPage+".html";
  				},
  				curToggle(){
  					var $elem=$(arguments[0].target);
  					$elem.siblings('ul').slideDown().parent().siblings('li').children('ul').slideUp();
  				},
  			}
  		})
  	}
  }
  

});
