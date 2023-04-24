import s from "./Tournaments.module.css";

import tournamentBgMain from "@/assets/images/tournament-bg-main.png";
import tournamentBg from "@/assets/images/tournament-bg.png";

export default function Tournaments() {
  return (
    <div className={s.container}>
      <p className={`${s.heading} font-bold uppercase`}>
        ყოველდღიური ტურნირები და სატელიტები
      </p>

      <div className={s.list}>
        <div className={s.item}>
          <img className={s.image} src={tournamentBg} alt="" />
          <div className={`${s.textContainer} font-bold`}>
            <div>
              <p className={s.title}>Holdem Highrollers</p>
              <p className={s.prize}>50 000₾</p>
            </div>
            <div>
              <p className={`${s.price} uppercase`}>ბაი-ინი - 550₾</p>
              <p className={s.date}>27 აპრილი</p>
            </div>
          </div>
        </div>
        <div className={s.item}>
          <img className={s.image} src={tournamentBg} alt="" />
          <div className={`${s.textContainer} font-bold`}>
            <div>
              <p className={s.title}> Omaha Highrollers</p>
              <p className={s.prize}> 50 000₾</p>
            </div>
            <div>
              <p className={`${s.price} uppercase`}> ბაი-ინი - 550₾</p>
              <p className={s.date}> 28 აპრილი</p>
            </div>
          </div>
        </div>
        <div className={s.item}>
          <img className={s.image} src={tournamentBgMain} alt="" />
          <div className={`${s.textContainer} font-bold`}>
            <div>
              <p className={s.title}>Main Events</p>
              <p className={s.prize}>150 000₾</p>
            </div>
            <div>
              <p className={`${s.price} uppercase`}>ბაი-ინი - 440₾</p>
              <p className={s.date}>29 აპრილი</p>
            </div>
          </div>
        </div>
      </div>

      <p className={s.description}>
        * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The
        Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის
        მისაღებად.
      </p>
    </div>
  );
}
