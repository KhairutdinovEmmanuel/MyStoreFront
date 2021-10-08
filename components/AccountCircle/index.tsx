import Link from 'next/link';
import { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountMenu from '../AccountMenu';
import useStyles from './styles';

export interface IListMenu {
  id: number;
  href: string;
  title: string;
}

export interface IAccountCircleProps {
  isAuth: boolean;
  listMenu: IListMenu[];
}

const AccountCircle: React.FC<IAccountCircleProps> = (props) => {
  const { isAuth, listMenu } = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {
        isAuth ? (
          <span
            onClick={handleClick}
          >
            <AccountCircleIcon fontSize="large" />
          </span>
        ) : (
          <Link href={'/login'} >
            <a><AccountCircleIcon fontSize="large" /></a>
          </Link>
        )
      }
      <AccountMenu 
        open={open}
        listMenu={listMenu}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </div>
  )
}

export default AccountCircle;