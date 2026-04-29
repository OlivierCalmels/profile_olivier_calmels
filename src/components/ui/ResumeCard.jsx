import { DateLabel } from "./Typography";

export default function ResumeCard({ date, children, compact = false }) {
  return (
    <div className={`resume-card ${compact ? "" : "mb-8"} flex flex-col gap-3 md:flex-row md:justify-between`}>
      <div>{children}</div>
      <DateLabel>{date}</DateLabel>
    </div>
  );
}

