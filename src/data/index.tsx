import { IInformation, IActivityOverview } from "@/types/data";

import {
  ICTrophy,
  ICWallet,
  ICRevenue,
  ICPieChart,
  ICCalendar,
} from "@/assets/svgs";

export const informations: IInformation[] = [
  { icon: <ICPieChart />, name: "Total Cost", value: "$31.868" },
  { icon: <ICTrophy />, name: "Total Sales", value: "$66,053" },
  { icon: <ICCalendar />, name: "This Week", value: "$35,000,00" },
  { icon: <ICRevenue />, name: "Revenue", value: "$63,00K" },
  { icon: <ICWallet />, name: "$1250", value: "Last payment" },
];

export const activityOverviews: IActivityOverview[] = [
  {
    type: "mentioned",
    from: "Nick Mark",
    to: "Sara Smith",
    date: "11 JUL 8:10 PM",
  },
  {
    type: "removed",
    postName: "Post Name",
    postAuthor: "Nick Mark",
    date: "11 JUL 9:10 PM",
  },
  {
    type: "published",
    publishedPerson: "Patrick Sulivan",
    date: "12 JUL 10:10 PM",
  },
  {
    type: "subscribed",
    subscriberTotal: "240 + users",
    date: "18 JUL 19:10 PM",
  },
  {
    type: "suspended",
    postName: "Post Name",
    postAuthor: "Nick Mark",
    date: "11 JUL 9:10 PM",
  },
];
