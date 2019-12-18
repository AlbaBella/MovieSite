jQuery(document).ready(function(){
    
    axios.get('http://csc225.mockable.io/movies').then(function(response){

        var moviesHTML=response.data.map(function(movie){

            return '<p class="movie" data-movie="'+movie.id+'">' +movie.title+'<p>';
        });

        $('#movies').html(moviesHTML);
    });

    $('.movies').html('<img class="mx- auto loading" src="https://i.gifer.com/origin/44/446bcd468478f5bfb7b4e5c804571392_w200.webp" alt="loading">');


    $('body').on('click','.movie',function(){
        var id=$(this).data('movie');
        var url='http://csc225.mockable.io/movies/'+id;
        $('.card').html('<img class="mx-auto loading" src="https://i.gifer.com/origin/44/446bcd468478f5bfb7b4e5c804571392_w200.webp" alt="loading">');
        axios.get(url).then(function(response){
            var movie=response.data;
            var moviePoster='<img class="card-img-top" src="' + movie.poster + '">';
           
            var movieHTML='<h4 class="card-title pt-2"> Title: '+ movie.title +'</h4>';
            movieHTML += '<p class="card-text strong"> Director: ' + movie.director+ '</p>';
            movieHTML += '<p class="italic"> Release date: ' + movie.release + '</p>';
            $('.card').html(moviePoster+movieHTML);
            
        });
       
    });
});