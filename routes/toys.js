var express = require('express');
const { toysModel, validToys } = require('../models/toys-model');
var router = express.Router();

/* GET users listing. */
// router.get('/',  (req, res, next) =>{
//   res.send('respond with a resource');
// });



//http://localhost:3000/toys  red all toys from dbToys
router.get('/', (req, res, next) => {
    toysModel.find({})
        .sort({ _id: -1 })
        .then(data => {
            res.json(data)

        })
});
//http://localhost:3000/toys/page/1    //http://localhost:3000/toys/page/1?perPage=5
router.get('/page/:pageNum', (req, res, next) => {
    let pageNum = req.params.pageNum|| 0
    let perPage = Number(req.query.perPage) || 2
    toysModel.find({})
        .sort({ _id: -1 })
        .limit(perPage)     //  כמה להציג 
        .skip(pageNum * perPage)  // חישוב מאיפה להתחיל  להציג מכפילים את מספר העמוד ב כמה לעמוד 
        .then(data => {
            res.json(data)

        })
});
// //http://localhost:3000/toys/add  on body the obj to add must to be valid
router.post('/add', async (req, res, next) => {
    let dataBody = req.body;
    toy = await validToys(dataBody);
    if (toy.error)
        res.status(400).json(toy.error.details[0])
    else {
        try {
            let saveData = await toysModel.insertMany([dataBody])
            res.json(saveData)

        } catch (error) {
            res.status(400).json({ message: "error insert new toys catch" })
        }
    }
});
//http://localhost:3000/toys/del   on body the id  to delet
router.delete('/del', (req, res, next) => {
    let delId = req.body.del;
    toysModel.deleteOne({ _id: delId })
        .then(data => {
            if (data.deletedCount > 0)
                res.json({ message: "deleted", del: "ok" })
            else
                res.status(400).json({ error: "error id not  found" })
        })

});
//http://localhost:3000/toys/update    on body the obj toys and the id to change   must to be valid
router.put('/update', async (req, res, next) => {
    let dataBody = req.body;
    toy = await validToys(dataBody);
    if (toy.error)
        res.status(400).json(toy.error.details[0])
    else {
        try {
            let updateData = await toysModel.updateOne({ _id: req.body.id }, dataBody)
            res.json({ message: "update success", id: req.body.id })

        } catch (error) {
            res.status(400).json({ message: "error cant find id catch" })
        }
    }
});
//http://localhost:3000/toys/cat/car  http://localhost:3000/toys/cat/car?pageNum=0    //http://localhost:3000/toys/cat/car?pageNum=0&perPage=2
router.get('/cat/:catid', (req, res, next) => {
    let pageNum = Number(req.query.pageNum) || 0;
    let perPage = Number(req.query.perPage) || 5;
    let catid = req.params.catid
    toysModel.find({ category: catid })
        .sort({ _id: -1 })
        .limit(perPage)     //  כמה להציג 
        .skip(pageNum * perPage)  // חישוב מאיפה להתחיל  להציג מכפילים את מספר העמוד ב כמה לעמוד 
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
});
//http://localhost:3000/toys/search?s=car
router.get('/search', (req, res, next) => {
    const mySearch = new RegExp(`${req.query.s}`);
    toysModel.find({ $or: [{ category: mySearch }, { name: mySearch }] })
        .then(data => {
            res.json(data)

        })
});
//http://localhost:3000/toys/countToys  get the count toys in dbToys
router.get('/countToys', (req, res, next) => {
    toysModel.countDocuments({})
        .then(data => {
            res.json({ doucuments: data })
        })
});
//http://localhost:3000/toys/price    on body  min and max
router.get('/price', (req, res, next) => {
    let min = req.body.min || 0;
    let max = req.body.max || 99999;
    toysModel.find({ price: { $gte: min, $lte: max } })
        .sort({ _id: -1 })
        .then(data => {
            res.json(data)

        })
});


module.exports = router;
