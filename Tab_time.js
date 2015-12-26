/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-26 15:04:38
 * @version $Id$
 */

  ;(function($){
  	var Tab=(function(){

  		function Tab(element,opt){
  			this.settings=$.extend(true,$.fn.Tab.Defaults,opt || {});
  			this.element=element;
  			this.iNow=0;
  			this.time=null;
  			this._class=null;
  			this.aBtn=this.element.find(this.settings.Btn);
  			this.aDiv=this.element.find(this.settings.primary);
  			this.init();
  		}
  		Tab.prototype.init=function(){
  			var me=this;
  			me.aBtn.on("click",function(){
				me.show($(this));
			});
			if(me.settings.time){
  				me.autoPlay();
  			}
  		}
  		Tab.prototype.show=function(obj){
  			  var me=this;
  			  me._class=me.settings.active.substring(1);
		  	  me.aBtn.attr("class","");
		  	  me.aDiv.hide();
  			  me.aBtn.eq(obj.index()).attr("class",me._class)
  			  me.aDiv.eq(obj.index()).show();
  		};
  		Tab.prototype.autoPlay=function(){
  			var me=this;
  			me.timer=setInterval(Take,1000);
  			function Take(){
  				me.iNow++;
  				if(me.iNow==me.aBtn.length){
	  				me.iNow=0;
	  			}
	  		  me._class=me.settings.active.substring(1);
  			  me.aBtn.attr("class","");
		  	  me.aDiv.hide();
  			  me.aBtn.eq(me.iNow).attr("class",me._class)
  			  me.aDiv.eq(me.iNow).show();
  			}
  			me.element.on("mouseover",function(){
  				clearInterval(me.timer)
  			}).on("mouseout",function(){
  				me.timer=setInterval(Take,1000)
  			});
  		};

  		return Tab;
  	})()	



  	$.fn.Tab=function(opt){

  		return this.each(function(){
  			var me=$(this),
  			instance=me.data("Tab");
  			if(!instance){//单例模式
  				instance=new Tab(me,opt);
  				me.data("Tab",instance);
  			}
  			if($.type(opt)==='string'){

  				return instance[opt]();
  			}
		});

	 }

	 $.fn.Tab.Defaults={
	 	Btn:"input",
	 	primary:"div",
	 	active:".active",
	 	time:false
	 }

  })(jQuery);
