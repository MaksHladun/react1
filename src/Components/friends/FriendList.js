import Friend from './Friend';

export default function FriendList({ items }) {
  return (
    <div>
      <ul>
        {items.map(el => (
          <Friend
            key={el.id}
            url={el.avatar}
            name={el.name}
            activ={el.isOnline}
            id={el.id}
          />
        ))}
      </ul>
    </div>
  );
}
