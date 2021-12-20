/*
 *****************************************************************************************
 * Recursica Material UI DEMO
 * Copyright (C) 2021 Border UX
 *
 * [CHANGE HISTORY]
 * 1. 2021-Nov-12 (zaira@borderux.com) File created
 *
 *****************************************************************************************
 */
 import React from 'react';
 import MuiButton, { ButtonProps as MUIProps } from '@mui/material/Button';

 export interface ButtonProps extends MUIProps {
 }

 export const Button: React.FC<ButtonProps> = props => {
    return (
        <MuiButton
            className={'REC-MuiButton'}
            {...props}
        >
            {props.children}
        </MuiButton>
    );
  };
