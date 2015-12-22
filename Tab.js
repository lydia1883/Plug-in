/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-22 12:39:54
 * @version $Id$
 */

  ;(function($){

  	  $.fn.extend({

	  	  	"Tab":function(opt){

	  	  		this.Default={
	  	  		  Btn:"",
	  	  		  Tab_body:"",
	  	  		  Class:"active",
	  	  		}

	  	  	opt=$.extend( this.Default , opt||{} );

	  	  	var _this=$(this);

	  	  	$(this).find(opt.Btn).on("click",function(){

	  	  		_this.find(opt.Tab_body).hide();
	  	  		_this.find(opt.Tab_body).eq($(this).index()).show();
	  	  	
	  	  		$(this).addClass(opt.Class).siblings(opt.btn).removeClass(opt.Class);
	  	  	})

  	  }

	})


  })(jQuery)

