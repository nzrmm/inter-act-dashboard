import cx from "classnames";

import { Timeline, TimelineItem } from "../../components/commons";
import { ICArrowUp } from "../../assets/svgs";

import { activityOverviews } from "../../data";
import { IActivityOverview } from "../../types/data";

const CardActivityOverview = () => {
  const renderTimelineDescription = (item: IActivityOverview) => {
    switch (item.type) {
      case "mentioned":
        return (
          <>
            <span className={cx("font-bold")}>{item.from}</span> Mentioned{" "}
            <span className={cx("font-bold")}>{item.to}</span> In New Post
          </>
        );
      case "removed":
        return (
          <>
            The <span className={cx("font-bold")}>{item.postName}</span> was
            removed by{" "}
            <span className={cx("font-bold")}>{item.postAuthor}</span>
          </>
        );
      case "published":
        return (
          <>
            <span className={cx("font-bold")}>{item.publishedPerson}</span>{" "}
            Publised a New Post
          </>
        );
      case "subscribed":
        return (
          <>
            <span className={cx("font-bold")}>{item.subscriberTotal}</span> have
            subscribed to Newsletter #1
          </>
        );
      case "suspended":
        return (
          <>
            The <span className={cx("font-bold")}>{item.postName}</span> was
            suspended by{" "}
            <span className={cx("font-bold")}>{item.postAuthor}</span>
          </>
        );
      default:
        return "";
    }
  };

  return (
    <div className={cx("w-2/5 bg-dark-04 p-6 rounded-lg")}>
      <div className={cx("mb-6")}>
        <p className={cx("font-bold text-xl text-[#D3D3D3] mb-2")}>
          Activity overview
        </p>
        <div className={cx("flex items-center gap-2")}>
          <ICArrowUp />
          <p>16% this month</p>
        </div>
      </div>

      <Timeline>
        {activityOverviews.map((item, index) => {
          return (
            <TimelineItem key={index}>
              <p className={cx("text-sm text-[#D3D3D3] mb-1")}>
                {renderTimelineDescription(item)}
              </p>
              <p className={cx("text-xs text-[#9F9F9F]")}>{item.date}</p>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default CardActivityOverview;
