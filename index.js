  $.getJSON("http://www.ipip5.com/today/api.php?type=json",function(data){
    console.log(data);
    $(".list-group").append('<li class="list-group-item active">历史上的今天:'+data.today+'</li>')
   for(var i=0;i<data.result.length;i++){
		$(".list-group").append('<li class="list-group-item">'+data.result[i].year+'年:'+data.result[i].title+'</li>')
	}
  })


