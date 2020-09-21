import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CloseIcon = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={props.color}
      d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm22.9 60.2c2.1 2.1 2.1 5.5 0 7.6a5.22 5.22 0 0 1-3.8 1.6c-1.4 0-2.8-.5-3.8-1.6l-15-15-15.1 15a5.22 5.22 0 0 1-3.8 1.6c-1.4 0-2.8-.5-3.8-1.6a5.37 5.37 0 0 1 0-7.6l15.1-15.1-15.1-15a5.37 5.37 0 1 1 7.6-7.6l15.1 15.1 15.1-15.1a5.37 5.37 0 1 1 7.6 7.6L57.9 50.2z"
    />
  </svg>
);
CloseIcon.propTypes = { color: PropTypes.string };
CloseIcon.defaultProps = { color: '#000' };

export const LinkOutIcon = (props) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M34.3 71.8c-1.57 1.56-1.36 3.84.5 5.04 0 0-1.06-.6.13.07a30 30 0 1 0-11.35-11.32l.04.07a3.14 3.14 0 0 0 5.04.5l17.73-17.73c.4-.4.26-.7-.3-.7 0 0-4.57 0-6.23.02-5.38 0-5.36-7.98-.04-8l17.23.05c1.93 0 3.5 1.57 3.53 3.5l.11 17.33c0 5.33-8 5.34-7.98.02l.02-6.29c0-.55-.32-.68-.7-.3z"
      fill={props.color || '#323232'}
      fillRule="evenodd"
    />
  </svg>
);

export const LinkOutStyle = styled.div`
  display: inline-block;
  height: 20px;
  min-width: 20px;
  width: 20px;
  transform: translateY(5px);
`;

export const NavArrow = (props) => (
  <div style={{ cursor: 'pointer', margin: 15 }}>
    <svg
      fill={props.color}
      stroke="none"
      width="40"
      height="40"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M69.2 47L36.5 14.3c-1.6-1.6-4-1.6-5.7 0s-1.6 4 0 5.7l30 30-30 30c-1.6 1.6-1.6 4.2 0 5.7.8.8 1.8 1.2 2.8 1.2 1 0 2-.5 3-1.3l32.6-33c1.6-1.6 1.6-4 0-5.7z" />
    </svg>
  </div>
);
