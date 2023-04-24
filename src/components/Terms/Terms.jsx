import { useState } from "react";

import s from "./Terms.module.css";

import arrowIcon from "@/assets/icons/arrow-icon.png";

const data = [
  {
    id: 0,
    label: "როდის იწყება აქცია?",
    content: [
      "აქცია დაიწყება 1 აპრილს 00:00 საათზე და დასრულდება 30 აპრილს 23:59 საათზე.",
      "აქცია ჩატარდება სამ ეტაპად:",
      "კამპანიის ფარგლებში, თამაშდება სხადასხვა კატეგორიის The Festival in Malta-ს საგზურები:",
    ],
    open: false,
  },
  {
    id: 1,
    label: "როგორ მივიღო აქციაში მონაწილეობა?",
    content: [
      "Cash Game ეტაპი:",
      "Spring Series ეტაპი:",
      "Final Stage ეტაპზე თამაშდება პოკერის ფესტივალის საგზურები მალტაში.",
      "პრიზების მისაღებად გასათვალისწინებელი პირობები:",
      "ვაუჩერები გამარჯვებულებს გადაეცემათ არაუგვიანეს 2023 წლის მაისის ბოლომდე.",
      "მისტიური გასაღების შესახებ დეტალური ინფორმაცია მოთამაშეებისთვის ცნობილი გახდება წლის ბოლომდე.",
    ],
    open: false,
  },
  {
    id: 2,
    label: "რა შეზღუდვები მოქმედებს აქციის განმავლობაში?",
    content: [
      "ორი სხვადასხვა კატეგორიის საგზურის მოპოვების შემთხვევაში, მომხმარებელი მიიღებს მხოლოდ ერთ უფრო მაღალი ღირებულების საგზურს, ხოლო მეორე გადაეცემა 1 ადგილით ქვემოთ მყოფს.",
      "საგზურის მფლობელები ვალდებული არიან, ჩაერთონ კომპანიის მიერ დაგეგმილ ყველა სარეკლამო აქტივობაში.",
      "თუ მოთამაშე მოიგებს რომელიმე ტურნირის ბილეთს ორჯერ ან მეტჯერ, მას შეეძლება ბილეთის გამოყენება მხოლოდ იმავე ტურნირის Reentry-ზე. არააქტიური ბილეთები გაუქმდება და არ გადაიცვლება სატურნირო თანხაზე.",
    ],
    open: false,
  },
  {
    id: 3,
    label: "ზოგადი",
    content: [
      "ნებისმიერი სახის არასამართლიანი თამაში დაისჯება ევროპაბეთის წესების შესაბამისად და ასეთ ქმედებაში შემჩნეული მოთამაშე, კომპანიის გადაწყვეტილებით, მოიხსნება გათამაშებიდან და ვერ მიიღებს არასამართლიანად მოგებულ პრიზს.",
      "ევროპაბეთი იტოვებს უფლებას ნებისმიერ დროს, ცალმხრივად შეიტანოს ცვლილება აქციის პირობებში. კომპანია დაუყოვნებლივ უზრუნველყოფს ცვლილებების გამოქვეყნებას, ხოლო მოთამაშე ვალდებულია ეტაპობრივად გაეცნოს www.europebet.com ვებ გვერდზე არსებულ აქციის წესებს.",
    ],
    open: false,
  },
];

export default function Terms() {
  const [terms, setTerms] = useState(data);

  const toggleTerm = (id) => {
    setTerms(
      terms.map((item) => {
        if (id === item.id) item.open = !item.open;
        return item;
      })
    );
  };

  return (
    <section className="section">
      <h2 className="section-title">წესები და პირობები</h2>
      <ul className={s.list}>
        {terms.map(({ id, label, content, open }) => (
          <li key={id}>
            <div className={s.item} onClick={() => toggleTerm(id)}>
              <span>{label}</span>
              <img
                data-expanded={open ? true : false}
                className={s.icon}
                src={arrowIcon}
                alt="arrow"
              />
            </div>
            <ul className={s.content} data-visible={open ? true : false}>
              {content.map((item, i) => (
                <li key={i} className={s.contentItem}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
