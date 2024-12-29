const stripe = require('stripe')('your-secret-key-here');
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'Product Name',
                },
                unit_amount: 2000,
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'https://your-website.com/success',
        cancel_url: 'https://your-website.com/cancel',
    });
    res.json({ id: session.id });
});
