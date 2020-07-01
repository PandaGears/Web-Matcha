$(document).ready(function() {
    (function worker() {
        var notifications = {
            likes: 0,
            messages: 0,
            views: 0
        }
        var oldNotifications = {
            likes: 0,
            messages: 0,
            views: 0
        }
        $.ajax({
            type: "POST",
            url: '/user/notifications',
            success: function(data) {
                notifications.likes = data.likes;
                notifications.messages = data.messages;
                notifications.views = data.views;

                document.getElementById("Notif").innerHTML = data.messages + data.likes + data.views;
                document.getElementById("NotifLike").innerHTML = data.likes;
                document.getElementById("NotifMessage").innerHTML = data.messages;
                document.getElementById("NotifView").innerHTML = data.views;

                if (notifications.likes > oldNotifications.likes) {
                    $('#notifys').html(`<div class="toast-header"><img class="rounded mr-2" src="https://res.cloudinary.com/ddrrwygt1/image/upload/v1591020989/logo_qdca6m.png" alt="Logo" style="width:25px;"/><strong class="mr-auto">Pan-der</strong><button class="ml-2 mb-1 close" type="button" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">x</span></button></div>
					<div
						class="toast-body">Daaaang, someone liked you! Go to the <a href='/notifications/likes'>likes</a> page to dismiss this popup.</div>
				</div>`);
                    $('#notifys').toast('show');
                }
                if (notifications.views > oldNotifications.views) {
                    $('#notifys').html(`<div class="toast-header"><img class="rounded mr-2" src="https://res.cloudinary.com/ddrrwygt1/image/upload/v1591020989/logo_qdca6m.png" alt="Logo" style="width:25px;"/><strong class="mr-auto">Pan-der</strong><button class="ml-2 mb-1 close" type="button" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">x</span></button></div>
					<div
						class="toast-body">.... Yer profile is being Stalked. Go to the <a href='/notifications/views'>views</a> page to dismiss this popup.</div>
				</div>`);
                    $('#notifys').toast('show');
                }
                if (notifications.messages > oldNotifications.messages) {
                    $('#notifys').html(`<div class="toast-header"><img class="rounded mr-2" src="https://res.cloudinary.com/ddrrwygt1/image/upload/v1591020989/logo_qdca6m.png" alt="Logo" style="width:25px;"/><strong class="mr-auto">Pan-der</strong><button class="ml-2 mb-1 close" type="button" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">x</span></button></div>
					<div
						class="toast-body">Ya got mail, cub! Go to the <a href='/chat'>chat</a> page to dismiss this popup.</div>
				</div>`);
                    $('#notifys').toast('show');
                }

            },
            complete: function() {
                setTimeout(worker, 5000);
            }
        });
    })();
});