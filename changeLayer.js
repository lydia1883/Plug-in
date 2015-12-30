;(function($){

  	$.fn.changeLayer=function(){

  		this.each(function(){

  		  var me=$(this); 
  		  me.on("mousedown",function(ev){

  		  	  me.disW=me.width();
			  me.disH=me.height();
			  me.disL=me.offset().left;
			  me.disT=me.offset().top;
			  me.disX=ev.pageX;
			  me.disY=ev.pageY;	
	  		  me.b="";	
	  		  
	  		  if( me.disX > me.disL + me.disW -10 ){
	  		  	me.b='right';
	  		  }
	  		  if( me.disX < me.disL +10  ){
	  		  	me.b='left';
	  		  }
	  		  if( me.disY >  me.disT + me.disH -10  ){
	  		  	me.b='bottom';
	  		  }
	  		  if( me.disY <  me.disT +10  ){
	  		  	me.b='top';
	  		  }

	  		  $(document).on("mousemove",function(ev){

	  		  	  switch(me.b){
	  		  	  	case "left":
	  		  	  	me.css("width",me.disW-(ev.pageX-me.disX)).css("left",me.disL+(ev.pageX-me.disX));
	  		  	  	break;

	  		  	  	case "right":
	  		  	  	me.css("width",me.disW+(ev.pageX-me.disX));
	  		  	  	break;

	  		  	  	case "top":
	  		  	  	me.css("height",me.disH-(ev.pageY-me.disY)).css("top",me.disT+(ev.pageY-me.disY));
	  		  	  	break;

	  		  	  	case "bottom":
	  		  	  	me.css("height",me.disH+(ev.pageY-me.disY));
	  		  	  	break;

	  		  	  }
	  		  });
		  		  $(document).on("mouseup",function(){
		  		  	$(document).off();
		  		  });

	  		  	return false;
  		  });
  		});
  		return this;
  	}

  })(jQuery);

