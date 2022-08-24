
import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../styles/components/Message.css';

const setMessage = (type) => {
  let icon;
  if (type === 'alert' || type === 'info') icon = <ErrorOutlineIcon />;
  if (type === 'warning') icon = <WarningAmberIcon />;
  if (type === 'success') icon = <CheckCircleOutlineIcon />;
  return icon;
};

const Message = ({ children, type, hide, onCLickClose }) => (
  <div hidden={hide} className={`${hide ? 'Message-hidden' : 'Message'} Message-${type}`}>
    <span className="Message-icon">{setMessage(type)}</span>
    <h4 className="Message-self">{children}</h4>
    <button type="button" onClick={onCLickClose} className="Message-close">
      X
    </button>
  </div>
);

export default Message;