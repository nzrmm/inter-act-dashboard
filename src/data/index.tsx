import {
  IOption,
  IDataBalance,
  IInformation,
  IDataTotalProfit,
  IActivityOverview,
  IDataChartWithTotal,
} from "@/types/data";

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

export const earningDateOptions: IOption[] = [
  {
    label: "Last Week",
    value: {
      sales: {
        percentage: 80,
        total: "251K",
      },
      orders: {
        percentage: 60,
        total: "176K",
      },
    },
  },
  {
    label: "2 Weeks ago",
    value: {
      sales: {
        percentage: 50,
        total: "165K",
      },
      orders: {
        percentage: 40,
        total: "147K",
      },
    },
  },
  {
    label: "Last Month",
    value: {
      sales: {
        percentage: 85,
        total: "465K",
      },
      orders: {
        percentage: 75,
        total: "342K",
      },
    },
  },
];

export const dataOrder: IDataChartWithTotal = {
  total: "189k",
  values: [
    {
      label: "January",
      percentage: 30,
    },
    {
      label: "February",
      percentage: 80,
    },
    {
      label: "March",
      percentage: 50,
    },
    {
      label: "April",
      percentage: 20,
    },
    {
      label: "May",
      percentage: 60,
    },
  ],
};

export const dataProfit: IDataChartWithTotal = {
  total: "8,29k",
  values: [
    {
      label: "January",
      percentage: 0,
    },
    {
      label: "February",
      percentage: 20,
    },
    {
      label: "March",
      percentage: 10,
    },
    {
      label: "April",
      percentage: 30,
    },
    {
      label: "May",
      percentage: 20,
    },
    {
      label: "June",
      percentage: 40,
    },
  ],
};

export const dataTotalProfit: IDataTotalProfit[] = [
  { label: "Jan", earning: 120, expense: -180 },
  { label: "Feb", earning: 210, expense: -90 },
  { label: "Mar", earning: 400, expense: -60 },
  { label: "Apr", earning: 300, expense: -200 },
  { label: "May", earning: 150, expense: -60 },
  { label: "Jun", earning: 90, expense: -90 },
  { label: "Jul", earning: 220, expense: -100 },
  { label: "Aug", earning: 280, expense: -80 },
  { label: "Sep", earning: 100, expense: -120 },
];

export const dataBalance: IDataBalance = {
  totalInThisYear: "$842.98",
  totalInLatestMonth: "$426.20",
  values: [
    { label: "Jan", balance: 300 },
    { label: "Feb", balance: 100 },
    { label: "Mar", balance: 320 },
    { label: "Apr", balance: 140 },
    { label: "May", balance: 180 },
    { label: "Jun", balance: 40 },
    { label: "Jul", balance: 480 },
    { label: "Aug", balance: 240 },
    { label: "Sep", balance: 230 },
    { label: "Oct", balance: 20 },
    { label: "Nov", balance: 310 },
  ],
};
