import s from "./BoxHeader.module.css";

export default function BoxHeader({ title, isSmall }) {
  return (
    <div className={s.container} data-small={isSmall}>
      <div className="top-line"></div>
      <p className={!isSmall && "font-bold uppercase"}>{title}</p>
    </div>
  );
}
