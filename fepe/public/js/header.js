(function($,window){

   const obj = {
      init : function(){
         this.main();
      },

      main : function(){
         const $category = $('#header .category');
         const $menu     = $('#header .menu');


         $category.on({
            mouseenter : function(){
               $menu.show();
            }
         });


         $category.on({
            mouseleave : function(){
               $menu.hide();
            }
         });


         
         $(window).scroll(function(){
            if( $(window).scrollTop() >= 100 ){
               $('#header .row1').addClass('on');
            }
            else {
               $('#header .row1').removeClass('on');
            }
         });

         
      }
   }

   obj.init();

})(jQuery,window);