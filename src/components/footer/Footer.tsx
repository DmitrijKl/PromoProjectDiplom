import type React from "react";
import styles from "./footer.module.scss";
import PromoLogo from "../../assets/PromoLogo.svg?react";
import IconVK from "../../assets/social media/VK.svg?react";
import IconTelegram from "../../assets/social media/Telegram.svg?react";
import IconYouTube from "../../assets/social media/YouTube.svg?react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSectionOne}>
        <div className={styles.footerLinks}>
          <div className={styles.logo}>
            <Link to="/">
              <PromoLogo></PromoLogo>
            </Link>
          </div>
          <ul className={styles.listLinks}>
            <li>
              <a href="https://promo-z.ru/about" target="blank">
                О нас
              </a>
            </li>
            <li>
              <a href="https://promo-z.ru/vacancies" target="blank">
                Вакансии
              </a>
            </li>
            <li>
              <a href="https://promo-z.ru/contacts" target="blank">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.IconsSC}>
          <a href="https://vk.com/promo_z_ru" target="blank">
            <IconVK />
          </a>
          <a href="https://t.me/promoitinc" target="blank">
            <IconTelegram />
          </a>
          <a
            href="https://www.youtube.com/channel/UC7_G6BP3YLH-iE7RmkctYOw"
            target="blank"
          >
            <IconYouTube />
          </a>
        </div>
        <div className={styles.footerContacts}>
          <a href="tel:+74994042563" className={styles.tel}>
            +7 499 404 25 63
          </a>
          <p>г. Ульяновск, ул. Северная, д. 12/5</p>
        </div>
      </div>
      <div className={styles.footerSectionTwo}>
        <p>© PROMO 2012–2024</p>
        <div>Политика конфиденциальности</div>
      </div>
    </footer>
  );
};

export default Footer;
