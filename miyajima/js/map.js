window.onload = function(){
	var latlng = new google.maps.LatLng(35.731992, 139.716257);
	var myOptions = {
		zoom: 18,/*拡大比率*/
		center: latlng,/*表示枠内の中心点*/
		scrollwheel: false,
		draggable: false,
		mapTypeControlOptions: { mapTypeIds: ['map', google.maps.MapTypeId.ROADMAP] }/*表示タイプの指定*/
	};
	var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
	
	/*マーカーの設置*/
	var icon = new google.maps.MarkerImage('images/pin.png',/*アイコンの場所*/
	  new google.maps.Size(80,65),/*アイコンのサイズ*/
	  new google.maps.Point(0,0)/*アイコンの位置*/
	);
	 
	var markerOptions = {
	  position: latlng,/*表示場所と同じ位置に設置*/
	  map: map,
	  icon: icon,
	  title: '宮島組'/*マーカーのtitle*/
	};
	var marker = new google.maps.Marker(markerOptions);

}