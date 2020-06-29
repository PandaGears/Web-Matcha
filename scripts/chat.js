function setActive(id) {
    var elements = document.getElementsByClassName("active_chat");
    if (elements)
        var element = elements[0];
    if (element)
        element.classList.remove(`active_chat`);
    var selectedChat = document.getElementById(id);
    selectedChat.className += ' active_chat';

    let form = {
        chatter: id
    }
    $.ajax({
        type: "POST",
        url: '/chat',
        data: JSON.stringify(form),
        contentType: "application/json; charset=utf8mb4",
        dataType: "json",
        success: function(data) {
            location.reload();
        }
    });
}

function sendMessage(id) {
    let form = {
        to: id,
        message: document.getElementById("messageBody").value
    }
    $.ajax({
        type: "POST",
        url: '/chat/message',
        data: JSON.stringify(form),
        contentType: "application/json; charset=utf8mb4",
        dataType: "json",
        success: function(data) {
            document.getElementById("messageBody").value = '';
            location.reload();
        }
    });
}

(function worker2() {
    $.ajax({
        type: "POST",
        url: '/chat/message/refresh',
        success: function(data) {
            $('#populateme').html(data);
        },
        complete: function() {
            setTimeout(worker2, 500);
        }
    });
})();

$("#messageBody").keyup(function(event) {
    if (event.keyCode === 13) {
        $('#sendMsg').click();
    }
});