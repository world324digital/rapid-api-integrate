console.log('our app code goes here');
$("#search").click(function(e){
	e.preventDefault();
	$('#display').empty();
fetch("https://restcountries-v1.p.rapidapi.com/name/" + searchValue ,{
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "9f24baf32fmshbb4ae565ad2c065p11499ajsn78a07e72d500"
	}
})
.then(function(response) {
 })
 .then(function(data) {
 })
});
