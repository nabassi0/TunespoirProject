import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/_buttons.scss';

/**
 * Button component
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, outline, text)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.fullWidth - Whether the button should take full width
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler
 * @returns {JSX.Element}
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  disabled = false,
  children,
  onClick,
  ...rest
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const widthClass = fullWidth ? 'btn-block' : '';
  
  const buttonClasses = [
    baseClass,
    variantClass,
    sizeClass,
    widthClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button; 