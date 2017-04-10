define('modules/html/service/service', function(require, exports, module) {

  require("modules/js/laypage/laypage");
  // var elData={
  // 	'position':'hhhhh'
  // }
  // var contPosition = new Vue({
  //   el: '#cont-nav',
  //   data: {
  //   	position:"hahaha"
  //   },
  //   methods: {
  //     reverseMessage: function () {
  //       this.message = this.message.split('').reverse().join('')
  //     }
  //   }
  // });
  
  // <div id="app-5">
  //   <p>{{ message }}</p>
  //   <button v-on:click="reverseMessage">Reverse Message</button>
  // </div>
  // 
  // 
  // var $ = require('/modules/lib/jquery.js');
  module.exports = {
      init: function () {
           this.getPosition();
      },
      getPosition: function () {
                  // laypage({
                  //             cont: $('#pages'), //容器。值支持id名、原生dom对象，jquery对象,
                  //             pages: 7, //总页数
                  //             skip: true, //是否开启跳页
                  //             skin: '#6a3906',
                  //             groups: 3, //连续显示分页数
                  //             jump: function(obj, first) {
                  //                   if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                  //                     query((obj.curr) - 1);
                  //                   }
                  //             }
                  //  });
      }
  };
  

});
