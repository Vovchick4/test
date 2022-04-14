import propsType from "prop-types";

import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friend_list}>
      {friends.map((fr) => (
        <li key={fr.id} className={styles.item}>
          <span
            className={styles.status}
            style={
              fr.isOnline
                ? { backgroundColor: "green" }
                : { backgroundColor: "brown" }
            }
          ></span>
          <img
            className={styles.avatar}
            src={fr.avatar}
            alt=""
            width="48"
            height="48"
          />
          <p className={styles.name}>{fr.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propsType = {
  friends: propsType.array,
};
