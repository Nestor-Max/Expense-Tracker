const Transaction = require('../models/transactionModel')
const asyncWrapper = require('../middleware/async')

//@desc GET all transaction
//@route GET /pi/v1/transactions
//@access Public
const getTransactions = asyncWrapper( async (req, res) => {

        const transaction = await Transaction.find({})

        res.status(201).json({ 
            success: true,
            count:transaction.length,
            data: transaction 
        })
    }
)

//@desc Add single transaction
//@route POST /pi/v1/transactions
//@access Public
const createTransaction =asyncWrapper( async (req, res) => {
        const { text, amount } = req.body
        const transaction = await Transaction.create(req.body)
        res.status(201).json({ transaction })
    }
)


// //@desc GET single transaction
// //@route GET /pi/v1/transactions/:id
// //@access Public
// const getTransaction = (req, res) => {
//     res.send("get a single task")
// }



// //@desc PATCH single transaction
// //@route PATCH /pi/v1/transactions/:id
// //@access Public
// const editTransaction = (req, res) => {
//     res.send("edit task")
// }

//@desc DELETE single transaction
//@route DELETE /pi/v1/transactions/:id
//@access Public
const deleteTransaction =asyncWrapper( async (req, res) => {

        const {id:transactionID} = req.params
        const transaction = await Transaction.findOneAndDelete({_id:transactionID})

        if(!transaction){
            return res.status(404).json({
                success:false,
                error:'No transaction found'
            })
        }                                                                                                                                                                                                                                                   


        return res.status(201).json({
            success:true,
            data:{transaction}
        })
    }
)

module.exports = {
    getTransactions,
    
    createTransaction,
    
    deleteTransaction
}

