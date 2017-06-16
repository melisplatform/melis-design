/*var designElement = (function() {

	function tabLoadCss() {
		var tabLink = $(this).find('.tab-element');
		var tabDataId = tabLink.data('id');
		activeTabId = tabDataId;
		reLoadResources(activeTabId);
	}

	function toolsLoadCss() {
		var toolsDataId = $(this).data('tool-id');
		activeTabId = toolsDataId;
		reLoadResources(activeTabId);
	}

	function reLoadResources(key) {
		window.loadResources(key);
	}

	// Click Event for Tab Element
	$('body').on('click', '#melis-id-nav-bar-tabs li', tabLoadCss);
	// Click Event for Tab Element
	$('body').on('click', '#sub-load-melisdesign_leftnemu .melis-opentools', toolsLoadCss);

	return {
		tabLoadCss 			: 	tabLoadCss,
		toolsLoadCss 		: 	toolsLoadCss,
		reLoadResources		: 	reLoadResources,
	};

})();


// Fetch Data in app interface
window.loadResources = function(key) {
	console.log('Key in loadResources ', key);
	if(activeTabId == key) {
		// ...
		$.ajax({
	        type        : 'GET', 
	        url         : '/melis/MelisDesign/DesignSidebar/getResource',
	        data        : { key : key },
	        dataType    : 'json',
	        encode		: true
	    }).success(function(data){

	    	$.each(data, function(i, val) {
	    		var currentLinkId = $('link[data-link-id]').attr("data-link-id");
	    		var link = '<link href="'+ val +'" data-link-id="'+key+'" rel="stylesheet" type="text/css">';

    			$('link[data-link-id]').remove();

	    		$.each(val, function(i, cssData) {
		    		link = '<link href="'+ cssData +'" data-link-id="'+key+'" rel="stylesheet" type="text/css">';
		    		$('head').append(link);
	    		});
	    	});

	    }); 
	} else {
		console.log('Shit ', activeTabId);
	}
}


*/

// Popover
$('[data-toggle="popover"]').popover();