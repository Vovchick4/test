import React from "react";
import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from "../../components";

import styles from "./TaskOne.module.css";

import user from "../../data/user.json";
import statistical from "../../data/statistical.json";
import friends from "../../data/friend_list.json";
import transactions from "../../data/transaction_history.json";

export default function TaskOne() {
  return (
    <React.Fragment>
      <div className={styles.content}>
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </div>

      <div className={styles.content}>
        <Statistics title="Upload files" stats={statistical} />
      </div>

      <div className={styles.content}>
        <FriendList friends={friends} />
      </div>

      <div className={styles.content}>
        <TransactionHistory items={transactions} />
      </div>
    </React.Fragment>
  );
}
