$(function() {
    $("#hamburger-icon").hover(
        function() {
            $("#hamburger-icon").css("background-color", "#8f8f8f")
        },
        function() {
            $("#hamburger-icon").css("background-color", "rgba(0,0,0,0)")
        }
    )
});


$(function() {
    $("#close").hover(
        function() {
            $("#close").css("background-color", "#8f8f8f")
        },
        function() {
            $("#close").css("background-color", "rgba(0,0,0,0)")
        }
    )
});

$(function() {
    $("#hamburger-icon").click(function() {
        $("#menu").slideDown();
        $("#hamburger-icon").css("display", "none");
        $("#close").css("display", "inline-block");
    })
});

$(function() {
    $("#close").click(function() {
        $("#menu").slideUp();
        $("#hamburger-icon").css("display", "inline-block");
        $("#close").css("display", "none");
    })
});

$(function() {
    $(window).resize(function() {
        var width = $(window).width();
        if (width > 700) {
            $("#menu").css("display", "inline-block");
            $("#hamburger-icon").css("display", "none");
            $("#close").css("display", "none");
        } else {
            $("#menu").css("display", "none");
            $("#hamburger-icon").css("display", "inline-block");
            $("#close").css("display", "none");
        };
    });
});

// $(function(){
//     var timer = false;
//     $(window).resize(function() {
//         if (timer !== false) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(function() {
//             var width = $(window).width();
//             if (width > 700) {
//                 // location.reload();
//                 $("#menu").css("display", "inline-block");
//                 $("#hamburger-icon").css("display", "none");
//                 $("#close").css("display", "none");
//             };
//         }, 200);
//     });
// });