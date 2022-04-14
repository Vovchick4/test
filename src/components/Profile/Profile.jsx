import propsType from "prop-types";

import styles from "./Profile.module.css";

export default function Profile({ avatar, name, tag, location, stats }) {
  return (
    <section className={styles.content}>
      <div className={styles.descrioption}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stats_li}>
          <p className={styles.stats_li_p}>Followers</p>
          <p className={styles.stats_li_sub_p}>{stats.followers}</p>
        </li>
        <li className={styles.stats_li}>
          <p className={styles.stats_li_p}>Views</p>
          <p className={styles.stats_li_sub_p}>{stats.views}</p>
        </li>
        <li className={styles.stats_li}>
          <p className={styles.stats_li_p}>Likes</p>
          <p className={styles.stats_li_sub_p}>{stats.likes}</p>
        </li>
      </ul>
    </section>
  );
}

Profile.propsType = {
  avatar: propsType.string.isRequired,
  name: propsType.string.isRequired,
  tag: propsType.string.isRequired,
  location: propsType.string.isRequired,
  stats: {
    followers: propsType.number.isRequired,
    views: propsType.number.isRequired,
    likes: propsType.number.isRequired,
  },
};
