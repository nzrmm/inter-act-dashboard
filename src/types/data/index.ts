export type IDataInformation = {
  icon: React.ReactNode;
  name: string | number;
  value: string | number;
};

type IMentionedActivity = {
  type: "mentioned";
  from: string;
  to: string;
  date: string;
};

type IRemovedActivity = {
  type: "removed";
  postName: string;
  postAuthor: string;
  date: string;
};

type IPublishedActivity = {
  type: "published";
  publishedPerson: string;
  date: string;
};

type ISubscribedActivity = {
  type: "subscribed";
  subscriberTotal: string;
  date: string;
};

type ISuspendedActivity = {
  type: "suspended";
  postName: string;
  postAuthor: string;
  date: string;
};

export type IDataActivityOverview =
  | IMentionedActivity
  | IRemovedActivity
  | IPublishedActivity
  | ISubscribedActivity
  | ISuspendedActivity;

export type IOption = {
  label: string;
  value: any;
};

export type IDataChart = {
  label: string;
  percentage: number;
};

export type IDataChartWithTotal = {
  total: string | number;
  values: IDataChart[];
};

export type IDataTotalProfit = {
  label: string;
  earning: number;
  expense: number;
};

export type IDataBalance = {
  totalInThisYear: string | number;
  totalInLatestMonth: string | number;
  values: { label: string; balance: number }[];
};
