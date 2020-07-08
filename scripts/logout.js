function logoutinator() {
    $.ajax({
        type: "POST",
        url: '/user/logout',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function() {
            swal({
                title: 'Laters',
                text: `Successfully logged out`,
                imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594209411/alerts/logout_o8ohag.jpg',
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: 'logout',
            }).then(function() {
                location.href = "/";
            })
        }
    });
}