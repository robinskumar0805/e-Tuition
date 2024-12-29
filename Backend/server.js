const express = require("express");
const bodyParser = require("body-parser");
const stripe = require("stripe")("your-secret-key-here");

const app = express();
app.use(bodyParser.json());

app.post("/create-checkout-session", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: "E-Tuition Fees",
                        },
                        unit_amount: req.body.price, // Amount in paise
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: "https://yourwebsite.com/success",
            cancel_url: "https://yourwebsite.com/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating session:", error);
        res.status(500).send("Internal Server Error");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
