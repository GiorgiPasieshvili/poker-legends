import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import s from "./Promotions.module.css";

import promotion1 from "@/assets/images/promotion-1.jpeg";
import promotion2 from "@/assets/images/promotion-2.jpeg";
import promotion3 from "@/assets/images/promotion-3.jpeg";
import promotion4 from "@/assets/images/promotion-4.jpeg";
import promotion5 from "@/assets/images/promotion-5.jpeg";

const data = [
  {
    id: 0,
    label: "50% RAKEBACK",
    description: "ისარგებლე გაზრდილი რეიქბექით",
    image: promotion1,
  },
  {
    id: 1,
    label: "გამოსცადე პოკერის ახალი სახეობა",
    description: "ითამაშე ჩინური პოკერი მხოლოდ ჩვენთან",
    image: promotion2,
  },
  {
    id: 2,
    label: "სპინ-პოკერი",
    description: "მოიგე ბაი-ინზე 1 000-ჯერ მეტი თანხა",
    image: promotion3,
  },
  {
    id: 3,
    label: "First Bonus",
    description: "მიიღე 1 000₾ ბონუსი პოკერში",
    image: promotion4,
  },
  {
    id: 4,
    label: "Bad Beat Jackpot",
    description: "შეცვალე თამაშის წესები",
    image: promotion5,
  },
];

export default function Promotions() {
  return (
    <section className="section">
      <h2 className="section-title">მიმდინარე აქციები</h2>
      <Swiper
        className={s.swiper}
        spaceBetween={16}
        slidesPerView={1.5}
        breakpoints={{
          500: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
        }}
      >
        {data.map(({ id, label, description, image }) => (
          <SwiperSlide key={id} className={s.item}>
            <img className={s.image} src={image} alt={label} />
            <div className={s.text}>
              <p className="font-bold">{label}</p>
              <p>{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
