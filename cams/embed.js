var SENSORABLE = SENSORABLE || (function(){
	return {
		load : function(camId) {
			
			var container = document.getElementById(camId);
			var w = container.clientWidth;
			container.innerHTML = '<iframe style="width:100%; height:'+w+'px; overflow:hidden; border:none;" id="iFrameSensorable" src="cam-embed.html?c=' + camId + '"></iframe>';
		}
	};
}());