"# toysServer" nodejs project
api = https://toysserverapi.herokuapp.com/toys

##  use :
mongodb
config
@hapi/joi
express

##    example  
 api =  https://toysserverapi.herokuapp.com/toys
 
 https://toysserverapi.herokuapp.com/toys  - to get all toys

 /page/1?perPage=5  - for get page number   and get the per page val is not required
 /add               - to add toys    on body the obj you must to send all parameter  is required
 /del               - on body must to send  id  to delet  
 /update            - on body must to send  obj toys and the id to change   must to be valid
 /cat/:catId        - to get all toys by category  and limit  example   - /toys/cat/car?pageNum=0    /toys/cat/car?perPage=2 
 /search?s= query   - search    toys by name or category   example /toys/search?s= car 
 /countToys         - get the count toys in dbToys
