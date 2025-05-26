# Stripe Payment Links Setup Guide

This guide will help you set up Stripe Payment Links for the donation system.

## Prerequisites

1. A Stripe account (create one at https://stripe.com)
2. Access to the Stripe Dashboard

## Setting Up Payment Links

### Step 1: Access Payment Links in Stripe Dashboard

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Payments** → **Payment Links**
3. Click **+ Create payment link**

### Step 2: Create Payment Links for Each Donation Amount

You need to create 8 payment links total:

- 4 for one-time donations (20€, 50€, 100€, 200€)
- 4 for monthly donations (20€, 50€, 100€, 200€)

#### For One-Time Donations:

1. **20€ One-Time Donation:**

   - Click "Create payment link"
   - Select "Don't use a product" or create a product named "Don 20€"
   - Set price to 20.00 EUR
   - Set payment type to "One time"
   - Customize the checkout page (optional)
   - Click "Create link"
   - Copy the generated link

2. Repeat for 50€, 100€, and 200€

#### For Monthly Donations:

1. **20€ Monthly Donation:**

   - Click "Create payment link"
   - Select "Don't use a product" or create a product named "Don mensuel 20€"
   - Set price to 20.00 EUR
   - Set payment type to "Recurring"
   - Set billing period to "Monthly"
   - Click "Create link"
   - Copy the generated link

2. Repeat for 50€, 100€, and 200€

### Step 3: Configure Success and Cancel URLs

When creating each payment link, you can set:

- **Success URL**: Where customers go after successful payment
- **Cancel URL**: Where customers go if they cancel

These are automatically handled in the code with query parameters.

### Step 4: Update the Code

1. Open `src/pages/FaireUnDon.jsx`
2. Find the `paymentLinks` object in the `handleCheckout` function
3. Replace the placeholder URLs with your actual Stripe Payment Link URLs:

```javascript
const paymentLinks = {
  ponctuel: {
    20: "https://buy.stripe.com/YOUR_ACTUAL_20EUR_ONETIME_LINK",
    50: "https://buy.stripe.com/YOUR_ACTUAL_50EUR_ONETIME_LINK",
    100: "https://buy.stripe.com/YOUR_ACTUAL_100EUR_ONETIME_LINK",
    200: "https://buy.stripe.com/YOUR_ACTUAL_200EUR_ONETIME_LINK",
  },
  mensuel: {
    20: "https://buy.stripe.com/YOUR_ACTUAL_20EUR_MONTHLY_LINK",
    50: "https://buy.stripe.com/YOUR_ACTUAL_50EUR_MONTHLY_LINK",
    100: "https://buy.stripe.com/YOUR_ACTUAL_100EUR_MONTHLY_LINK",
    200: "https://buy.stripe.com/YOUR_ACTUAL_200EUR_MONTHLY_LINK",
  },
};
```

## Testing

### Test Mode

- Use Stripe's test mode payment links for development
- Test card numbers: 4242 4242 4242 4242 (success)
- Any future expiry date and any 3-digit CVC

### Live Mode

- Switch to live mode in Stripe Dashboard
- Create new payment links in live mode
- Update the URLs in your code
- Test with a real card (you can refund yourself later)

## Managing Donations

### View Payments

- Go to **Payments** in Stripe Dashboard to see all donations
- Filter by payment link to see donations by amount

### View Customers

- Go to **Customers** to see donor information
- Stripe automatically creates customer records

### Handle Subscriptions

- Monthly donations appear in **Billing** → **Subscriptions**
- Donors can manage subscriptions via Stripe's customer portal

## Customization Options

### Payment Link Appearance

- Add your logo
- Customize colors to match your brand
- Add custom fields (phone number, message, etc.)

### Email Receipts

- Stripe automatically sends receipts
- Customize receipt emails in **Settings** → **Email receipts**

### Tax Receipts

- Configure tax settings if needed for donation receipts
- Go to **Settings** → **Tax**

## Support

For any issues:

1. Check Stripe's [Payment Links documentation](https://stripe.com/docs/payment-links)
2. Contact Stripe Support through the Dashboard
3. Review the integration logs in **Developers** → **Logs**
