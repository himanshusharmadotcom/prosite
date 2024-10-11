import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({
    children,
    to,
    onClick,
    variant = null,
    color = "primary",
    customStyles = "",
    startIcon = null, 
    endIcon = null    
}) => {
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <Button
                onClick={onClick}
                variant={variant}
                color={color}
                className={`!px-4 !py-4 !rounded-md ${customStyles}`}
                startIcon={startIcon} 
                endIcon={endIcon}     
            >
                {children}
            </Button>
        </Link>
    );
};

export default CustomButton;
