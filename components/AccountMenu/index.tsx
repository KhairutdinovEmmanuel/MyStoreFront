import Link from 'next/link';
import { Menu, MenuItem } from '@material-ui/core';

export interface IAccountMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
  listMenu: any[];
}

const AccountMenu: React.FC<IAccountMenuProps> = (props) => {
  
  const { 
    open, 
    listMenu, 
    anchorEl, 
    handleClose, 
  } = props;
  
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
          listMenu.map((item) => (
            <MenuItem key={item.id} >
              <Link href={item.href} >
                <a>
                  {item.title}
                </a>
              </Link>
            </MenuItem>
          ))
        }
      </Menu>
    </>
  )
}

export default AccountMenu;