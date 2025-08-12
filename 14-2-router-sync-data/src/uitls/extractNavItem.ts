import type { NavItem, RouteWithHandler } from "@/@types/global";
import { joinPaths } from "./joinPath";

function extractNavItem(
  routes: RouteWithHandler[],
  parentPath = ""
): NavItem[] {
  const navItems = [];

  for (const route of routes) {

    // depth 들어가기 위해 재귀함수 필요
    const path = route.index
      ? parentPath || "/"
      : joinPaths(parentPath, route.path);

    //1depth
    if(route.handle?.showInNav && route.handle?.label){
      navItems.push({label:route.handle.label, path})
    }

    //2depth
    if (route.children) {
      navItems.push(...extractNavItem(route.children, path));
    }
  }

  return navItems;
}

export default extractNavItem;
