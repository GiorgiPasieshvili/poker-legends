import s from "./Promo.module.css";

import leftImageSmall from "@/assets/images/promo-left-img-m.png";
import leftImage from "@/assets/images/promo-left-img.png";
import rightImageSmall from "@/assets/images/promo-right-img-m.png";
import rightImage from "@/assets/images/promo-right-img.png";
import timeImage from "@/assets/images/promo-time-img.png";
import BoxHeader from "@/components/BoxHeader";

export default function Promo() {
  return (
    <div className={s.container}>
      {/* Promo Header */}
      <BoxHeader title="ტურნირები და სატელიტები" />

      {/* Promo Content */}
      <div className={s.content}>
        <div className={s.topContainer}>
          <p className="font-bold">
            სერიის ფარგლებში, ყოველდღიური ივენთები დაიწყება:
          </p>
          <img className={s.timeImage} src={timeImage} alt="" />
          <img className={s.leftImageSmall} src={leftImageSmall} alt="" />
          <img className={s.rightImageSmall} src={rightImageSmall} alt="" />
        </div>

        <div className={s.bottomContainer}>
          <p className={s.text}>
            * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
          </p>
          <p className={s.text2}>
            *ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
          </p>
          <button className="button">პოკერის ლობი</button>
        </div>

        <img className={s.leftImage} src={leftImage} alt="" />
        <img className={s.rightImage} src={rightImage} alt="" />
      </div>
    </div>
  );
}
