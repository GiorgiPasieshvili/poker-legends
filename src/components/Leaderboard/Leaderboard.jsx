import s from "./Leaderboard.module.css";

import exampleIcon from "@/assets/icons/example-icon.png";
import leaderTicketIcon from "@/assets/icons/leader-ticket-icon.png";
import leaderTravelIcon from "@/assets/icons/leader-travel-icon.png";
import leaderVoucherIcon from "@/assets/icons/leader-voucher-icon.png";
import voucherIcon from "@/assets/icons/voucher-icon.png";
import BoxHeader from "@/components/BoxHeader";

const prizes = [
  {
    id: 0,
    icon: leaderTravelIcon,
    label: "The Festival in Malta-ს საგზური",
  },
  {
    id: 1,
    icon: leaderTicketIcon,
    label:
      "სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური",
  },
  {
    id: 2,
    icon: leaderVoucherIcon,
    label: "ტექნიკის მაღაზიის ვაუჩერი.",
  },
];

const leaderboard = [
  {
    id: 0,
    voucher: "--",
    prize: "A კატეგორიის საგზური",
  },
  {
    id: 1,
    voucher: "--",
    prize: "B კატეგორიის საგზური",
  },
  {
    id: 2,
    voucher: "1500₾",
    prize: "სპეც. ტურნირის ბილეთი",
  },
  {
    id: 3,
    voucher: "1200₾",
    prize: "სპეც. ტურნირის ბილეთი",
  },
  {
    id: 4,
    voucher: "1000₾",
    prize: "სპეც. ტურნირის ბილეთი",
  },
  {
    id: 5,
    voucher: "800₾",
    prize: "სპეც. ტურნირის ბილეთი",
  },
  {
    id: 6,
    voucher: "700₾",
    prize: "სპეც. ტურნირის ბილეთი",
  },
  {
    id: 7,
    voucher: "600₾",
    prize: "სპეც. ტურნირის ბილეთი",
  },
];

export default function Leaderboard() {
  return (
    <div className={s.container}>
      {/* Header */}
      <BoxHeader title="1ლ რეიკი = 1 ქულას" />

      {/* Content */}
      <div className={s.content}>
        {/* Subtitle */}
        <div className={s.subtitle}>
          <span>ჰოლდემის TOP20 ლიდერბორდი</span>
          <img className={s.icon} src={exampleIcon} alt="info" />
        </div>

        {/* Table */}
        <div className={s.table}>
          {/* Table Labels */}
          <div className={`${s.tableLabels} uppercase`}>
            <span className={s.tableLabel}>ადგილი</span>
            <span className={s.tableLabel}>
              <img src={voucherIcon} alt="voucher" />
              <span>ვაუჩერი</span>
            </span>
            <span className={s.tableLabel}>პრიზი</span>
          </div>
          {/* Table Items */}
          <ul className={`${s.tableList} font-bold`}>
            {leaderboard.map((item) => (
              <li key={item.id} className={s.tableItem}>
                <span className={s.tablePlace}>{item.id++}</span>
                <span>{item.voucher}</span>
                <span>{item.prize}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prizes */}
        <ul className={s.prizes}>
          {prizes.map((item) => (
            <li key={item.id} className={s.prizeItem}>
              <div className="left-line"></div>
              <img className={s.prizeIcon} src={item.icon} alt="" />
              <p className={s.prizeLabel}>{item.label}</p>
            </li>
          ))}
        </ul>

        <p className={`${s.text} font-medium`}>
          * ლიდერბორდის შედეგები განახლდება <a href="/">პოკერის ლობიში</a>
        </p>
      </div>
    </div>
  );
}
