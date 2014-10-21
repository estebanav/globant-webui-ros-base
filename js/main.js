var Hackton = Hackton || {};

Hackton.init = function () {
    Hackton._data = new Firebase('https://glb-hackton.firebaseio.com/');
    $('#js-txt-message').keypress(function (e) {
        if (e.keyCode == 13) {
            var text = $('#js-txt-message').val();
            var name = $('#js-txt-name').val();
            var timestamp = Date.now();

            Hackton._data.push({name: name, text: text, timestamp: timestamp});
            $('#js-txt-message').val('');
        }
    });
    $('#js-messages').on('click', '.js-btn-delete', function (e) {
        e.preventDefault();
        var id = $(this).parents('[data-message-id]').data('message-id');
        Hackton._data.child(id).remove();
    });
    Hackton._data.on('child_added', function (snapshot) {
        displayMessage(snapshot);
    });

    Hackton._data.on('child_removed', function (snapshot) {
        removeMessage(snapshot);
    });

    function displayMessage(snapshot) {
        var $el = $('<div/>');
        $el.attr('data-message-id', snapshot.name());

        var message = snapshot.val();
        var date = new Date(message.timestamp);
        $('<div/>').text(message.text).prepend($('<em/>').text(message.name + ': ')).prepend($('<span/>').text(date.toLocaleString() + ' - ')).appendTo($el);
        $('<a href="#" />').addClass('js-btn-delete').text('Remove').appendTo($el);
        $el.appendTo($('#js-messages'));
        $('#js-messages')[0].scrollTop = $('#js-messages')[0].scrollHeight;
    }
    function removeMessage(snapshot) {
        $('[data-message-id=' + snapshot.name()+']').slideUp(function () {
            $(this).remove();
        });
    }
};

Hackton.init();
