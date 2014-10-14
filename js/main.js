//This function grabs data of a movie or series based on its ID after selecting it with autocomplete
function showData(id) {
	
	$.ajax({
		url: "http://www.omdbapi.com/",
		dataType: "jsonp",
		data: {
			i: id,
			plot: "full"
		},
		success: function( data ) {
			
			//This determines the number of full stars and hollow stars in the ratings section
			var stars = "";
			for (i = 0; i < 10; i++) {
				var isFullStar = i <= Math.round(data.imdbRating) ? "class='full'" : "";
				stars += "<star "+isFullStar+"></star>";
			}
			
			$("#data").html(" \
			<img src='" + data.Poster + "'/> \
			<div> \
				<h1>" + data.Title + " <span>(" + data.Year + ")<br><a href='http://www.imdb.com/title/" + data.id + "/'>View on IMDB >></a></span></h1> \
				<h2><span>" + data.Type + " - " + data.Genre + "</span><span>" + data.Rated + " | " + data.Runtime + "</span></h2> \
				<hr> \
				<h3>Creators:</h3> <br><span>Director(s): " + data.Director + " </span> <br> <span>Writer(s): " + data.Writer + "</span> <br> <br> \
				<h3>Actors:</h3><span> " + data.Actors + "</span>  \
				<hr> \
				<p> " + data.Plot + " </p> \
				<h4><span>Language: " + data.Language + "</span><span>Country: " + data.Country + "</span></h4> \
				<span>" + data.Awards + "</span> \
			</div> \
			<span class='stars'>" + stars + "<br><em>from " + data.imdbVotes + " Users</em> </span> \
			").addClass('show')
			
		}
	});
	
}


	$("#movie-search").select().autocomplete({

		source: function( request, response ) {

			$.ajax({
				url: "http://www.omdbapi.com/",
				dataType: "jsonp",
				data: {
					s: request.term
				},
				success: function( data ) {

					var query = [];

					for (i = 0; i < data.Search.length;i ++) {

						query.push({
							value: data.Search[i].Title,
							label: data.Search[i].Title,
							desc: data.Search[i].Year,
							type: data.Search[i].Type,
							id: data.Search[i].imdbID
						})

					}

					response(query);
					
				}
			});
		
		},
		minLength: 2,
		select: function( event, ui ) {
			showData(ui.item.id);
		}
		
	}).autocomplete( "instance" )._renderItem = function( ul, item ) {
		return $( "<li>" )
		.append( "<a>" + item.label + "<br> <div class='search-desc'><span>" + item.type + "</span><span>" + item.desc + "</span></div></a>" )
		.appendTo( ul );
	};
