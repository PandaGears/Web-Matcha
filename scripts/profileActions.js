function dislikeUser(user) {
    let form = {
        disliked: user
    }
    $.ajax({
        type: "POST",
        url: '/user/dislike',
        data: JSON.stringify(form),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if (data == 'disliked') {
                swal({
                    title: 'Disliked!',
                    text: `You disliked this user.`,
                    type: 'success'
                }).then(function() {
                    window.location.reload();
                })
            } else if (data == 'undisliked') {
                swal({
                    title: 'Dislike Removed!',
                    text: `You removed your dislike on this user.`,
                    type: 'success'
                }).then(function() {
                    window.location.reload();
                })
            } else
                swal({
                    title: 'Error!',
                    text: `Unknown error`,
                    type: 'error'
                }).then(function() {
                    window.location.reload();
                })
        }
    })
}

function likeUser(user) {
    let form = {
        type: 1,
        liked: user
    }
    $.ajax({
        type: "POST",
        url: '/user/like',
        data: JSON.stringify(form),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if (data == 'liked') {
                swal({
                    title: 'Liked!',
                    text: `You liked this user.`,
                    type: 'success'
                }).then(function() {
                    window.location.reload();
                })
            } else if (data == 'unliked') {
                swal({
                    title: 'Like Removed!',
                    text: `You unliked this user.`,
                    type: 'success'
                }).then(function() {
                    window.location.reload();
                })
            } else if (data == 'blocked')
                swal({
                    title: 'Error!',
                    text: `This user has blocked you... Awks`,
                    type: 'error'
                }).then(function() {
                    window.location.reload();
                })
        }
    })
}

function blockUser(user) {
    let form = {
        blocked: user
    }
    $.ajax({
        type: "POST",
        url: '/user/block',
        data: JSON.stringify(form),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if (data == 'blocked') {
                swal({
                        title: 'User Blocked!',
                        text: `You have successfully blocked this user.`,
                        type: 'success'
                    })
                    .then(function() {
                        window.location.reload();
                    })
            } else {
                swal({
                        title: 'User Unblocked!',
                        text: `You removed your block on this user.`,
                        type: 'success'
                    })
                    .then(function() {
                        window.location.reload();
                    })
            }
        }
    });
}

function reportUser(user) {
    let form = {
        reported: user
    }
    $.ajax({
        type: "POST",
        url: '/user/report',
        data: JSON.stringify(form),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if (data == 'reported') {
                swal(
                    'User Reported!',
                    `You have successfully reported this user.`,
                    'success'
                )
            } else {
                swal(
                    'Already Reported',
                    `You have already reported this user.`,
                    'success'
                )
            }
            window.location.reload();
        }
    });
}