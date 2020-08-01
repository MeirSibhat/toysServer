"# toysServer" nodejs project
api = https://toysserverapi.herokuapp.com/toys

##  use :
mongodb
config
@hapi/joi
express


## in app :
you can get all toys in db , you can search by name or category , you can add toys and update
you can see the result toys by page number and per pagep
you can get all toys in db , you can search by name or category
you can add toys and update , you can see the result toys by page number and per page
Feel free to add toys to the database and use unlimited


##    example  :
 api =  https://toysserverapi.herokuapp.com/toys
 
 https://toysserverapi.herokuapp.com/toys  - to get all toys 


 /page/1?perPage=5  - ti get thw toys in page  and limit on page   example:
https://toysserverapi.herokuapp.com/toys/page/1?perPage=5  - get the toys on page 1 fro there you get 5 toys 

 /add               - to add toys   - on body  you must to send all parameter . is required

 /del               - on body you  must to send  id  to delet  

 /update            - on body you must to send  obj toys and the id to change   

 /cat/:catId        - to get all toys by category and lcategoryimit example: 
     https://toysserverapi.herokuapp.com/toys/cat/car                     all toys by category name

     https://toysserverapi.herokuapp.com/toys/cat/car?pageNum=1          toys by category name on page 1

     https://toysserverapi.herokuapp.com/toys/cat/car?pageNum=0&perPage=2  toys by category name on page 0  perPage 2


 /search?s= query   - search    toys by name or category   example:
   https://toysserverapi.herokuapp.com/toys/search?s=car  - get the toys include name car  or include category car

 
 /countToys         - get the count toys in dbToys   example:
   https://toysserverapi.herokuapp.com/toys/countToys    - get the number of toys 
