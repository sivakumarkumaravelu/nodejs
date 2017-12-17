var express=require('express');
var app = express();
var router=express.Router();

router.get('/', (req,res)=>{
    res.send('Hello cluster world with PM2');
});

app.use('/',router);
app.listen(3000);
console.log('server running on 3000');