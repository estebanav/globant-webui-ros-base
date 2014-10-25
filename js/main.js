var Message = {
    name: '',
    text:'',
    timestamp: Date.now(),
    getDate: function(){
        var date = new Date(this.timestamp);
        return date.toLocaleString();
    },
    getHTMLMessage: function(){
        var $msg = $('<div/>');
        $msg.text(this.text + ' - ');
        $msg.prepend($('<em/>').text(this.name + ': '));
        $msg.prepend($('<span/>').text(this.getDate() + ' - '));
        $msg.append($('<a href="#" />').addClass('js-btn-delete').text('Remove'));
        
        return $msg;
    }
};

var dataSource = new Firebase('https://glb-hackton.firebaseio.com/');


var Hackton = (function () {

    function init() {
        initData();
        bindEvents();
    }
    
    function initData() {
        dataSource.on('child_added', function (snapshot) {
            displayMessage(snapshot);
        });

        dataSource.on('child_removed', function (snapshot) {
            removeMessage(snapshot);
        });
    }
    
    
    function bindEvents() {
        
        $('#js-txt-message').keypress(function (e) {
            if (e.keyCode == 13) {
                var text = $('#js-txt-message').val();
                var name = $('#js-txt-name').val();
                $('#js-txt-message').val('');
                
                
                var message = Object.create(Message);
                message.name = name;
                message.text = text;
                message.timestamp = Date.now();
                
                dataSource.push(message);
                
            }
        });
        
        
        $('#js-messages').on('click', '.js-btn-delete', function (e) {
            e.preventDefault();
            var id = $(this).parents('[data-message-id]').data('message-id');
            dataSource.child(id).remove();
        });
    }



    function displayMessage(snapshot) {
        var $el = $('<div/>');
        $el.attr('data-message-id', snapshot.name());

        var message = snapshot.val();
        
        
        $el.append(message.getHTMLMessage());
        
        $el.appendTo($('#js-messages'));
        
    }
    
    
    function removeMessage(snapshot) {
        $('[data-message-id=' + snapshot.name() + ']').fadeOut(function () {
            $(this).remove();
        });
    }
    
    return{
        init: init
    };

})();

Hackton.init();
