import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/_cards.scss';

/**
 * Card component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.title - Card title
 * @param {React.ReactNode} props.subtitle - Card subtitle
 * @param {React.ReactNode} props.image - Card image (URL or component)
 * @param {React.ReactNode} props.footer - Card footer content
 * @param {boolean} props.noPadding - Whether to remove padding from the card body
 * @param {boolean} props.hoverable - Whether the card should have hover effects
 * @param {boolean} props.bordered - Whether the card should have a border
 * @returns {JSX.Element}
 */
const Card = ({
  children,
  className = '',
  title,
  subtitle,
  image,
  footer,
  noPadding = false,
  hoverable = false,
  bordered = false,
  ...rest
}) => {
  const cardClasses = [
    'card',
    hoverable ? 'card-hoverable' : '',
    bordered ? 'card-bordered' : '',
    className
  ].filter(Boolean).join(' ');

  const bodyClasses = ['card-body', noPadding ? 'card-body-no-padding' : ''].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...rest}>
      {image && (
        <div className="card-image">
          {typeof image === 'string' ? (
            <img src={image} alt={title || 'Card image'} />
          ) : (
            image
          )}
        </div>
      )}
      
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <div className="card-subtitle">{subtitle}</div>}
        </div>
      )}
      
      <div className={bodyClasses}>{children}</div>
      
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.node,
  noPadding: PropTypes.bool,
  hoverable: PropTypes.bool,
  bordered: PropTypes.bool
};

export default Card; 