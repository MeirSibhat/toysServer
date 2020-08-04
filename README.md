"# toysServer" nodejs project
api = https://toysserverapi.herokuapp.com/toys

##  use :
mongodb
config
@hapi/joi
express


## in app :
you can get all toys in DB,
 you can search by name or category, you can add toys and update, 
you can see the result toys by page number and /or  perPage, 
Feel free to add toys to the database and use unlimited



##    explanation  :
 
1) to get all toys  {get}
 https://toysserverapi.herokuapp.com/toys  


2) get by page  number  and perPage {get}

https://toysserverapi.herokuapp.com/toys/page/1?perPage=5  - get the toys on page 1 fro there you get 5 toys 


3) add toys {post}
https://toysserverapi.herokuapp.com/toys/add    -on body you  must to send all parameter    {name,info,category,img,price}


4) delete toys    {delete}
https://toysserverapi.herokuapp.com/toys/del      - on body you  must to send  id of toys   to delet    
 * use  {delete}


 5)  update   {put}
 https://toysserverapi.herokuapp.com/toys/update        - on body you must to send  obj toys and the id to change   
 * use  {put}

6)  {/cat/:catId}    to get all toys by category and/or Quantity limit  example: {get}

 https://toysserverapi.herokuapp.com/toys/cat/car                      all toys by category name

 https://toysserverapi.herokuapp.com/toys/cat/car?pageNum=1            toys by category name on page 1

 https://toysserverapi.herokuapp.com/toys/cat/car?pageNum=0&perPage=2  toys by category name on page 0  perPage 2

 
7) search toys

 /search?s= query   - search    toys by name or category   example:
   https://toysserverapi.herokuapp.com/toys/search?s=car  - get the toys include name car  or include category car


 8) /countToys         - get the count toys in dbToys   example:
   https://toysserverapi.herokuapp.com/toys/countToys    - get the number of toys 


9)  price min and max {default min =0  max=9999 }  example of use    {get}
http://localhost:3000/toys/price?min=20  get the toys above price 20
http://localhost:3000/toys/price?min=20&max=40   you get the toys between the prices 20 and 40
http://localhost:3000/toys/price?max=40           Between the prices 20 and 40
http://localhost:3000/toys/price            you get  the toys  Between the prices 0 and 9999 default price 

 *if you send   negative number you get the  default  
 * You receive in addition to the results the   Summary object {"min": 20,"max": 40,"res": 6}


