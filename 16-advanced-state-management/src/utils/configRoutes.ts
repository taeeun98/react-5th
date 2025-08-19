import type { AppRoute } from "@/@types/global";
import type { IndexRouteObject, NonIndexRouteObject, RouteObject } from "react-router";



export function configRoutes(navigation:AppRoute[]):RouteObject[]{
  return navigation.map((item)=>{
    const { children, ...routeProps } = item;
    
    // index 라우트 조건 처리 : path가 빈 문자열이거나 '/'일 경우 index 라우팅
    const isIndex = routeProps.path === '' || routeProps.path === '/';
    
    let route:RouteObject;

    if(isIndex){
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { path: _omit, ...rest } = routeProps;
      route = { ...rest, index: true } as IndexRouteObject;
    }else{
      route = routeProps as NonIndexRouteObject;
    }

    if(children && children.length > 0){
      route.children = configRoutes(children);
    }
    return route;
  })
}

























