import { useState, useEffect } from 'react';
import { FaRegCreditCard, FaRegCheckCircle, FaSpinner } from 'react-icons/fa';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { 
  DonationAmounts,
  CheckoutForm,
  DonationSuccess,
  DonationInfo,
  PageHeader
} from '../components/faire-un-don';
import '../styles/pages/faire-un-don.scss';

// Initialize Stripe (replace with a real publishable key in production)
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

/**
 * FaireUnDon page component for donation process
 */
const FaireUnDon = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('ponctuel');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Predefined donation amounts
  const amounts = [20, 50, 100, 200];

  useEffect(() => {
    // Animation effect
    setIsVisible(true);
  }, []);

  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && !isNaN(value) && Number(value) > 0) {
      setDonationAmount(Number(value));
    }
  };

  const handleDonationTypeChange = (type) => {
    setDonationType(type);
  };

  const handleDonationSuccess = (donationInfo) => {
    setDonationSuccess(donationInfo);
    setShowSuccessMessage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setShowSuccessMessage(false);
    setDonationAmount(50);
    setCustomAmount('');
    setDonationType('ponctuel');
  };

  return (
    <div className={`donation-page ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        {showSuccessMessage ? (
          <DonationSuccess 
            donationInfo={donationSuccess} 
            onReset={resetForm} 
          />
        ) : (
          <>
            <PageHeader />

            <div className="donation-content">
              <div className="donation-form-container">
                <DonationAmounts
                  donationAmount={donationAmount}
                  customAmount={customAmount}
                  donationType={donationType}
                  onAmountClick={handleAmountClick}
                  onCustomAmountChange={handleCustomAmountChange}
                  onDonationTypeChange={handleDonationTypeChange}
                  amounts={amounts}
                />

                <Elements stripe={stripePromise}>
                  <CheckoutForm 
                    donationAmount={donationAmount}
                    donationType={donationType}
                    onSuccess={handleDonationSuccess}
                  />
                </Elements>
                
                <DonationInfo />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FaireUnDon; 