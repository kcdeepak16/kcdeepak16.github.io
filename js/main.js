
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

$(document).ready(function(){
    var scrolled = false;
    var element_position = $('#about_me_block div p').offset().top;
    $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position - 300;
    if(y_scroll_pos > scroll_pos_test && !scrolled) {
        scrolled = true;
        var d = $("#skills_block ul li");
        var s = d.length;
        var i;
        for(i=1;i<s+1;i++)
        {
		  console.log();
		  var bar = new ProgressBar.Circle('#skills_block ul li:nth-child('+i+") div", {
		  color: 'rgb(255,255,255)',
		  strokeWidth: 4,
		  trailWidth: 1,
		  easing: 'easeInOut',
		  duration: 2000,
		  text: {
		    autoStyleContainer: false
		  },
		  from: { color: 'rgb(34,34,34)', width: 3},
		  to: { color: '#F26C4F', width: 4 },
		  step: function(state, circle) {
		    circle.path.setAttribute('stroke', state.color);
		    circle.path.setAttribute('stroke-width', state.width);

		    var value = Math.round(circle.value() * 100);
		    if (value === 0) {
		      circle.setText('');
		    } else {
		      circle.setText(value);
		    }

		  }
		});
		bar.text.style.fontFamily = 'bold_font';
		bar.text.style.fontSize = '5rem';
		bar.animate(parseInt($('#skills_block ul li:nth-child('+i+") div input").val())/100);
	}
    }
});
})

function skills_expand()
{
        if($("#skills_btn").text() == "All Skills")
		{
			$("#skills_list").animate({"height":$("#skills_list ul").css("height")},500);
			$("#skills_btn").text("Show Less");
		}
		else
		{
			$("#skills_list").animate({"height":"30rem"},500);
			$("#skills_btn").text("All Skills");	
		}
}

var x = window.matchMedia("(max-width: 800px)");

function nav_scroll(s)
{
    if(x.matches)
    {
        launch();
    }
    $([document.documentElement, document.body]).animate({
        scrollTop: $(s).offset().top-100
    }, 50);
}
