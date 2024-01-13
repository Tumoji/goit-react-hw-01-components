import styles from './App.module.css';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import FriendList from './friends/FriendList';
import TransactionHistory from './transactions/TransactionHistory';
import transaction from './transactions.json'

export const App = () => {
  return (
    <div className={styles.components}>
      <div className={styles.leftComponents}>
        <FriendList friends={friends} />
        <div className={styles.userStats}>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <Statistics title={true} stats={data} />
        </div>
      </div>
      <TransactionHistory items={transaction} />
    </div>
  );
};
