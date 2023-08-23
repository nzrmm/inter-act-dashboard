import { IRoutes } from "@/types/constants";

import {
  ICHome,
  ICReport,
  ICLogout,
  ICSetting,
  ICNotification,
} from "@/assets/svgs";

export const ROUTES: IRoutes[] = [
  { to: "/", name: "Home", icon: <ICHome /> },
  { to: "/reports", name: "Reports", icon: <ICReport /> },
  {
    to: "/notifications",
    name: "Notifications",
    value: 1,
    icon: <ICNotification />,
  },
  { to: "/settings", name: "Settings", icon: <ICSetting /> },
  { to: "/logout", name: "Log out", icon: <ICLogout /> },
];
