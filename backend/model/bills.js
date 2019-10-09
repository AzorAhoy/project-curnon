const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "UserSchema"
    },
    list: [
      {
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "ProductSvhema"
        },

        quantity: {
          type: Number,
          default : 1
        },

        price: {
          type: Number,
          default: 0
          //require: true
        }
      }
    ],

    totalPrice: {
      type: Number,
      //required: true
    }
  },
  {
    timestamps: true // createdAt, updatedAt
  }
);

module.exports = mongoose.model("Bill", BillSchema);
