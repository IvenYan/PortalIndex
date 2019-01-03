//saveStorage('self_message','wso2_global_board');
function saveStorage(id,target) {
	var data = document.getElementById(id).value; //取值
	var time = new Date().getTime();
	if(data!=null && data.trim()!=''){
		
		window.localStorage.setItem(time, data); //保存
		alert("数据已经保存！");
	}
	loadStorage(target);
}

function loadStorage(id) {
	var result = '';
	if(window.localStorage.length==0){
		window.localStorage.setItem("admin", "留言展示区");
	}
	for (var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key); //读取
		if(key=="admin"){
			result += "<p>"+key+"："+value+'</p>';
		}else{		
			var date = new Date();
			date.setTime(key);
			var datestr = date.toGMTString(); //格林威治时间
			result +=  "<p>"+'用户**：' + value +';  '+'</p>' ;
		}
	}
	var target = document.getElementById(id);
	target.innerHTML = result; 
}

function clearStorage(value) {
	var data_password = document.getElementById(value).value; //取值
	hash = hex_md5(data_password);
	if(hash=='f5582007ca03a12a2c270adeb8a63b05'){
		window.localStorage.clear();
		loadStorage('wso2_global_board');
		alert("您已经成功清空留言板！");
		document.getElementById("closeMyModal").click();
	}else{
		document.getElementById("myModal").setAttribute("class", "modal fade");
		alert("您还没有权限清空留言！");
		document.getElementById("closeMyModal").click();
	}
}

//对DIV进行隐藏，sample:id=#ddd
function show_more_content(id,open_true,target_id,show_content,hide_content) {
	if(open_true==null){
		if($("#"+id).css("display")=="none"){
			$("#"+id).show(600).addClass("show");
			$("#"+target_id).text(show_content);
		}else{
			//$("#div1").hide(8000,function()利用回调函数达到效果
			$("#"+id).hide(300).removeClass("show");
			$("#"+target_id).text(hide_content);
		}
	}else if(open_true){
		$("#"+id).show(600).addClass("show",function(){
			$("#"+target_id).text(show_content);
		});
	}else{
		$("#"+id+" div").hide(300).removeClass("show");
		$("#"+target_id).text(hide_content);
	}
}

//对右侧固定目标DIV进行展示，sample:id=#ddd
function show_right_div_content(id) {
	if($("#body-content-1").css("display")=="none"){
		
	}else{
		show_more_content('body-content-1',false)
	}
	
	if($("#"+id).css("display")=="none"){
		$("#"+id).addClass("show");
		//$("#wso2_global_board").html(function(i,origText){
		//	return "Old html: " + origText + " New html: Hello <b>world!</b>(index: " + i + ")";
		//  });
	}else{
		//$("#div1").hide(8000,function()利用回调函数达到效果
		$("#"+id).hide(300).removeClass("show");
	}
}


//清除文本框中的内容
//clear_message_context('self_message');
function clear_message_context(source){
	document.getElementById(source).value='';
}

//Version 2.0
//Add message in marquee
//saveStorage_new('self_message','wso2_global_board')
function saveStorage_new(source,target) {
	var data = document.getElementById(source).value; //取值
	tmp = '<p>用户**：'+data+'</p>'; 
	var fso,f1, tf;
	fso = new ActiveXObject("Scripting.FileSystemObject");
	// 创建新文件
	f1 = fso.GetFile("d:\\test1.txt");
	tf = f1.OpenAsTextStream(ForWriting, true);
	// 填写数据，并增加换行符
	tf.WriteLine(tmp) ;
	tf.Close();
	document.getElementById(target).appendChild(tmp);
}

function loadStorage_new(id) {
	
}

function clearStorage_new(password_source,target) {
	var data_password = document.getElementById(target).value; //取值
	hash = hex_md5(data_password);
	if(hash=='f5582007ca03a12a2c270adeb8a63b05'){
		document.getElementById(target).value='<p>Admin：留言展示区</p>';
		alert("您已经成功清空留言板！");
		//关闭Modal
		document.getElementById("closeMyModal").click();
	}else{
		document.getElementById("myModal").setAttribute("class", "modal fade");
		alert("您还没有权限清空留言");
		//关闭Modal
		document.getElementById("closeMyModal").click();
	}
}