// Core
import { useEffect, useMemo, useState } from 'react';
// Components
import Typography from '@material-ui/core/Typography';
import AccountCircle from '../AccountCircle';
import Box from '@material-ui/core/Box';
import ListItems from '../ListItems';
import Logotype from '../Logotype';
import Link from 'next/link';
// Icons
import MenuIcon from '@material-ui/icons/Menu';
// Styles
import useStyles from './styles';
// Hooks
import useRolePermissions from '../../hooks/useRolePermissions';
// Constants
import { ROUTER_URL } from '../../constants/routerUrl';

const AppHeader: React.FC = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const classes = useStyles({ openMenu });
  const permissions = useRolePermissions("USER");

  const handleClickMenu: React.MouseEventHandler<HTMLDivElement> = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  }

  useEffect(() => {
    const handleResizeWindow = () => {
      const mediaQueryMinWidthMd = window.matchMedia("(min-width: 960px)");
      
      if(mediaQueryMinWidthMd.matches) {
        setOpenMenu(false);
      }
    }

    window?.addEventListener("resize", handleResizeWindow);

    handleResizeWindow();
    
    return () => {
      window?.removeEventListener("resize", handleResizeWindow);
    }
  }, [])

  return (
    <header className={classes.header} >
      <div 
        className={classes.containerMenuIcon} 
        onClick={handleClickMenu} 
      >
        <MenuIcon fontSize="large" />
      </div>
      <div className={classes.sectionLogo}>
        <Logotype />
        <Typography
          variant="h1"
          className={classes.titleLogo}
        >
          <Link href={ROUTER_URL.Home}>
            <a>
              MyStore
            </a>
          </Link>
        </Typography>
      </div>
      <ListItems
        className={classes.sectionTabs}
        items={permissions.headerTabs}
        renderItem={({ Icon, ...item }) => (
          <div 
            key={item.id} 
            className={classes.tab}
          >
            <Icon />
            <Typography
              variant="h2"
              className={classes.tabTitle}
            >
              <Link href={item.href} >
                <a className={classes.tabLink} >
                  {item.title}
                </a>
              </Link>
            </Typography>
          </div>
        )}
      />
      <div className={classes.containerAcountCircle} >
        <AccountCircle 
          listMenu={permissions.listMenu}
          isAuth 
        />
      </div>
    </header>
  )
}

export default AppHeader;