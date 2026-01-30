export interface RouteItem {
  name: string;
  url: string;
}

export interface NavItem {
  title: string;
  items: RouteItem[];
}

export interface routeType {
  navItem: NavItem[];
}

