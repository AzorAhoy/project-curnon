const express = require("express");
const BillRouter = express.Router();
const productModel = require("../models/products");
const billModel = require("../models/bills");

// CRUD
// Create
BillRouter.post("/", (req, res) => {
  const {
    user,
    list,
    //totalPrice
  } = req.body;

  for (let i = 0; i < list.length; i++) {
        var item = list[i];
        console.log(item);
  }

  billModel
    .create({ user, list, totalPrice })
    .then(billCreated => {
      console.log(billCreated);

      res.status(201).json({
        success: true,
        data: billCreated
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        success: false,
        error
      });
    });
});

// Get list
BillRouter.get("/", (req, res) => {
  billModel
    .find({})
    .then(billList => {
      res.json({
        success: true,
        data: billList
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        success: false,
        error
      });
    });
});

// Get one
BillRouter.get("/:id", (req, res) => {
  billModel
    .findById(req.params.id)
    .then(bill => {
      res.json({
        success: true,
        data: bill
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        success: false,
        error
      });
    });
});

// Update
BillRouter.put("/:id", (req, res) => {
  billModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(billUpdated => {
      res.json({
        success: true,
        data: billUpdated
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        success: false,
        error
      });
    });
});

// Delete
BillRouter.get("/:id", (req, res) => {
  billModel
    .findByIdAndRemove(req.params.id)
    .then(billDeleted => {
      res.json({
        success: true,
        data: billDeleted
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        success: false,
        error
      });
    });
});

module.exports = BillRouter;
