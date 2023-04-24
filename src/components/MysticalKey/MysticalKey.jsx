import s from "./MysticalKey.module.css";

import mysticalKeyImage from "@/assets/images/mystical-key-img.png";
import BoxHeader from "@/components/BoxHeader";

const leaderboard = [
  {
    id: 0,
    label: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    id: 1,
    label: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    id: 2,
    label: "სპეციალური ტურნირი Tournament Sharks II ადგილი",
  },
  {
    id: 3,
    label: "სპეც. ტურნირი Tournament Sharks III ადგილი",
  },
  {
    id: 4,
    label: "Holdem Grinders ლიდერბორდის გამარჯვებული",
  },
  {
    id: 5,
    label: "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები",
  },
  {
    id: 6,
    label: "The Festival - Road To Malta, III ადგილი",
  },
];

export default function MysticalKey() {
  const image = <img src={mysticalKeyImage} alt="mystical key" />;

  return (
    <div className={s.container}>
      <BoxHeader title={image} />

      <div className={`${s.content} font-bold`}>
        <p className={s.description}>
          მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში მიიღებენ
          საიდუმლო გასაღებს
        </p>
        <div className={s.listContainer}>
          <ul className={s.list}>
            {leaderboard.map((item) => (
              <li key={item.id} className={s.item}>
                <span className={s.place}>{item.id + 1}</span>
                <p className={s.label}>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
