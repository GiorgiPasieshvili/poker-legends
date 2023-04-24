import s from "./Tabs.module.css";

const data = [
  { id: 0, date: "1-29 აპრილი", label: "Cash Games" },
  { id: 1, date: "13-29 აპრილი", label: "Spring Series" },
  { id: 2, date: "30 აპრილი", label: "Final Stage" },
];

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className={s.container}>
      {data.map(({ id, date, label }) => (
        <div
          key={id}
          className={s.item}
          data-active={activeTab === id ? true : false}
          onClick={() => setActiveTab(id)}
        >
          <p className={`${s.date} font-medium`}>{date}</p>
          <p className={`${s.label} font-bold`}>{label}</p>
        </div>
      ))}
    </div>
  );
}
