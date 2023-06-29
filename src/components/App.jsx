import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';

import userData from 'data/user.json';
import statsData from 'data/data.json';
import friendsData from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <div>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </div>

      <div>
        <Statistics title="Upload stats" stats={statsData} />
        {/* <Statistics stats={statsData} /> */}
      </div>

      <div>
        <FriendList friends={friendsData} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
