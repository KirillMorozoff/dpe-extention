document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('life');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        chrome.tabs.query({active:true},function(tabsArray) {
		var tab = tabsArray[0];
		var tabUrl = tab.url;
		var url=tabUrl.split('?')[0];

        	if (url.indexOf('.com.au') > -1)
        		{
        			url=url.replace('www.pwc.com.au','dpe.pwc.com/cf#/content/pwc/au/en');
        		}
        	else if (url.indexOf('.com') > -1)
        		{
        			url=url.replace('www.pwc.com','dpe.pwc.com/cf#/content/pwc');
        		}
        	else if (url.indexOf('.co.uk') > -1)
        			{
        				url=url.replace('www.pwc.co.uk','dpe.pwc.com/cf#/content/pwc/uk/en');
        			}
        	else
        			{
        				url=url.replace('www.pwc.','dpe.pwc.com/cf#/content/pwc/');
        			}

        	 chrome.tabs.update(tab.id, {
        url: url
    });
		});	
              	
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('author-to-life');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        chrome.tabs.query({active:true},function(tabsArray) {
		var tab = tabsArray[0];
		var tabUrl = tab.url;
		var url=tabUrl.split('?')[0];


		url=url.replace('https://dpe.pwc.com/cf#/content/pwc/ru','http://www.pwc.ru');


        chrome.tabs.update(tab.id, {
        url: url
    });
		});	
              	
        });
    }, false);
}, false);


document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('preview-to-life');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        chrome.tabs.query({active:true},function(tabsArray) {
		var tab = tabsArray[0];
		var tabUrl = tab.url;
		var url=tabUrl.split('?')[0];


		url=url.replace('http://dpe-preview.pwc.com/content/pwc/ru','http://www.pwc.ru');


        chrome.tabs.update(tab.id, {
        url: url
    });
		});	
              	
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('author-preview');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        chrome.tabs.query({active:true},function(tabsArray) {
		var tab = tabsArray[0];
		var tabUrl = tab.url;
		var url=tabUrl.split('?')[0];


		url=url.replace('dpe.pwc','dpe-preview.pwc').replace('https','http').replace('/cf#','');


        chrome.tabs.update(tab.id, {
        url: url
    });
		});	
              	
        });
    }, false);
}, false);



document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('preview-author');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        chrome.tabs.query({active:true},function(tabsArray) {
		var tab = tabsArray[0];
		var tabUrl = tab.url;
		var url=tabUrl.split('?')[0];


		url=url.replace('dpe-preview','dpe').replace('com/','com/cf#/');


        chrome.tabs.update(tab.id, {
        url: url
    });
		});	
              	
        });
    }, false);
}, false);


document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('webview-in-author');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        chrome.tabs.query({active:true},function(tabsArray) {
		var tab = tabsArray[0];
		var tabUrl = tab.url;
		var url=tabUrl.split('?')[0];

        url=url.replace('/cf#', '').replace('.html', '.html?wcmmode=disabled');

     


        chrome.tabs.update(tab.id, {
        url: url
    });
		});	
              	
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('pwc');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("http://pwc.ru", "_blank");
		
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('global');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("https://requests.pwcinternal.com/requests/requests.nsf/frmHomePage?OpenForm", "_blank");
		
        });
    }, false);
}, false);


document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clean');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("https://requests.pwcinternal.com/katanya/tools.nsf/pages/ccu.html", "_blank");
		
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('events');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("http://pwcrussia.ru/events/index.php/admin/authentication/sa/login", "_blank");
		
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('events');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("http://pwcrussia.ru/events/admin", "_blank");
		
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('surveys');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("http://pwcrussia.ru/surveys/admin", "_blank");
		
        });
    }, false);
}, false);


document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clean');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("https://requests.pwcinternal.com/katanya/tools.nsf/pages/ccu.html", "_blank");
		
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('websites');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("https://dpe.pwc.com/siteadmin", "_blank");
		
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('assets');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("https://dpe.pwc.com/damadmin", "_blank");
		
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('ru-contacts');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("https://dpe.pwc.com/siteadmin#/content/pwc/ru/ru/contacts", "_blank");
		
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('en-contacts');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("https://dpe.pwc.com/siteadmin#/content/pwc/ru/en/contacts", "_blank");
		
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('gost');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("https://dpe.pwc.com/siteadmin#/content/pwc/ru/ru/redirect", "_blank");
		
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('events_ru');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("https://dpe.pwc.com/siteadmin#/content/pwc/ru/ru/events", "_blank");
		
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('events_en');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        	window.open("https://dpe.pwc.com/siteadmin#/content/pwc/ru/en/events", "_blank");
		
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('show_in_dpe');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        chrome.tabs.query({active:true},function(tabsArray) {
		var tab = tabsArray[0];
		var tabUrl = tab.url;
		var url=tabUrl.split('?')[0];

		if (url.indexOf("http://www.pwc.ru") > -1)
		{
		url=url.replace('http://www.pwc.ru','https://dpe.pwc.com/siteadmin#/content/pwc/ru').replace('.html','');
		}
		else if (url.indexOf("https://dpe.pwc.com/cf#") > -1)
		{
			url=url.replace('https://dpe.pwc.com/cf#','https://dpe.pwc.com/siteadmin#').replace('.html','');
		}
		else if (url.indexOf("http://dpe-preview.pwc.com") > -1)
		{
			url=url.replace('http://dpe-preview.pwc.com','https://dpe.pwc.com/siteadmin#').replace('.html','');
		}
		       
		chrome.tabs.update(tab.id, {
        url: url
    });
		});	
              	
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('language-switch');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        chrome.tabs.query({active:true},function(tabsArray) {
		var tab = tabsArray[0];
		var tabUrl = tab.url;
		var url=tabUrl.split('?')[0];

		if (url.indexOf("https://dpe.pwc.com/cf#/content/pwc/ru/ru/") > -1)
		{
			url=url.replace('https://dpe.pwc.com/cf#/content/pwc/ru/ru/','https://dpe.pwc.com/cf#/content/pwc/ru/en/');
		}
		else if (url.indexOf("https://dpe.pwc.com/cf#/content/pwc/ru/en/") > -1)
		{
			url=url.replace('https://dpe.pwc.com/cf#/content/pwc/ru/en/','https://dpe.pwc.com/cf#/content/pwc/ru/ru/');
		}
		
		else if (url.indexOf("https://dpe.pwc.com/siteadmin#/content/pwc/ru/ru/") > -1)
		{
			url=url.replace('https://dpe.pwc.com/siteadmin#/content/pwc/ru/ru/','https://dpe.pwc.com/siteadmin#/content/pwc/ru/en/');
		}
		else if (url.indexOf("https://dpe.pwc.com/siteadmin#/content/pwc/ru/en/") > -1)
		{
			url=url.replace('https://dpe.pwc.com/siteadmin#/content/pwc/ru/en/','https://dpe.pwc.com/siteadmin#/content/pwc/ru/ru/');
		}
		
		else if (url.indexOf("https://dpe.pwc.com/cf#/content/pwc/ru/ru/") > -1)
		{
			url=url.replace('https://dpe.pwc.com/cf#/content/pwc/ru/ru/','https://dpe.pwc.com/cf#/content/pwc/ru/en/');
		}
		else if (url.indexOf("https://dpe.pwc.com/cf#/content/pwc/ru/en/") > -1)
		{
			url=url.replace('https://dpe.pwc.com/cf#/content/pwc/ru/en/','https://dpe.pwc.com/cf#/content/pwc/ru/ru/');
		}
		
		else if (url.indexOf("https://dpe.pwc.com/content/pwc/ru/ru/") > -1)
			                  
		{
			url=url.replace('https://dpe.pwc.com/content/pwc/ru/ru/','https://dpe.pwc.com/content/pwc/ru/en/');
		}
		else if (url.indexOf("https://dpe.pwc.com/content/pwc/ru/en/") > -1)
		{
			url=url.replace('https://dpe.pwc.com/content/pwc/ru/en/','https://dpe.pwc.com/content/pwc/ru/ru/');
		}
		
		else if (url.indexOf("http://www.pwc.ru/ru/") > -1)
		{
			url=url.replace('http://www.pwc.ru/ru/','http://www.pwc.ru/en/');
		}
		else if (url.indexOf("http://www.pwc.ru/en/") > -1)
		{
			url=url.replace('http://www.pwc.ru/en/','http://www.pwc.ru/ru/');
		}
		
		else if (url.indexOf("http://dpe-preview.pwc.com/content/pwc/ru/ru/") > -1)
		{
			url=url.replace('http://dpe-preview.pwc.com/content/pwc/ru/ru/','http://dpe-preview.pwc.com/content/pwc/ru/en/');
		}
		else if (url.indexOf("http://dpe-preview.pwc.com/content/pwc/ru/en/") > -1)
		{
			url=url.replace('http://dpe-preview.pwc.com/content/pwc/ru/en/','http://dpe-preview.pwc.com/content/pwc/ru/ru/');
		}
		

		       
		chrome.tabs.update(tab.id, {
        url: url
    });
		});	
              	
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('panel');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        chrome.tabs.query({active:true},function(tabsArray) {
		var tab = tabsArray[0];
		var tabUrl = tab.url;
		var url=tabUrl.split('?')[0];

		if (url.indexOf("https://dpe.pwc.com/cf#/") > -1)
		{
			url=url.replace('https://dpe.pwc.com/cf#/','https://dpe.pwc.com/');
		}
		else if (url.indexOf("https://dpe.pwc.com/content/") > -1)
		{
			url=url.replace('https://dpe.pwc.com/content/','https://dpe.pwc.com/cf#/content/');
		}
		
		

		       
		chrome.tabs.update(tab.id, {
        url: url
    });
		});	
              	
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('page_properties');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.getSelected(null, function(tab) {
        	
        chrome.tabs.query({active:true},function(tabsArray) {
		var tab = tabsArray[0];
		var tabUrl = tab.url;
		var url=tabUrl.split('?')[0];
		
		var obj = tab;
		
	

		});	
              	
        });
    }, false);
}, false);


/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text && (msg.text == "report_back")) {
        /* Call the specified callback, passing 
           the web-pages DOM content as argument */
    sendResponse(document.getElementById("page_properties").innerHTML);
    }
});	