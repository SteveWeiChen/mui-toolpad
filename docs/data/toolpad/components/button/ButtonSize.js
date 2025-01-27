import * as React from 'react';
import { Button } from '@mui/toolpad-components';
import { Stack } from '@mui/material';

const TOOLPAD_PROPS1 = {
  size: 'small',
  variant: 'contained',
  content: 'Small',
};

const TOOLPAD_PROPS2 = {
  size: 'medium',
  variant: 'contained',
  content: 'Medium',
};

const TOOLPAD_PROPS3 = {
  size: 'large',
  variant: 'contained',
  content: 'Large',
};

export default function BasicButton() {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <Button {...TOOLPAD_PROPS1} />
      <Button {...TOOLPAD_PROPS2} />
      <Button {...TOOLPAD_PROPS3} />
    </Stack>
  );
}
