
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

    //二级联动下拉框
    //var provinceList = [
    //    '北京市',
    //    '上海市',
    //    '浙江省'
    //];
    //var cityList = [
    //    ['东城区', '西城区', '海淀区'],
    //    ['闵行区', '浦东区', '金山区'],
    //    ['杭州市', '宁波市', '绍兴市', '嘉兴市']
    //];
    ////读取每个省份名称，生成一个option，追加到select
    //var html = '';
    //for (var i = 0; i < provinceList.length; i++) {
    //    var p = provinceList[i];
    //    html += `<option value="${i}">${p}</option>`;
    //}
    //$('#select-province').append(html);
    //
    ////为省份select添加“选项改变”事件绑定
    //$('#select-province').change(function(){
    //    console.log($(this).val());//select的value就是当前选中的option的value
    //    console.log(this.value);//select的value就是当前选中的option的value
    //    if(this.value==='-1'){
    //        return; //当前用户选定了“请选择城市”
    //    }
    //    //获取当前选定的省份的地级市列表
    //    var cities = cityList[ this.value ];
    //    console.log(cities);
    //    var html = '<option value="-1">—请选择地级市—</option>';
    //    for(var i=0; i<cities.length; i++){
    //        var c = cities[i];
    //        html+=`<option value="${i}">${c}</option>`;
    //    }
    //    //$('#select-city').append(html);
    //    $('#select-city').html(html);
    //});


    $(" div.spinner i ").click(function() {
         $(this).next().slideToggle(300);
        //console.log($(this).next().children());
         $(this).next().children().mouseenter(function(){
                        $(this).addClass("active").siblings(".active").removeClass("active");
                }).click(function(e){
                    e.preventDefault();
                    //console.log("1");
                    var liHtml=$(this).children().html();
                    if($(this).parent().siblings(" #schoolInput ").attr("placeholder")==="学校"){
                        //location.href="schoolEvaluation.html";
                        //console.log("1");
                        $(" #schoolInput ").val(liHtml);
                    }else{
                        //console.log("1");
                        $(" #curriculumInput ").val(liHtml);

                        //location.href="curriculumEvaluation.html";
                    }

         })
    });
    $(" #indexSearch ").click(function(){
        var input=$(this).parent().siblings(".search").children().children(".input");
        //console.log(input);
        for(var i=0;i<input.length;i++){
            console.dir(input[0].value);
            if(input[0].value!=="" && input[1].value===""){
                //console.log("1");
                location.href="schoolComment.html";
            }else if(input[0].value==="" && input[1].value!==""){
                //console.log("2");
                location.href="curriculumComment.html";
            }else if(input[0].value!=="" && input[1].value!==""){
                //console.log("3");
                location.href="schoolComment.html";
            }else{
                //console.log("4");
                location.href="index.html";
            }

        }
        //if(input.attr("id")==="schoolInput"){
        //    //location.href="schoolComment.html";
        //}else if(input.attr("id")==="curriculumInput"){
        //    //location.href="curriculumComment.html";
        //
        //}
    })

    //$(" #schoolSearch i").click(function(){
    //    $(this).parent().hide().next().show();
    //});
    //$(" #schoolSearch span ").click(function(e){
    //    //console.log("hello");
    //    e.preventDefault();
    //    location.href="schoolEvaluation.html";
    //});
    //$(" #curriculumSearch span ").click(function(e){
    //    e.preventDefault();
    //    location.href="curriculumEvaluation.html";
    //});
    //$(" #curriculumSearch i").click(function(){
    //    $(this).parent().hide().prev().show();
    //});



    //$("#search").next().click(function(){
    //    var search=$("#search").val();
    //    $.ajax({
    //
    //    })
    //})


});