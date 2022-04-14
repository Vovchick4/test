import propsType from "prop-types";

import styles from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
  function randomBgColor() {
    return `rgba(${Math.random() * 255}, ${Math.random(255) * 255}, 255, 0.8)`;
  }

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat_list}>
        {stats.map((st) => (
          <li
            key={st.id}
            className={styles.item}
            style={{ backgroundColor: randomBgColor() }}
          >
            <span className={styles.label}>{st.label}</span>
            <span className={styles.percentage}>{st.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propsType = {
  title: propsType.string,
  stats: propsType.array.isRequired,
};
