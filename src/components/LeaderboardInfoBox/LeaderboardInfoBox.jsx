import s from "./LeaderboardInfoBox.module.css";

export default function LeaderboardInfoBox() {
  return (
    <div className={s.container}>
      <div className="top-line"></div>
      <p className={`${s.title} font-bold uppercase`}>
        დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 SIDE
        ლიდერბორდი
      </p>
      <p className={`${s.subtitle} font-medium`}>
        * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.
      </p>
    </div>
  );
}
