$(document).ready(function(){

	var toggler = $(".toggler").get();
	var category = $(".category").get();
	var tracker = -1;	

	$(".toggler").click(function(){

		var index = $("div.toggler").index(this);
		var i = 0;
		var maxH;

		while(i < toggler.length)
		{
			if(i === index && index === tracker)
			{
				$(toggler[i]).removeClass("rotate");
				$(toggler[i]).addClass("rotated");
			}			
			else if(i === index && index !== tracker)
			{
				$(toggler[i]).removeClass("rotated");
				$(toggler[i]).addClass("rotate");
			}
			else
			{
				$(toggler[i]).removeClass("rotate");
				$(toggler[i]).addClass("rotated");				
			}	

			$(toggler[index]).children().toggleClass("xopen");

			if(tracker !== index)
			{
				$(toggler[tracker]).children().toggleClass("xopen");
			}

			i++;
		}	

		maxH = $(category[index]).siblings("ul").height() + $(category[index]).height();
		$(category[index]).parent().css("max-height", "" + maxH + "");

		if(tracker === index)
		{
			$(toggler[index]).siblings("ul").slideToggle();
			$(category[index]).toggleClass("open");
			tracker = -1;			
		}
		else if( tracker !== index && tracker !== -1)
		{
			$(toggler[tracker]).siblings("ul").slideToggle();
			$(category[tracker]).toggleClass("open");
			$(toggler[index]).siblings("ul").slideToggle();	
			$(category[index]).toggleClass("open");		
			tracker = index;
		}	
		else //if( tracker !== index)
		{
			$(toggler[index]).siblings("ul").slideToggle();
			$(category[index]).toggleClass("open");
			tracker = index;
		}
		
	});

	$(".category").click(function(){

		var index = $("div.category").index(this);
		var i = 0;
		var maxH;
		var maxW
		

		while(i < category.length)
		{
			if(i === index && index === tracker)
			{
				$(toggler[i]).removeClass("rotate");
				$(toggler[i]).addClass("rotated");				
			}			
			else if(i === index && index !== tracker)
			{
				$(toggler[i]).removeClass("rotated");
				$(toggler[i]).addClass("rotate");				
			}
			else
			{
				$(toggler[i]).removeClass("rotate");
				$(toggler[i]).addClass("rotated");				
			}	

			$(toggler[index]).children().toggleClass("xopen");

			if(tracker !== index)
			{
				$(toggler[tracker]).children().toggleClass("xopen");
			}
			
			i++;
		}	
		
		maxH = $(category[index]).siblings("ul").height() + $(category[index]).height();
		$(category[index]).parent().css("max-height", "" + maxH + "");

		if(tracker === index)
		{
			$(category[index]).siblings("ul").slideToggle();
			$(category[index]).toggleClass("open");
			
			tracker = -1;			
		}
		else if( tracker !== index && tracker !== -1)
		{
			$(category[tracker]).siblings("ul").slideToggle();	
			$(category[tracker]).toggleClass("open");
			

			$(category[index]).siblings("ul").slideToggle();
			$(category[index]).toggleClass("open");	
			
			tracker = index;
		}	
		else //if( tracker !== index)
		{
			$(category[index]).siblings("ul").slideToggle();
			$(category[index]).toggleClass("open");
			
			tracker = index;
		}
	});
});