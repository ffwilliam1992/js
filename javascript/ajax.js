window.onload=function(){
	$.ajax({
		type:'POST',
		url:'http://localhost:8080/taxi_analysis/api/gis/Hello2',
		dataType:'json',
		success:function(data){
			alert(data.result);
		},
		error: function (){
			alert("error");
		}
	});
};