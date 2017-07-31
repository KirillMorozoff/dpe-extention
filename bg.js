 document.onkeydown=function(e){

	 
	 if(e.keyCode==112){
		 e.preventDefault();
		 var tabUrl = location.href;
		var url = tabUrl;
		url=url.replace('dpe-preview','dpe').replace('com/','com/cf#/');
		window.location.href=url;
		 
     } else if(e.keyCode==113){
		e.preventDefault();
		var tabUrl = location.href;
		var url = tabUrl;
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
			window.location.href=url;
	 } else if (e.keyCode==114){
		e.preventDefault();
		var tabUrl = location.href;
		var url = tabUrl;
		url=url.replace('dpe.pwc','dpe-preview.pwc').replace('https','http').replace('/cf#','');
		window.location.href=url;
	 } else if(e.keyCode==115){
		e.preventDefault();
		var tabUrl = location.href;
		var url = tabUrl;
		url=url.replace('https://dpe.pwc.com/cf#/content/pwc/ru','http://www.pwc.ru');
		window.location.href=url;
	 }
	 

	 
	 else if(e.keyCode==117){
		e.preventDefault();
		var tabUrl = location.href;
		var url = tabUrl;
		
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
			url=url.replace('https://dpe.pwc.com/cf#/content/pwc/ru/ru/','https://dpe.pwc.com/cf#/content/pwc/ru/ru/en/');
		}
		else if (url.indexOf("https://dpe.pwc.com/cf#/content/pwc/ru/en/") > -1)
		{
			url=url.replace('https://dpe.pwc.com/cf#/content/pwc/ru/en/','https://dpe.pwc.com/cf#/content/pwc/ru/ru/');
		}
		
		else if (url.indexOf("https://dpe.pwc.com/content/pwc/ru/ru/") > -1)
		{
			url=url.replace('https://dpe.pwc.com/content/pwc/ru/ru/','https://dpe.pwc.com/cf#/content/pwc/ru/ru/en/');
		}
		else if (url.indexOf("https://dpe.pwc.com/content/pwc/ru/en/") > -1)
		{
			url=url.replace('https://dpe.pwc.com/content/pwc/ru/en/','https://dpe.pwc.com/cf#/content/pwc/ru/ru/');
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
		
		
		window.location.href=url;
	 }
	 
 };
 

 
