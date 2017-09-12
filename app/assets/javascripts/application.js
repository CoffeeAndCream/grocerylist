// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-material-design
//= require bootstrap-sprockets
//= require selectize
//= require_tree .

function searchableMenu() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("searchableTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


$(document).on('turbolinks:load', function() {
  $('.shoppingCartRemoveIcon').hover(function() {
    console.log($(this));
    $(this).next().fadeToggle();
  });
  $('.shoppingCartAddIcon').hover(function() {
    console.log($(this).next());
    $(this).next().fadeToggle();
  });
  $(".quantity-autocomplete").selectize({
				maxItems: 2,
				valueField: 'id',
				labelField: 'title',
				searchField: 'title',
				options: [
					{id: 1, title: 'Pounds'},
					{id: 2, title: 'Ounces'},
          {id: 3, title: 'Cups'},
          {id: 4, title: 'Quarts'},
          {id: 5, title: 'Tablespoons'},
          {id: 6, title: 'Teaspoons'},
          {id: 7, title: 'Pint'},
          {id: 8, title: 'Gallon'},
          {id: 9, title: 'Milliliter'},
          {id: 10, title: 'Liter'}
				],
				create: false
			});
});
