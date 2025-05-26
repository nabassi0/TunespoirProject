import React from "react";
import PropTypes from "prop-types";
import "./DonationAmounts.scss";

/**
 * Component for selecting donation amounts
 * @param {Object} props - Component props
 * @param {number} props.donationAmount - Current donation amount
 * @param {string} props.donationType - Type of donation (ponctuel or mensuel)
 * @param {Function} props.onAmountClick - Handler for amount button click
 * @param {Function} props.onDonationTypeChange - Handler for donation type change
 * @param {Array} props.amounts - Predefined donation amounts
 * @returns {JSX.Element}
 */
const DonationAmounts = ({
  donationAmount,
  donationType,
  onAmountClick,
  onDonationTypeChange,
  amounts = [20, 50, 100, 200],
}) => {
  return (
    <div className="donation-amounts">
      <div className="donation-type-selector">
        <label className="donation-type-label">Type de don :</label>
        <div className="donation-type-buttons">
          <button
            type="button"
            className={`donation-type-btn ${
              donationType === "ponctuel" ? "active" : ""
            }`}
            onClick={() => onDonationTypeChange("ponctuel")}
          >
            Don ponctuel
          </button>
          <button
            type="button"
            className={`donation-type-btn ${
              donationType === "mensuel" ? "active" : ""
            }`}
            onClick={() => onDonationTypeChange("mensuel")}
          >
            Don mensuel
          </button>
        </div>
      </div>

      <div className="donation-amount-selector">
        <label className="donation-amount-label">
          Choisissez un montant {donationType === "mensuel" ? "mensuel" : ""} :
        </label>
        <div className="amount-buttons">
          {amounts.map((amount) => (
            <button
              key={amount}
              type="button"
              className={`amount-btn ${
                donationAmount === amount ? "active" : ""
              }`}
              onClick={() => onAmountClick(amount)}
            >
              {amount}€
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

DonationAmounts.propTypes = {
  donationAmount: PropTypes.number.isRequired,
  donationType: PropTypes.string.isRequired,
  onAmountClick: PropTypes.func.isRequired,
  onDonationTypeChange: PropTypes.func.isRequired,
  amounts: PropTypes.arrayOf(PropTypes.number),
};

export default DonationAmounts;
