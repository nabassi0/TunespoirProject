import React, { useState } from 'react';
import { FaRegCreditCard, FaSpinner } from 'react-icons/fa';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.scss';

const CheckoutForm = ({ donationAmount, donationType, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postal_code: '',
    country: 'FR',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    if (!cardComplete) {
      setError("Veuillez compléter les informations de votre carte bancaire.");
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // In a real application, you would create a payment intent on your server
      // Here we're simulating a successful payment

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate a successful payment
      onSuccess({
        name: paymentInfo.name,
        amount: donationAmount,
        type: donationType,
        date: new Date().toLocaleDateString(),
      });
    } catch (err) {
      setError("Une erreur est survenue lors du traitement de votre paiement. Veuillez réessayer.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-group">
        <label htmlFor="name">Nom complet</label>
        <input
          id="name"
          type="text"
          name="name"
          value={paymentInfo.name}
          onChange={handleChange}
          placeholder="Prénom Nom"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={paymentInfo.email}
          onChange={handleChange}
          placeholder="votre@email.com"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="address">Adresse</label>
          <input
            id="address"
            type="text"
            name="address"
            value={paymentInfo.address}
            onChange={handleChange}
            placeholder="Adresse"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">Ville</label>
          <input
            id="city"
            type="text"
            name="city"
            value={paymentInfo.city}
            onChange={handleChange}
            placeholder="Ville"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="postal_code">Code postal</label>
          <input
            id="postal_code"
            type="text"
            name="postal_code"
            value={paymentInfo.postal_code}
            onChange={handleChange}
            placeholder="Code postal"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="country">Pays</label>
        <select
          id="country"
          name="country"
          value={paymentInfo.country}
          onChange={handleChange}
          required
        >
          <option value="FR">France</option>
          <option value="BE">Belgique</option>
          <option value="CH">Suisse</option>
          <option value="CA">Canada</option>
          <option value="Other">Autre</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Informations de carte
          <FaRegCreditCard className="card-icon" />
        </label>
        <div className="card-element-container">
          <CardElement
            onChange={(e) => setCardComplete(e.complete)}
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <button
        type="submit"
        className="btn-donate"
        disabled={!stripe || processing}
      >
        {processing ? (
          <>
            <FaSpinner className="spinner" /> Traitement en cours...
          </>
        ) : (
          `Faire un don de ${donationAmount}€`
        )}
      </button>

      <p className="secure-payment">
        <small>Paiement 100% sécurisé. Vos informations sont protégées.</small>
      </p>
    </form>
  );
};

export default CheckoutForm; 