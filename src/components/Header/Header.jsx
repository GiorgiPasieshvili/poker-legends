import { useEffect, useState } from "react";

import s from "./Header.module.css";

import banner from "@/assets/images/banner.jpg";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hasScrolled = scrollPosition > 50;

  return (
    <header className={s.header}>
      <img className={s.banner} src={banner} alt="banner" />

      <div
        className={s.headerTop}
        data-background={hasScrolled ? "true" : "false"}
      >
        <div className={s.categories}>
          <span className="font-medium">პოკერი</span>
          <span className="font-bold">1-30 აპრილი</span>
        </div>
        <button className={s.closeButton}></button>
      </div>

      <div className={s.content}>
        <p className={`${s.heading} font-bold uppercase`}>
          მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
        </p>
        <p className={`${s.subheading} font-medium`}>
          მოხვდი პოკერის ფესტივალზე მალტაში
        </p>
      </div>
    </header>
  );
}
