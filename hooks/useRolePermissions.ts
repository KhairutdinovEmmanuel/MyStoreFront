import { 
  LIST_MENU_ADMIN, LIST_MENU_MANAGER, LIST_MENU_CLIENT 
} from '../constants/listMenu';

export type RoleType = "ADMIN" | "MANAGER" | "USER";

const useRolePermissions = (role: RoleType) => {
  switch(role) {
    case "ADMIN":
      return {
        isAdmin: true,
        isManager: false,
        isClient: false,
        listMenu: LIST_MENU_ADMIN,
      } 
    case "MANAGER":
      return {
        isAdmin: false,
        isManager: true,
        isClient: false,
        listMenu: LIST_MENU_MANAGER,
      }
    default: 
      return {
        isAdmin: false,
        isManager: false,
        isClient: true,
        listMenu: LIST_MENU_CLIENT
      }
  }
}

export default useRolePermissions;