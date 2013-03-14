chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	// alert('request');
  if (request.method == 'getSelection')
	{
    	sendResponse({data:window.getSelection().toString()});
    	// alert(window.getSelection().toString());
	}
  else
	{
    	sendResponse({});
	}
});

