const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "handling GET request"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "handling POST request"
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: "You get the special id ",
            id: id
        });
    } else {
        res.status(200).json({
            message: "You passed an id ",
            id: id
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: "Product id " + id + " UPDATED"
    });
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: "Product id " + id + " DELETED"
    });
});

module.exports = router;