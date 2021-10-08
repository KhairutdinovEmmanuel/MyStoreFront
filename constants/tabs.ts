import { ROUTER_URL } from "./routerUrl";
import CatalogIcon from "../components/IconTabs/CatalogIcon";
import ShoppingCartIcon from "../components/IconTabs/ShoppingCartIcon";

export const HEADER_TABS = [
  {
    id: 1,
    href: ROUTER_URL.Catalog,
    title: "Catalog",
    Icon: CatalogIcon, 
  },
  {
    id: 2,
    href: ROUTER_URL.ShoppingCart,
    title: "Shopping Cart",
    Icon: ShoppingCartIcon, 
  },
]  