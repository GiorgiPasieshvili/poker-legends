import s from "./Festival.module.css";

import eventIcon from "@/assets/icons/festival-event-icon.png";
import hotelIcon from "@/assets/icons/festival-hotel-icon.png";
import moneyIcon from "@/assets/icons/festival-money-icon.png";
import ticketIcon from "@/assets/icons/festival-ticket-icon.png";
import banner from "@/assets/images/festival-img.jpg";
import BoxHeader from "@/components/BoxHeader";

const benefits = [
  {
    label: "A კატეგორიის საგზურში შედის",
    items: [
      {
        icon: ticketIcon,
        label: "ორმხრივი ავიაბილეთი",
      },
      {
        icon: eventIcon,
        label: "The Festival in Malta-ს მეინ ივენთის ბაი-ინი",
      },
      {
        icon: eventIcon,
        label: "Holdem ან Omaha ჰაიროლერის ბაი-ინი",
      },
      {
        icon: hotelIcon,
        label: "სასტუმრო Golden Tulip Vivaldi Hotel",
      },
      {
        icon: moneyIcon,
        label: "€500 სახარჯი ფული",
      },
    ],
  },
  {
    label: "B კატეგორიის საგზურში შედის",
    items: [
      {
        icon: ticketIcon,
        label: "ორმხრივი ავიაბილეთი",
      },
      {
        icon: eventIcon,
        label: "The Festival in Malta-ს მეინ ივენთის ბაი-ინი",
      },
      {
        icon: moneyIcon,
        label: "€550 Tournament Money",
      },
      {
        icon: hotelIcon,
        label: "სასტუმრო Golden Tulip Vivaldi Hotel",
      },
      {
        icon: moneyIcon,
        label: "€500 სახარჯი ფული",
      },
    ],
  },
  {
    label: "C კატეგორიის საგზურში შედის",
    items: [
      {
        icon: ticketIcon,
        label: "ორმხრივი ავიაბილეთი",
      },
      {
        icon: eventIcon,
        label: "The Festival in Malta-ს მეინ ივენთის ბაი-ინი",
      },
      {
        icon: hotelIcon,
        label: "სასტუმრო Golden Tulip Vivaldi Hotel",
      },
      {
        icon: moneyIcon,
        label: "€500 სახარჯი ფული",
      },
    ],
  },
];

export default function Festival() {
  return (
    <div className={s.container}>
      <img className={s.banner} src={banner} alt="" />
      <div className={s.description}>
        <p className="font-medium">გაემგზავრე THE FESTIVAL IN MALTA-ზე!</p>
        <p className="font-medium">
          The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის
          მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
        </p>
      </div>

      <div className={s.info}>
        <div className="left-line"></div>
        <p className="font-medium">
          15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
        </p>
      </div>

      {/* Benefits */}
      <div className={s.boxes}>
        {benefits.map(({ label, items }, i) => (
          <div key={i} className={s.box}>
            {/* Header */}
            <BoxHeader title={label} isSmall />

            {/* List */}
            <ul className={s.benefitsList}>
              {items.map((item, j) => (
                <li key={j} className={s.benefitItem}>
                  <img src={item.icon} alt="" />
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
