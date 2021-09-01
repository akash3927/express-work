const Cart = require('../models/cart');

exports.addItemToCart = (req,res)=>{

    const cart = new Cart({
        // user: req.body,
        cartItems: req.body.cartItems

    });


    cart.save((error, cart)=>{
        if(error) return res.json({ error });
        if(cart){
            return res.status(201).json({ cart })
        };
    });

}