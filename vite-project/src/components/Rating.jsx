function Rating(props) {
  const rating = props.value;
  const type = props.type;
  let full, empty;

  if (type === 'stars') {
    full = "★";
    empty = "☆";
  } else if (type === 'emojis') {
    full = "😊";
    empty = "😶";
  }

  const ratingString = full.repeat(rating) + empty.repeat(5 - rating);
  return <div>{ratingString}</div>;
}

export default Rating;