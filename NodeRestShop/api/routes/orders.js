const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Orders fetched"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "order created"
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if (id === 'special') {
        res.status(200).json({
            message: "You get the order id ",
            id: id
        });
    } else {
        res.status(200).json({
            message: "You passed an order id ",
            id: id
        });
    }
});

router.patch('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: "order id " + id + " UPDATED"
    });
});

router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: "orderId id " + id + " DELETED"
    });
});

module.exports = router;