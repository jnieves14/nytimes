$(document).ready(function() {

});

function search() {
	// Get Search Values
	var searchTerm = $("#searchTerm").val();
	var numRecords = $("#numRecords").val();
	var startYear = $("#start-year").val();
	var endYear = $("#end-year").val();

	
	
		// Build Request
		var APIKey = "8cGdX0OgARo1sTNATo2cWy0b1Kr8bPPy";
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey" + APIKey;
	 
		$.ajax({
			url: queryURL,
			method: "GET"
		  }).then(function(response) {}
		
		
		
			// then Update UI with articles
		  $("searchTerm")

function clearResults() {
	// Empty articleList
}