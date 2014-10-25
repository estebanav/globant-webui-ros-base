function Favorite(id) {
    this._id = id;
    this._timestamp = Date.now();
}

Favorite.prototype.getCode = function(){
    return this._id;
};

var dataSource = new Firebase('https://glb-hackton.firebaseio.com/bernardo/favorites/');


var Hackton = (function () {

    function init() {
        initData();
        bindEvents();
    }

    function initData() {
        dataSource.on('child_added', function (snapshot) {
            showFavorite(snapshot);
        });

        dataSource.on('child_removed', function (snapshot) {
            removeFavorite(snapshot);
        });
    }


    function bindEvents() {

        $('button.add').click(function (e) {
            e.preventDefault();
            var code = $(this).closest('[data-movie]').data('movie');
            var fav = new Favorite(code);
            dataSource.push(fav);
        });
        
        $('button.remove').click(function (e) {
            e.preventDefault();
            var firebaseId = $(this).closest('[data-firebase-id]').data('firebase-id');
            
            dataSource.child(firebaseId).remove();
        });

    }

    function showFavorite(snapshot){
        var fav = snapshot.val();
        var code = Favorite.prototype.getCode.call(fav);
        $('[data-movie='+code+']').addClass('favorited');
        $('[data-movie='+code+']').attr('data-firebase-id',snapshot.name());
    }
    
    
    function removeFavorite(snapshot){
        var fav = snapshot.val();
        var code = Favorite.prototype.getCode.call(fav);
        $('[data-movie='+code+']').removeClass('favorited');
        $('[data-movie='+code+']').removeAttr('data-firebase-id');
    }

    
    return{
        init: init
    };

})();

Hackton.init();
