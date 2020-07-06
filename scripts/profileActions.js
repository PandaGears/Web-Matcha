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
                    imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594031136/alerts/disliked_cptwgz.jpg',
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'disliked',
                }).then(function() {
                    window.location.reload();
                })
            } else if (data == 'undisliked') {
                swal({
                    title: 'Dislike Removed!',
                    text: `You removed your dislike on this user.`,
                    imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594037190/alerts/undislike_dbs887.jpg',
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'undisliked',
                }).then(function() {
                    window.location.reload();
                })
            } else
                swal({
                    title: 'Error!',
                    text: `Unknown error`,
                    imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594031137/alerts/error_vvijl5.jpg',
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'nope',
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
                    imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594031139/alerts/liked_pmszzj.jpg',
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'liked',
                }).then(function() {
                    window.location.reload();
                })
            } else if (data == 'unliked') {
                swal({
                    title: 'Like Removed!',
                    text: `You unliked this user.`,
                    imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594031139/alerts/like_remove_zs2sjk.jpg',
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'unliked',
                }).then(function() {
                    window.location.reload();
                })
            } else if (data == 'blocked')
                swal({
                    title: 'Error!',
                    text: `This user has blocked you... Awks`,
                    imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594031136/alerts/blocked_ufmmrl.jpg',
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'blocked',
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
                        imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594031136/alerts/blocker_qpy93b.jpg',
                        imageWidth: 400,
                        imageHeight: 400,
                        imageAlt: 'blocker',
                    })
                    .then(function() {
                        window.location.reload();
                    })
            } else {
                swal({
                        title: 'User Unblocked!',
                        text: `You removed your block on this user.`,
                        imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594033668/alerts/unblock_cfcmvr.jpg',
                        imageWidth: 400,
                        imageHeight: 400,
                        imageAlt: 'unblocked',
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
                swal({
                        title: 'User Reported!',
                        text: `You have successfully reported this user.`,
                        imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594031139/alerts/reporter_ugno5j.jpg',
                        imageWidth: 400,
                        imageHeight: 400,
                        imageAlt: 'reported',
                    })
                    .then(function() {
                        window.location.reload();
                    })
            } else {
                swal({
                        title: 'Already Reported',
                        text: `Look, we know they messed up, but no spamming the report!`,
                        imageUrl: 'https://res.cloudinary.com/ddrrwygt1/image/upload/v1594033513/alerts/report_spam_fshucf.jpg',
                        imageWidth: 400,
                        imageHeight: 400,
                        imageAlt: 'no spam',
                    })
                    .then(function() {
                        window.location.reload();
                    })
            }
        }
    });
}