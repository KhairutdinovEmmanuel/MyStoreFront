import Link from 'next/link';
// Components
import Typography from '@material-ui/core/Typography';
import AccountCircle from '../AccountCircle';
import Box from '@material-ui/core/Box';
import Logotype from '../Logotype';
// Icons
import CatalogIcon from '../svg/CatalogIcon'; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// Styles
import useStyles from './styles';
// Hooks
import useRolePermissions from '../../hooks/useRolePermissions';

const AppHeader: React.FC = () => {

  const classes = useStyles();
  const permissions = useRolePermissions("USER");

  return (
    <header className={classes.header} >
      <div className={classes.sectionLogo}>
        <Logotype />
        <Typography
          variant="h1"
          className={classes.titleLogo}
        >
          MyStore
        </Typography>
      </div>
      <div className={classes.sectionTabs} >
        <Box display="flex" alignItems="center" >
          <CatalogIcon 
            width={35} 
            height={35} 
            color="#fff" 
            display 
          />
          <Typography
            variant="h2"
            className={classes.tabTitle}
          >
            <Link href="/catalog">
              <a className={classes.tabLink}>
                Catalog
              </a>
            </Link>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" >
          <ShoppingCartIcon fontSize="large" />
          <Typography
            variant="h2"
            className={classes.tabTitle}
          >
            <Link href="/shopping-cart">
              <a className={classes.tabLink}>
                Shopping Cart
              </a>
            </Link>
          </Typography>
        </Box>
      </div>
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