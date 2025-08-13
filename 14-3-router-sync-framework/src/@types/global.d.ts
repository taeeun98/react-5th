import type { RouteObject } from "react-router";

export type NavItem = {
  label: string;
  path: string;
};

// RouteObject 확장해야하니까 & 로 연결
export type RouteWithHandler = RouteObject & {
    handle?:{
        label?:string;
        showInNav?:boolean;
    },
    children?:RouteWithHandler[]
}

export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}