//Exercise
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())
const cars = [{id: 'C001', 'brand': 'Toyota', 'model': 'Camry', 'price': '1,450,000'},
    {id: 'C002', 'brand': 'Toyota', 'model': 'Vios', 'price': '650,000'},
    {id: 'C003', 'brand': 'Honda', 'model': 'CR-V', 'price': '1,500,000'},
    {id: 'C004', 'brand': 'Honda', 'model': 'Civis', 'price': '850,000'}
];

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});

// *GET*
// http://localhost:8000/api/getcar
app.get('/api/getcar',(req,res)=>{
    res.send(cars);
});

// *GET by add ID*
// http://localhost:8000/api/getcar/C001
app.get('/api/getcar/:id',(req,res)=>{
    const carId = cars.find(element => element.id === req.params.id); 
    if(carId){
        res.send(carId);
    }else{
        res.status(404).send('ไม่พบข้อมูลที่จะเรียกดู');
    }
});

// *POST*
// http://localhost:8000/api/addcar
app.post('/api/addcar',(req,res)=>{
    const carId = req.body.id;
    const carBrand = req.body.brand;
    const carModel = req.body.model;
    const carPrice = req.body.price;
/*
    {
        "id": "C005",
        "brand": "Tesla",
        "model": "Cybertruck",
        "price": "80,000"
    }
*/
    const newCar = {id: carId, 'brand': carBrand, 'model': carModel, 'price': carPrice};
    cars.push(newCar);
    res.send(cars);
});

// *PUT*
// http://localhost:8000/api/editcar/C001
app.put('/api/editcar/:id',(req,res)=>{
    const carId = cars.find(element => element.id === req.params.id);
    if(carId){
/*
    {
        "id": "C001",
        "brand": "Toyota",
        "model": "Yaris",
        "price": "75,000"
    }
*/
        carId.brand = req.body.brand;
        carId.model = req.body.model;
        carId.price = req.body.price;
    }else{
        res.status(404).send('ไม่พบข้อมูลที่จะแก้ไข');
    }
    res.send(cars);
});

// *DELETE*
// http://localhost:8000/api/deletecar/C004
app.delete('/api/deletecar/:id',(req,res)=>{
    const carId = cars.find(element => element.id === req.params.id);
    if(carId){
        const index = cars.indexOf(carId);
        cars.splice(index,1);
    }else{
        res.status(404).send('ไม่พบข้อมูลที่จะลบ');
    }
    res.send(cars);
});