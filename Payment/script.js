const stripe = Stripe("your-publishable-key-here");

document.getElementById("pay-button").addEventListener("click", async () => {
    try {
        // Create a Checkout Session
        const response = await fetch("/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                price: 2000, // Amount in smallest currency unit (e.g., paise for INR)
            }),
        });

        const session = await response.json();

        // Redirect to Stripe Checkout
        await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
        console.error("Error:", error);
        alert("Payment failed. Please try again.");
    }
});
