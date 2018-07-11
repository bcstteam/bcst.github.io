$(function() {
    /* 活动相关 */
    $('#getITC').click(function() {
        window.open('/archives')
    })

    $('#telegramMenu').click(function() {
        window.open('https://t.me/joinchat/HmvgzElBk7wgY9YCMnPy7g')
    })

    $('#telegramMenuKn').click(function() {
        window.open('https://t.me/joinchat/HmvgzElBk7wgY9YCMnPy7g')
    })

    $('#twitterMenu').click(function() {
        window.open('https://twitter.com/BCST_blockchain')
    })

    $('#twitterMenuKn').click(function() {
        window.open('https://twitter.com/BCST_blockchain')
    })

    $('#facebookMenu').click(function() {
        window.open('https://www.facebook.com/Blockchain-Security-244067409685381')
    })

    $('#mediumMenu').click(function() {
        window.open('https://www.facebook.com/Blockchain-Security-244067409685381')
    })

    /* 活动相关 */

    //判断浏览器类型
    var ua = navigator.userAgent;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid || ipad;
    //判断是什么端访问的

    //点击触发选中事件
    $('.dlgourp>dl').click(function() {
        $('.dlgourp>dl').removeClass('onthisdl animated pulse');
        $(this).addClass('onthisdl animated pulse');
        var pid = $(this).index();
        $('.solution>div').removeClass('solutionAshow solutionAshow fadeIn');
        $('.solution>div').eq(pid).addClass('solutionAshow solutionAshow fadeIn');
        if (isMobile) {
            $('html, body').animate({
                scrollTop: $("#s1").offset().top - 60
            }, 1000, function() {
                // $('.top ul').removeClass('showmenu');
            });
        } else {
            $('html, body').animate({
                scrollTop: $("#s1").offset().top - 50
            }, 1000, function() {
                // $('.top ul').removeClass('showmenu');
            });
        }

    })

    $('.showmenu').click(function() {
        $('.top ul').toggleClass('showmenu');
    })

    $('#m8').click(function() {
        window.open('https://twitter.com/BCST_blockchain')
    })

    if (isMobile) {

        $('.weixin').click(function() {
            $('#ewmceng').show();
        })

        $(document).click(function() {
            $('#ewmceng').hide();
        })

        $('#ewmceng').click(function(event) {
            return false;
        })


        $('.weixin').click(function(event) {
            return false;
        })

        //滚动到指定位置
        $("#m1").click(function() {
            $('html, body').animate({
                scrollTop: $("#m11").offset().top
            }, 1000, function() {
                $('.top ul').removeClass('showmenu');
            });
        });
        $("#m2").click(function() {
            $('html, body').animate({
                scrollTop: $("#m999").offset().top
            }, 1000, function() {
                $('.top ul').removeClass('showmenu');
            });
        });
        $("#m3").click(function() {
            $('html, body').animate({
                scrollTop: $("#m33").offset().top
            }, 1000, function() {
                $('.top ul').removeClass('showmenu');
            });
        });
        $("#m4").click(function() {
            $('html, body').animate({
                scrollTop: $("#m22").offset().top
            }, 1000, function() {
                $('.top ul').removeClass('showmenu');
            });
        });
        $("#m5").click(function() {
            $('html, body').animate({
                scrollTop: $("#m55").offset().top
            }, 1000, function() {
                $('.top ul').removeClass('showmenu');
            });
        });
        $("#m7").click(function() {
            $('html, body').animate({
                scrollTop: $("#m77").offset().top
            }, 1000, function() {
                $('.top ul').removeClass('showmenu');
            });
        });

        //判断滚动条高度大于110时改变导航背景颜色
        $(window).scroll(function() {
            var windowTop = $(window).scrollTop();
            if (windowTop >= 110) { //判断小于则为向上滚动
                $('.top').addClass('topbg');
            } else {
                $('.top').removeClass('topbg');
            }
        });
    } else {
        //只针对PC缩放时产生刷新
        //		$(window).resize(function() {
        //			//页面缩放时触发刷新页面 解决canvas动画无法自动适配浏览器宽度
        //			window.location.reload();
        //		});
        //滚动条高度大于50px触发滚动特效
        //滚动到指定位置

        $('.weixin').hover(function() {
            $(this).find('.weixin2').show();
        }, function() {
            $(this).find('.weixin2').hide();
        })
        $("#m1").click(function() {
            $('html, body').animate({
                scrollTop: $("#m11").offset().top
            }, 1000);
        });
        $("#m2").click(function() {
            $('html, body').animate({
                scrollTop: $("#m999").offset().top - 80
            }, 1000);
        });
        $("#m3").click(function() {
            $('html, body').animate({
                scrollTop: $("#m33").offset().top - 80
            }, 1000);
        });
        $("#m4").click(function() {
            $('html, body').animate({
                scrollTop: $("#m22").offset().top - 80
            }, 1000);
        });
        $("#m5").click(function() {
            $('html, body').animate({
                scrollTop: $("#m55").offset().top - 80
            }, 1000);
        });
        $("#m7").click(function() {
            $('html, body').animate({
                scrollTop: $("#m77").offset().top - 80
            }, 1000);
        });

        $(window).scroll(function() {
            var windowTop = $(window).scrollTop();
            if (windowTop >= 110) { //判断小于则为向上滚动
                $('.topmenu').addClass('menubg');
            } else {
                $('.topmenu').removeClass('menubg');
            }
        });
    }
})