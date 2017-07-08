
$(function(){

    $("#discuss .mt a").mouseover(function(){
        $(this).addClass('current').siblings('.current').removeClass('current');
        var index = $(this).index();
        number = index;
        //console.log(index);
        $('#discuss .school-introduce').hide();
        $('#discuss .school-introduce:eq('+index+')').show();
    });

    var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
    if(auto ==1){
        var number = 0;
        var maxNumber = $('#discuss .mt a').length;
        function autotab(){
            number++;
            number == maxNumber? number = 0 : number;
            //console.log("num:"+number);
            $('#discuss .mt a:eq('+number+')').addClass('current').siblings('.current').removeClass('current');
            $('#discuss .school-introduce:eq('+number+')').show().siblings().hide();
        }
//                var tabChange = setInterval(autotab,3000);
//                //鼠标悬停暂停切换
//                $('#discuss').mouseover(function(){
//                    clearInterval(tabChange);
//                });
//                $('#discuss').mouseout(function(){
//                    tabChange = setInterval(autotab,3000);
//                });
    }

    //下拉框


    $(" div.spinner i ").click(function() {
         $(this).next().slideToggle(300);
        //console.log($(this).next().children());
         $(this).next().children().mouseenter(function(){
                        $(this).addClass("active").siblings(".active").removeClass("active");
                }).click(function(){
                    //var liHtml=$(this).children().html();
                    if($(this).parent().siblings(" #schoolInput ").attr("placeholder")==="学校"){
                        location.href="schoolEvaluation.html";
                    //    $(" #schoolInput ").val(liHtml);
                    }else{
                    //    $(" #curriculumInput ").val(liHtml)
                        location.href="curriculumEvaluation.html";
                    }

         })
    });
    $(" .school-search i").click(function(){
        $(this).parent().hide().next().show();
    });
    $(" .school-search span ").click(function(e){
        //console.log("hello");
        e.preventDefault();
        location.href="schoolEvaluation.html";
    });
    $(" .curriculum-search span ").click(function(e){
        e.preventDefault();
        location.href="curriculumEvaluation.html";
    });
    $(" .curriculum-search i").click(function(){
        $(this).parent().hide().prev().show();
    });

    //查看更多按钮隐藏
    //$(" button.more").click(function(e){
    //    e.preventDefault();
    //   $(this).hide();
    //});




    //$(" div.spinner ").hover(function(){
    //    $(this).children().last().show();
    //
    //    $(this).children().last().children().mouseenter(function(){
    //        console.log($(this));
    //
    //            $(this).addClass("active").siblings(".active").removeClass("active");
    //
    //    }).click(function(){
    //        location.href="schoolEvaluation.html";
    //    })
    //
    //},function(){
    //    $(this).children().last().hide();
    //});

    $("#search").next().click(function(){
        var search=$("#search").val();
        $.ajax({

        })
    })


});