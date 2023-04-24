import s from "./Trips.module.css";

import ticketIcon from "@/assets/icons/trips-ticket-icon.png";
import ticketsIcon from "@/assets/icons/trips-tickets-icon.png";
import BoxHeader from "@/components/BoxHeader";

const trips = [
  {
    icon: ticketIcon,
    label: "„Holdem Grinders” -",
    categories: ["C კატეგორიის 1 საგზური"],
    info: null,
  },
  {
    icon: ticketIcon,
    label: "“Cashgame Highrollers ”",
    categories: ["C კატეგორიის 1 საგზური"],
    info: null,
  },
  {
    icon: ticketIcon,
    label: "„Tournament Sharks“",
    categories: ["C კატეგორიის 1 საგზური"],
    info: null,
  },
  {
    icon: ticketsIcon,
    label: "„The Festival in Malta, GTD“",
    categories: ["B კატეგორიის 1 საგზური", "C კატეგორიის 1 საგზური"],
    info: "ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.",
  },
  {
    icon: ticketIcon,
    label: "„The Lord of the Rings“",
    categories: ["C კატეგორიის 1 საგზური"],
    info: "ტურნირზე მონაწილებას შეძლებენ მხოლოდ ევროპაბეთის ბეჭდის მფლობელები",
  },
];

export default function Trips() {
  return (
    <div className={s.container}>
      <BoxHeader title="მოიგე საგზური 30 აპრილის ფინალურ ტურნირებზე" />

      <div className={`${s.content} font-medium`}>
        <ul className={s.list}>
          {trips.map((item, i) => (
            <li key={i} className={s.item}>
              {/* Icon */}
              <img className={s.icon} src={item.icon} alt="" />
              {/* Label */}
              <p className={`${s.label} font-bold`}>{item.label}</p>
              {/* Categories */}
              {item.categories.map((category, i) => (
                <p key={i} className={s.text}>
                  {category}
                </p>
              ))}
              {/* Description */}
              {item.info && <p className={s.text}>{item.info}</p>}
            </li>
          ))}
        </ul>
        <p className={s.description}>
          * The Lord of the Rings ტურნირში მონაწილეობენ წინა და მიმდინარე აქციის
          ბეჭდის მფლობელებიც.
        </p>
        <p className={s.description}>
          * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings
          ტურნირზე მოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით.
        </p>
      </div>
    </div>
  );
}
