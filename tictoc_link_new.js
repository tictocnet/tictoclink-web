(function(window) {
	var tictoc = window.tictoc = {};
	
	
	function createParams(title, msg, image, svcId, apiVer, url, iconImage, biImage, executeInfo, marketInfo) {

		var params = [];
		
		if (!title || !msg || !image || !svcId || !apiVer) { return ""; }
		
		if (title) {  params.push(["title", encodeURIComponent(title)].join("=")); 	}
		if (msg) {  params.push(["msg", encodeURIComponent(msg)].join("=")); 	}
		if (url) {  params.push(["url", encodeURIComponent(url)].join("=")); 	}
		if (image) { params.push(["image", encodeURIComponent(image)].join("=")); 	}
		if (iconImage) { params.push(["iconImage", encodeURIComponent(iconImage)].join("=")); 	}
		if (biImage) { params.push(["biImage", encodeURIComponent(biImage)].join("=")); 	}
		if (svcId) { params.push(["svcId", encodeURIComponent(svcId)].join("=")); 	}
		if (apiVer) { params.push(["apiVer", encodeURIComponent(apiVer)].join("=")); 	}
		if (executeInfo) { params.push(["executeInfo", encodeURIComponent(executeInfo)].join("=")); 	}
		if (marketInfo) { params.push(["marketInfo", encodeURIComponent(marketInfo)].join("=")); }

		return params.join("&");
	}
	
	function createTictocLink(title, msg, image, svcId, apiVer, url, iconImage, biImage, executeInfo, marketInfo) {

		url = (typeof url !== "undefined" ) ? url : "";
		iconImage = (typeof iconImage !== "undefined" ) ? iconImage : "";
		biImage = (typeof biImage !== "undefined" ) ? biImage : "";
		executeInfo = (typeof executeInfo !== "undefined" ) ? executeInfo : "";
		marketInfo = (typeof marketInfo !== "undefined" ) ? marketInfo : "[{\"os\":\"tictoc\",\"marketUrl\":\"tictoc\"}]";

		var params = createParams(title, msg, image, svcId, apiVer, url, iconImage, biImage, executeInfo, marketInfo);
		
		if (params == "" || !params) {
			return "";
		}
		
		var ua = navigator.userAgent.toLowerCase();
		var isIOS = /iphone|ipad|ipod/.test(ua);
		var isSafari = /safari/.test(ua);

		if (isIOS) {
			
			if (isSafari) {
				var tictoc_link = "tictoclink://sendurl?" + params;
			} else {
				var tictoc_link = "tictoc://sendurl?" + params;	
			}
			
		} else {
			var tictoc_link = "tictoclink://sendurl?" + params;	
		}
		
		return tictoc_link;	
	}
	
	function createIntent(link) {
		
		return link.replace('tictoclink', 'intent') + "#Intent;scheme=tictoclink;package=kr.co.tictocplus;end";
	
	}
	
	tictoc.send = function(opt) {
		opt = opt || {};
		var startTime = +new Date;
		var dist = 2000;
		var ua = navigator.userAgent.toLowerCase();
		
		var isAndroid = /android/.test(ua);
		var isChrome = /chrome/.test(ua);

		var link = createTictocLink(opt.title, opt.msg, opt.image, opt.svcId, opt.apiVer, opt.url, opt.iconImage, opt.biImage, opt.executeInfo, opt.marketInfo);
		
		if (link == '') {
			alert('no send message');
			return false;
		}
		
		var iframe = document.createElement('iframe');
		iframe.style.visibility = 'hidden';
		
		document.body.appendChild(iframe);
		
		if (isAndroid && isChrome) {
			location.href = createIntent(link);
		} else {
			iframe.src = link;	
			
			setTimeout(function() {
				var lastTime = +new Date;
				if (lastTime - startTime < dist) {
					
					if (/iphone|ipad|ipod/.test(ua)) {
						location.href ="http://bridge.tictoc.net/?id=33";
					} else if (/android/.test(ua)){
						if (isChrome) {
							location.href ="http://bridge.tictoc.net/?id=39";	
						} else {
							location.href = "market://details?id=kr.co.tictocplus";	
						}
					} else {
						location.href = 'http://www.tictoc.net';
					}
				}
			}, 500);			
			
		}
	};
	
})(window);
