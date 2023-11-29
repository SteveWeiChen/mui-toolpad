import * as React from 'react';
import createBuiltin from './createBuiltin';
import { SX_PROP_HELPER_TEXT } from './constants';
import Menu from '@mui/icons-material/Menu';
import Language from '@mui/icons-material/Language';
import Apps from '@mui/icons-material/Apps';
import { IconButton, AppBar } from '@mui/material';
import { NavBar as NexusUINavBar, INavBar as NexusUINavBarProps } from '@nexusui/components/NavBar';
import { StatusAvatar as NexusUIStatusAvatar } from '@nexusui/components/StatusAvatar';
import { ActionGroup as NexusUIActionGroup } from '@nexusui/components/ActionGroup';

interface NavBarProps extends NexusUINavBarProps {
  showRightActions: boolean;
  showUserMenu: boolean;
  background: 'inherit' | 'primary';
}

function NavBar({
  showRightActions = true,
  showUserMenu = true,
  background = 'inherit',
  ...rest
}: NavBarProps) {
  const userInfo = {
    id: '1',
    firstName: 'Andy',
    lastName: 'Anan',
    avatar: '',
    email: 'Andy.Anan@hexagon.com',
  };
  const mockRightActions = (
    <NexusUIActionGroup
      max={2}
      direction={'row-reverse'}
      actions={[
        {
          label: 'Change Language',
          icon: <Language />,
          onClick: () => {},
        },
        {
          label: 'View All Apps',
          icon: <Apps />,
          onClick: () => {},
        },
      ]}
    />
  );
  return (
    <AppBar
      color={background}
      position={'static'}
      sx={{ color: background === 'inherit' ? 'text.primary' : 'common.white' }}
    >
      <NexusUINavBar
        navIcon={
          <IconButton color={'inherit'} edge={'start'}>
            <Menu />
          </IconButton>
        }
        pageTitle={'Project Name'}
        {...rest}
      >
        {showRightActions && mockRightActions}
        {showUserMenu && (
          <IconButton edge={'end'} sx={{ ml: 4 }}>
            <NexusUIStatusAvatar {...userInfo} />
          </IconButton>
        )}
      </NexusUINavBar>
    </AppBar>
  );
}

export default createBuiltin(NavBar, {
  helperText:
    'The NexusUI [NavBar](https://polite-stone-0cd5ef903.1.azurestaticapps.net/?path=/story/nexusui-components-nav-bar-readme--page) component.\n\nNavBar allow users to build a navbar of a page.',
  argTypes: {
    pageTitle: {
      helperText: 'Will appear as the title of the navbar.',
      type: 'string',
      default: 'Page Title',
    },
    showRightActions: {
      helperText: "Displays a loading animation indicating the navbar isn't interactive yet",
      type: 'boolean',
    },
    showUserMenu: {
      helperText: "Displays a loading animation indicating the navbar isn't interactive yet",
      type: 'boolean',
    },
    background: {
      helperText: 'The background color of the component.',
      type: 'string',
      enum: ['inherit', 'primary'],
      default: 'inherit',
    },
    sx: {
      helperText: SX_PROP_HELPER_TEXT,
      type: 'object',
    },
  },
});
