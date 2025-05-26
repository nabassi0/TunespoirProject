import { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import {
  DonationAmounts,
  DonationInfo,
  PageHeader,
} from "../components/faire-un-don";
import "../styles/pages/faire-un-don.scss";

/**
 * FaireUnDon page component for donation process
 */
const FaireUnDon = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [donationType, setDonationType] = useState("ponctuel");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(null); // 'success' or 'canceled'

  // Predefined donation amounts
  const amounts = [20, 50, 100, 200];

  useEffect(() => {
    // Animation effect
    setIsVisible(true);

    // Check for success/cancel in URL params
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      setShowMessage("success");
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (urlParams.get("canceled") === "true") {
      setShowMessage("canceled");
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  useEffect(() => {
    // Auto-hide message after 10 seconds
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(null);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
  };

  const handleDonationTypeChange = (type) => {
    setDonationType(type);
  };

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      // IMPORTANT: You need to create these Payment Links in your Stripe Dashboard
      // Go to https://dashboard.stripe.com/payment-links
      // Create a payment link for each amount

      // Replace these with your actual Stripe Payment Link URLs
      const paymentLinks = {
        ponctuel: {
          20: "https://buy.stripe.com/test_9B6bJ30JL2RH70a6ylfbq00",
          50: "https://buy.stripe.com/test_eVq8wR8cd3VL0BMcWJfbq01",
          100: "https://buy.stripe.com/test_aFa14pgIJbod70a6ylfbq02",
          200: "https://buy.stripe.com/test_7sYeVffEF4ZPbgq4qdfbq03",
        },
        mensuel: {
          20: "https://buy.stripe.com/test_00w3cxgIJ8c14S2cWJfbq04",
          50: "https://buy.stripe.com/test_8x200lgIJak9gAK09Xfbq05",
          100: "https://buy.stripe.com/test_9B614pcst9g54S2g8Vfbq06",
          200: "https://buy.stripe.com/test_6oU9AVdwx9g5bgq8Gtfbq07",
        },
      };

      // Get the appropriate payment link
      const paymentLink = paymentLinks[donationType]?.[donationAmount];

      if (paymentLink) {
        // Add success and cancel URLs as query parameters
        const successUrl = encodeURIComponent(
          `${window.location.origin}/faire-un-don?success=true`
        );
        const cancelUrl = encodeURIComponent(
          `${window.location.origin}/faire-un-don?canceled=true`
        );

        // Redirect to Stripe Payment Link
        window.location.href = `${paymentLink}?success_url=${successUrl}&cancel_url=${cancelUrl}`;
      } else {
        alert("Veuillez sélectionner un montant de don.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`donation-page ${isVisible ? "visible" : ""}`}>
      <div className="container">
        {showMessage && (
          <div className={`message-banner ${showMessage}`}>
            {showMessage === "success" ? (
              <>
                <FaCheckCircle className="message-icon" />
                <div className="message-content">
                  <h3>Merci pour votre don !</h3>
                  <p>
                    Votre générosité nous aide à poursuivre notre mission. Un
                    reçu vous sera envoyé par email.
                  </p>
                </div>
              </>
            ) : (
              <>
                <FaTimesCircle className="message-icon" />
                <div className="message-content">
                  <h3>Paiement annulé</h3>
                  <p>
                    Votre don n'a pas été traité. N'hésitez pas à réessayer si
                    vous le souhaitez.
                  </p>
                </div>
              </>
            )}
            <button
              className="close-button"
              onClick={() => setShowMessage(null)}
              aria-label="Fermer"
            >
              ×
            </button>
          </div>
        )}

        <PageHeader />

        <div className="donation-content">
          <div className="donation-form-container">
            <DonationAmounts
              donationAmount={donationAmount}
              donationType={donationType}
              onAmountClick={handleAmountClick}
              onDonationTypeChange={handleDonationTypeChange}
              amounts={amounts}
            />

            <div className="checkout-section">
              <button
                className={`btn-checkout ${isLoading ? "loading" : ""}`}
                onClick={handleCheckout}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span> Redirection vers le
                    paiement...
                  </>
                ) : (
                  `Faire un don de ${donationAmount}€${
                    donationType === "mensuel" ? "/mois" : ""
                  }`
                )}
              </button>

              <p className="secure-payment">
                <small>
                  Paiement 100% sécurisé par Stripe. Vous serez redirigé vers
                  une page de paiement sécurisée.
                </small>
              </p>
            </div>

            <DonationInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaireUnDon;
