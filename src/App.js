import Profile from './components/profile/Profile';
import user from './data/user.json';
import Statistics from './components/statistics/Statistics';
import statisticalData from './data/statistical-data.json';
import FriendList from './components/friendlist/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './components/transactions/TransactionHistory';
import transactions from './data/transactions.json';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
