const Order = require('../models/order')
const OrderHasProducts = require('../models/order_has_prodcuts');

module.exports = {

    async create(req, res, next) {
        try {

            const order = req.body;
            const data = await Order.create(order);

            /** 
             * This method is to save each product in the table "order_has_products".
             * The user need to pass like parameter an array of products. Each product
             * into the array needs his id and the quantity of this item.
             */
            for (const product of order.products) {
                await OrderHasProducts.create(data.id, product.id, product.quantity);
            }
            
            return res.status(201).json({
                success: true,
                message: 'The order was created successfully',
                data: {
                    'id': data.id
                }
            });

        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'An error was happened at create the order',
                error: error
            });
        }
    }

}