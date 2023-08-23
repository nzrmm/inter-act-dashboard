export type IInformation = {
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

export type IActivityOverview =
  | IMentionedActivity
  | IRemovedActivity
  | IPublishedActivity
  | ISubscribedActivity
  | ISuspendedActivity;

export type IOption = {
  label: string;
  value: any;
};
