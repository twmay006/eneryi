define('modules/js/common', function(require, exports, module) {

  var $ = require('modules/lib/jquery');
  var Vue = require('modules/lib/vue');
  if(location.pathname.search(/\.html/g)==-1){
  	var fileName="nopage";
  }else{
  	var ppp=location.pathname.replace(/\.html/g,"");
  	var fileName=ppp.slice(ppp.lastIndexOf("/")+1);
  }
  
  var pindex=$(".nav-left").find("[data-page="+fileName+"]").parent().parent().index();
  if(pindex==-1)pindex=$(".nav-left>li").size();
  var cindex=$(".nav-left").find("[data-page="+fileName+"]").text();
  
  module.exports={
  	pindex:pindex,
  	fileName:fileName,
  	cindex:cindex,
  	getPosition: function () {
  	        	var posi_parent=$(".nav-left>li").eq(pindex).children('.navgator').text();
  	       	var posi_child=cindex;
  	         	var posi=new Vue({
  	             	el:'#cont-nav',
  	             	data:{
  	             		parent:posi_parent,
  	                   		child:posi_child
  	           		}
  	      	})
  	}
  }

});
