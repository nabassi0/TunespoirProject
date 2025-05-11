import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/layout/_grid.scss';

/**
 * Container component for consistent page layouts
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Container content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.fluid - Whether the container should be fluid (full width)
 * @param {string} props.as - HTML element to render the container as
 * @param {boolean} props.centered - Whether to center the container content
 * @returns {JSX.Element}
 */
const Container = ({
  children,
  className = '',
  fluid = false,
  as: Component = 'div',
  centered = false,
  ...rest
}) => {
  const containerClasses = [
    fluid ? 'container-fluid' : 'container',
    centered ? 'text-center' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={containerClasses} {...rest}>
      {children}
    </Component>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  as: PropTypes.elementType,
  centered: PropTypes.bool
};

export default Container; 