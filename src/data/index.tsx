import { IInformation } from "../types/data";

import {
  ICTrophy,
  ICWallet,
  ICRevenue,
  ICPieChart,
  ICCalendar,
} from "../assets/svgs";

export const informations: IInformation[] = [
  { icon: <ICPieChart />, name: "Total Cost", value: "$31.868" },
  { icon: <ICTrophy />, name: "Total Sales", value: "$66,053" },
  { icon: <ICCalendar />, name: "This Week", value: "$35,000,00" },
  { icon: <ICRevenue />, name: "Revenue", value: "$63,00K" },
  { icon: <ICWallet />, name: "$1250", value: "Last payment" },
];
