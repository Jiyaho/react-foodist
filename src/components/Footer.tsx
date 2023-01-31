import styles from "../css/App.module.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>서울특별시 00구 00로 00</li>
        <li>사업자등록번호: 000-00-00000</li>
        <li>주식회사 푸디스트 대표이사: Janet</li>
        <li>TEL: 0000-0000</li>
        <li className={styles.copyright}>
          Copyright ⓒ 2023 Foodist Company. All Rights Reserved.
        </li>
      </ul>
    </footer>
  );
}

export default Footer;