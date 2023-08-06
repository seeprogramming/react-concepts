import React from 'react';

const Button = ({ btnAction, title, disabled }) => {
    return (
        <button
            className={`btn btn-sm btn-primary mt-3 me-3 fw-bold`}
            disabled={disabled}
            onClick={btnAction}
        >
            {title}
        </button>
    );
};

export default Button;
