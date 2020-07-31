"# toysServer" 


##    example  
    * url =
 /toys  - to get all toys
 /toys/page/1?perPage=5  - for get page number   and get the per page val is not required
 /toys/add               - to add toys    on body the obj you must to send all parameter  is required
 /toys/del               - on body must to send  id  to delet  
 /toys/update            - on body must to send  obj toys and the id to change   must to be valid
 /toys/cat/:catId        - to get all toys by category  and limit  example   - /toys/cat/car?pageNum=0    /toys/cat/car?perPage=2 
 /toys/search?s= query   - search    toys by name or category   example /toys/search?s= car 
 /toys/countToys         - get the count toys in dbToys
