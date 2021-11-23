const express=require('express');
 const app = express();
 const print = (data) =>{
     console.log(data);
 }
  app.listen(9000,function(req,res)
  {
      console.log("running....")
  });

  app.get('/',function(req,res)
  {
      res.send("welcome to nodeJs")
  })
   
  app.get('/data',function(req,res)
  {     
     
      const id = req.query.id
      if(id==1)
      {
          res.send("name is kishore ")
      }
      else
      res.send("bye")
  })

  print("ended");

  