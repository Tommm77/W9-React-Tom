import '../styles/UserCard.css';
import Rating from './Rating';
import '../styles/UserCard.css';

function UserCard({ user, index }) {
  return (
    <li className={index % 2 === 0 ? 'blue_card' : 'white_card'}>
      <p>Prénom: {user.name}</p>
      <p>Commentaire: {user.comment}</p>
      <Rating value={user.stars} type='stars' />
      <Rating value={user.emoji} type='emojis' />
      <p>{user.known ? 'Suivi' : 'Suivez le'}</p>
    </li>
  );
}

export default UserCard;