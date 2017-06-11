function buildItem(element){
	var div = $("<div />").addClass("col-md-4 p20h p20w");
	var caption = $("<div />").addClass("col-md-12 p20h");
	var name = $("<p />").addClass("bold big").html(element.name);
	var description = $("<p />").addClass("").html(element.description);
	var image= $("<img />").attr({
		"src": element.imagePath
	}).addClass("col-md-12");
	
	$(div).append(image);
	$(div).append(caption);
	$(caption).append(name);
	$(caption).append(description);
	$("#itemsContainer").append(div);
}

function dynamicElements(){
	var ajaxResponse = {
		status:200,
		items: [{
			name: "Trita",
			imagePath: "https://cdn1.deliveroo.co.uk/media/menus/6619/360x180.jpg?v=1473408881",
			description: "Ordina il tuo hamburger preferito a casa tua da Trita in Darsena grazie alla consegna a domicilio di Deliveroo Milano."
		},
		{
			name: "California Bakery",
			imagePath:"https://cdn1.deliveroo.co.uk/media/menus/12649/360x180.jpg?v=1475855043",
			description: "Ordina i tuoi piatti preferiti della cucina americana a casa tua da California Bakery grazie alla consegna a domicilio di Deliveroo Milano."
		},
		{
			name: "Ham Holy Burger",
			imagePath:"https://cdn1.deliveroo.co.uk/media/menus/8678/360x180.jpg?v=1473835011",
			description: "Ordina il tuo hamburger preferito a casa tua da Ham Holy Burger grazie alla consegna a domicilio di Deliveroo Milano."
		},
		{
			name: "California Bakery",
			imagePath:"https://cdn1.deliveroo.co.uk/media/menus/12649/360x180.jpg?v=1475855043",
			description: "Ordina i tuoi piatti preferiti della cucina americana a casa tua da California Bakery grazie alla consegna a domicilio di Deliveroo Milano."
		},
		{
			name: "California Bakery",
			imagePath:"https://cdn1.deliveroo.co.uk/media/menus/12649/360x180.jpg?v=1475855043",
			description: "Ordina i tuoi piatti preferiti della cucina americana a casa tua da California Bakery grazie alla consegna a domicilio di Deliveroo Milano."
		},
		{
			name: "California Bakery",
			imagePath:"https://cdn1.deliveroo.co.uk/media/menus/12649/360x180.jpg?v=1475855043",
			description: "Ordina i tuoi piatti preferiti della cucina americana a casa tua da California Bakery grazie alla consegna a domicilio di Deliveroo Milano."
		}]
	}
	$.each(ajaxResponse.items, function(index,element){
		buildItem(element);
	});
	
	$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
}


function init(){
	dynamicElements();
}

function setup(){
	$(document).on("click", "dynamicElements", function(){
		alert("dynamicElements");
	})
}
	
$(document).ready(function(){
init();
setup();
})