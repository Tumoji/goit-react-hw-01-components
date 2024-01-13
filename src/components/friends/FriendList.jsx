import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const friendListRef = useRef();

  useEffect(() => {
    if (friendListRef.current) {
      const totalHeight = Array.from(friendListRef.current.children).reduce(
        (acc, child) => acc + child.offsetHeight,
        0
      );

      friendListRef.current.style.height = `${totalHeight}px`;
    }
  }, [friends]);

  return (
    <ul className={styles.friendList} ref={friendListRef}>
      <li className={styles.friendsTitle}>Friends list</li>
      {friends.map(friend => {
        const statusClassName = friend.isOnline
          ? styles.statusOnline
          : styles.statusOffline;
        return (
          <li className={styles.item} key={friend.id}>
            <span className={statusClassName}>{friend.isOnline}</span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="User Avatar"
              width="44"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
