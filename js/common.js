//kol
 $(function() {

        $(document).ready(function() {
            $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        });
    }); 
//rotate
 $(function() {
$('.top .little_nav ul li,.top .header-phone').on('click', function(e){
  e.preventDefault();
    $(this)
      .toggleClass('up')
      .siblings('div')
      .slideToggle();  
});
 });
//DROPDOWN about
 $(function() {
    $(".drop-down").click(function() {
        if ($(".drop-menu-main-sub").is(":visible")) {
            $(".drop-menu-main-sub").css("opacity", "1");
            $(".drop-menu-main-sub").fadeOut();
            $(".drop-menu-main-sub a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".drop-menu-main-sub").fadeIn();
            $(".drop-menu-main-sub a").addClass("fadeInUp animated");

        };

    });

    });
//DROPDOWN aautorize
$(function(){
    $(".profile").click(function() {
        if ($(".autorize_mnu").is(":visible")) {
            $(".autorize_mnu").css("opacity", "1");
            $(".autorize_mnu").fadeOut();
            $(".autorize_mnu .aut_wrap").removeClass("fadeIn animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".autorize_mnu").fadeIn();
            $(".autorize_mnu .aut_wrap").addClass("fadeIn animated");

        };

    });
    
    });
//Select new
$(function(){
    $('.select').each(function(){
        // Variables
        var $this = $(this),
            selectOption = $this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            dur = 500;

        $this.hide();
        // Wrap all in select box
        $this.wrap('<div class="select"></div>');
        // Style box
        $('<div>',{
            class: 'select__gap',
            text: 'По новизне'
        }).insertAfter($this);
        
        var selectGap = $this.next('.select__gap'),
            caret = selectGap.find('.caret');
        // Add ul list
        $('<ul>',{
            class: 'select__list'
        }).insertAfter(selectGap);      

        var selectList = selectGap.next('.select__list');
        // Add li - option items
        for(var i = 0; i < selectOptionLength; i++){
            $('<li>',{
                class: 'select__item',
                html: $('<span>',{
                    text: selectOption.eq(i).text()
                })              
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
        // Find all items
        var selectItem = selectList.find('li');

        selectList.slideUp(0);
        selectGap.on('click', function(){
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
                selectList.slideDown(dur);

                selectItem.on('click', function(){
                    var chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectGap.text($(this).find('span').text());

                    selectList.slideUp(dur);
                    selectGap.removeClass('on');
                });
                
            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });     

    });
  });
//select_show
$(function(){
    $('.select_show').each(function(){
        // Variables
        var $this = $(this),
            selectOption = $this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            dur = 500;

        $this.hide();
        // Wrap all in select box
        $this.wrap('<div class="select_show"></div>');
        // Style box
        $('<div>',{
            class: 'select__gap',
            text: 'по 24'
        }).insertAfter($this);
        
        var selectGap = $this.next('.select__gap'),
            caret = selectGap.find('.caret');
        // Add ul list
        $('<ul>',{
            class: 'select__list'
        }).insertAfter(selectGap);      

        var selectList = selectGap.next('.select__list');
        // Add li - option items
        for(var i = 0; i < selectOptionLength; i++){
            $('<li>',{
                class: 'select__item',
                html: $('<span>',{
                    text: selectOption.eq(i).text()
                })              
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
        // Find all items
        var selectItem = selectList.find('li');

        selectList.slideUp(0);
        selectGap.on('click', function(){
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
                selectList.slideDown(dur);

                selectItem.on('click', function(){
                    var chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectGap.text($(this).find('span').text());

                    selectList.slideUp(dur);
                    selectGap.removeClass('on');
                });
                
            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });     

    });
  });
//ACCORDEON
$(function() {
var accordion = function(){
  var data = $('.accordion').attr('data-accordion')
  
  $('.accordion-header').on('click', function(){
        $(this).next('.accordion-body').not(':animated').slideToggle()
  })
}
accordion();    

});
$('.accordion-header').on('click', function(e){
  e.preventDefault();
    $(this)
      .toggleClass('close')
      .siblings('div')
      .slideToggle();  
});



// HOME SLIDER
$(function() {
$(".owl-slider").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    loop:true,
    nav:true,
    touchDrag:false,
    mouseDrag:false,
    margin:0,
    stagePadding:0,
    smartSpeed:450,
});
});
// HOME CAROUSEL
$(function() {
$(".owl-bestsellers").owlCarousel({
    items:4,
    loop:true,
    nav:true,
    dots:false,
    touchDrag:false,
    mouseDrag:false,
    margin:0,
    stagePadding:0,
    smartSpeed:450,
    responsive:{
        0:{
            items:1,
            nav:true
        },
         520:{
            items:2,
            nav:true
        },
        768:{
            items:3,
        },
        992:{
            items:4,
        }
    }
});
});
//COLGOTY CAROUSEL
$(function() {
$(".owl-colgoty,.owl-tunika").owlCarousel({
    items:6,
    margin: 10,
    loop:true,
    nav:true,
    dots:false,
    touchDrag:false,
    margin:0,
    stagePadding:0,
    smartSpeed:450,
    responsive:{
        0:{
            items:1,
            nav:true
        },        
        460:{
            items:2,
            nav:true
        },
         580:{
            items:3,
            nav:true
        },
        768:{
            items:4,
        },        
        992:{
            items:5,
        },
        1200:{
            items:6,
        }
    }
});
});
//bluz carousek
$(function() {



var onInitialized = function(e){
    var original = $($('.detail-slaider .active img')[0]).data('original');
    $('.big-slaid .d-wrap').empty().css({
        backgroundImage: 'url('+original+')'
    });
};
$(".detail-slaider").owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    navText: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    },
    onTranslated: onInitialized,
    onInitialized: onInitialized
});
$('.detail-slaider').on('click', 'img', function(e){
    e.preventDefault();
    var original = $(this).data('original');
    $('.big-slaid .d-wrap').empty().css({
        backgroundImage: 'url('+original+')'
    });
    return !1;
})
});

jQuery(document).ready(function($) {
    $('.block_kirpich').masonry({
        // options
        itemSelector: '.item_kirpich',
        columnWidth: '.item_kirpich',
        percentPosition: true
    });
});

// TABS HOME
$(function(){

	$("#best-tabs").on("click", ".tab", function(){

		var tabs = $("#best-tabs .tab"),
		    cont = $("#best-tabs .tab-cont");

		// Удаляем классы active
		tabs.removeClass("active");
		cont.removeClass("active");
		// Добавляем классы active
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");

		return false;
	});
});
// MENU
$('.main-menu button').click(function(){
		$(this).toggleClass('is-active');
	});

$('.main-menu button').click(function(){
		$(this).next().slideToggle(1000);
	});



 
