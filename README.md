# TictocLink Mobile Web API
-----

## Version 2 (tictoc_link_new.js)

#### Custom URL Scheme
```
tictoclink://sendurl?title=[title]&msg=[message]&url=[url]&image=[image]&iconImage=[iconImage]&biImage=[biImage]&svcId=[svcId]&apiVer=[apiVer]&executeInfo=[executeInfo]&marketInfo=[marketInfo]
```

#### Parameters

name   			| type   		| required      | description           | etc
---             | ---           | ---           | ---                   | ---
title           | string        | O     		| Title Message |
msg             | string        | O     		| Message of dialogue window |
url             | string        | O             | Web link |
image           | string        | O             | Image link (default: open graph image(meta tag)) |
iconImage       | string        | X             | Icon image link (app icon) |
biImage         | string        | X             | Brand identity image link |
svcId           | string        | O             | Service ID |
apiVer          | string        | O             | Tictoc Link API Version -> 1.0 (fixed) |
executeInfo     | string        | X             | URI scheme when select execute button |
marketInfo      | string        | X             | Market information when app not installed |

#### Sample
~~~html
<script src="/js/tictoc_link_new.js"></script>
<script>
    function send_msg() {
        tictoc.send({
            title : 'title',
            msg : 'test message',
            image : 'http://www.image.com/jpg',
            svcId : 'testsvcId',
            apiVer : '1.0',
            url : 'http://www.google.com'
        })
    }
</script>
~~~


#### Test Url
```
http://www.tictoc.net/m/tictoc_link
```
---

## Version 1 (tictoc_link.js)

#### Custom URL Scheme
```
tictoclink://sendurl?msg=[message]&url=[url]&appid=[appid]&image=[image]
```

#### Parameters

name   | type   | required | description                                | etc
---                     | ---           | ---           | ---                           | ---
msg                     | string        | O     | message |
url             | string        | O             | web link |
appid           | string        | X             | mobile app id |
image           | string        | X             | image link, default open graph image(meta tag) |

#### Sample
~~~html
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
~~~
