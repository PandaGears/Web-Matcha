function deleteImage(value) {
    var form = {
        imageurl: value
    }
    $.ajax({
        type: "POST",
        url: '/user/account/removeImage',
        data: JSON.stringify(form),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if (data === 'Success') {
                location.reload();
            } else {
                swal({
                    title: 'Error!',
                    text: `Failed to delete image.`,
                    imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'no delete',
                })
            }
        }
    });
}

function setActiveImage(value) {
    var form = {
        imageurl: value
    }
    $.ajax({
        type: "POST",
        url: '/user/account/setImage',
        data: JSON.stringify(form),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if (data === 'Success') {
                document.location.href = ('/user/account');
            } else {
                swal({
                    title: 'Error!',
                    text: `Failed to set image as active image.`,
                    imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594047930/alerts/bad_ehbqfc.jpg',
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'bad interest',
                })
            }
        }
    });
}