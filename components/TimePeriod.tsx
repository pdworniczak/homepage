import dayjs from "dayjs";
import styles from "./components.module.scss";
import { EntryFields } from "contentful";

interface TimePeriodProps {
  startDate: EntryFields.Date;
  endDate?: EntryFields.Date;
  orientation?: Orientation;
}

export type Orientation = "vertical" | "horizontal";

export const TimePeriod = ({
  startDate,
  endDate,
  orientation = "vertical",
}: TimePeriodProps) => (
  <section
    className={`${styles.timePeriod} ${getClassByOrientation(orientation)}`}
  >
    <span>{endDate ? dayjs(endDate).format("YYYY MMM") : "present"}</span>
    <span>{" - "}</span>
    <span>{dayjs(startDate).format("YYYY MMM")}</span>
  </section>
);

const getClassByOrientation = (orientation: Orientation) => {
  switch (orientation) {
    case "vertical":
      return styles.timePeriodVertical;
    case "horizontal":
      return styles.timePeriodHorizontal;
  }
};
