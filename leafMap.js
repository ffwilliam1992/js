/*
三个对象，一个圆与一个多边形是在顶层的一个图层
图书馆的marker则是在底层，所以在切换下面的图层的时候回消失
*/
//设置中心点
var position=[32.1162583,118.9549996];
//设置顶层图层对象
var polygon = L.polygon([
                         [32.1190641,118.9499907],
                         [32.1184635,118.9502725],
                         [32.1186564,118.9508455]
                     ]);
var circle = L.circle(position, 50, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.9
});
var spots = L.layerGroup([polygon,circle]);
//设置底图样式
var layers = {
		openstreetmap: L.tileLayer('http://{s}.tile.openstreetmap.org//{z}/{x}/{y}.png'),
		greyLayer: L.tileLayer('http://{s}.tiles.mapbox.com/v3/openplans.map-g4j0dszr/{z}/{x}/{y}.png')
	};
//地图初始化，默认底图为openstreetmaps
var map = L.map('map', {
center: position,
zoom: 13,
layers: [layers.openstreetmap, spots]
});
//控制端选项
var baseMaps = {
	    "openstreetmap": layers.openstreetmap,
	    "greyLayer": layers.greyLayer
	};

	var overlayMaps = {
	    "Cities": spots
	};
//添加控制层
L.control.layers(baseMaps, overlayMaps).addTo(map);



var libaryMarker=L.marker(position).addTo(map);
libaryMarker.bindPopup("<b>Hello,Wolrd!</b><br>杜厦图书馆").openPopup();
//地图上添加圆形
circle.addTo(map);

//地图上添加多边形
polygon.addTo(map).bindPopup("第九食堂");
//在地图上的一点设置备注信息
var popup = L.popup()
.setLatLng([32.1184445,118.9502725])
.setContent("I am a standalone popup.")
.openOn(map);


//添加触发函数
//function onMapClick(e) {
//    alert("You clicked the map at " + e.latlng);
//    L.marker(e.latlng).addTo(map).bindPopup("This Position is:"+e.latlng);
//}
//
//map.on('click', onMapClick);