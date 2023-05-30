import UserCard from './UserCard'; // assurez-vous que le chemin d'importation est correct

function UserInfo() {
  const Users = [
    { name: 'John', comment: 'Super utilisateur', known: true, stars: 5, emoji: 4},
    { name: 'Lucas', comment: 'Toujours prêt à aider', known: false, stars: 3, emoji: 3 },
    { name: 'Jean', comment: 'Grand connaisseur de React', known: true, stars: 4, emoji: 5 },
    { name: 'Pierre', comment: 'Débute en JavaScript', known: false, stars: 2, emoji: 4 },
    { name: 'Paul', comment: 'Expert en CSS', known: true, stars: 5, emoji: 3 },
    { name: 'Jacques', comment: 'Passionné de programmation', known: false, stars: 3, emoji: 4 },
    { name: 'Marie', comment: 'Développeuse full-stack', known: true, stars: 4, emoji: 4 },
    { name: 'Julie', comment: 'Spécialiste en UI/UX', known: false, stars: 5, emoji: 5 }
  ];

  return (
    <ul>
      {Users.map((user, index) => (
        <UserCard key={index} user={user} index={index} />
      ))}
    </ul>
  );
}

export default UserInfo;