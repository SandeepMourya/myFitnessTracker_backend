const express = require('express')
const Food = require('../models/food')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/foods', auth, async (req, res) => {
    const food = new Food({
        ...req.body,
        owner: req.user._id
    })

    try {
        await food.save()
        console.log(food);
        res.status(201).send(food)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/foodsSend/',auth,async(req,res)=>{
    console.log(req.query.parameter)
    
    
    try {
        // console.log(req.user.id)
       const result = await Food.find({owner:req.user.id,date:req.query.parameter})
    //    console.log(result);
       res.send(result);
     
    } catch (e) {
        res.status(500).send()
    }
})

// router.post('/foodsSend', auth, async (req, res) => {

//     console.log(req.body.Date)
//     const dateData = {date:req.body.Date}
//     console.log(dateData)

//     try {
//         await req.user.populate({
//             path:'foods',
//             match:{
//                 date:dateData.date
//             }
//         }).execPopulate()
//         console.log(req.user.foods)
//         res.send(req.user.foods)
     
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.get('/foods/:id', auth, async (req, res) => {
//     const _id = req.params.id

//     try {
//         const food = await Food.findOne({ _id, owner: req.user._id })

//         if (!food) {
//             return res.status(404).send()
//         }

//         res.send(food)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.patch('/foods/:id', auth, async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description', 'completed']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const food = await Food.findOne({ _id: req.params.id, owner: req.user._id})

//         if (!food) {
//             return res.status(404).send()
//         }

//         updates.forEach((update) => food[update] = req.body[update])
//         await food.save()
//         res.send(food)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.delete('/foods/:id', auth, async (req, res) => {
//     try {
//         const food = await Food.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

//         if (!food) {
//             res.status(404).send()
//         }

//         res.send(food)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

module.exports = router