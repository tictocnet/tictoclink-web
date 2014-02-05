TictocLink Mobile Web API
=============

#### Custom URL Scheme

```
tictoclink://sendurl?msg=[message]&url=[url]&appid=[appid]
```

#### Parameters

name   | type	| required | description				| etc 
---			| ---		| ---		| ---				| --- 
msg			| string	| O 	| message | 
url 		| string	| O		| web link |  
appid		| string 	| X		| mobile app id | 
image		| string 	| X		| image link, default open graph image(meta tag) | 


#### Sample

```html

		<script src="/js/tictoc_link.js"></script>
		<script>
		function send_msg() {
			tictoc.send({
				msg : 'test message',
				url : 'http://www.google.com',
				image : 'http://www.image.com/jpg'
				
			})
		}
		</script>

```

#### Test Url

```
http://www.tictoc.net/m/tictoc_link
```

