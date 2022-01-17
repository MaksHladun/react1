import Painting from './Components/social-profile/social-profile';
import user from './Components/social-profile/user.json';

import StatisticList from './Components/Statistics/StatisticsList';
import date from './Components/Statistics/data.json';

import FriendList from './Components/friends/FriendList';
import dateList from './Components/friends/friends.json';

import TransactionList from './Components/TransactionHistory/transactionsList';
import transaction from './Components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div className="containet">
      <Painting
        url={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <StatisticList item={date} />

      <FriendList items={dateList} />

      <TransactionList items={transaction} />
    </div>
  );
}
