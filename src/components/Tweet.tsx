interface TweetProps {
  user: string;
  children: string;
  likes?: number;
}

export function Tweet(props: TweetProps) {
  console.log(props.user);

  const tweetStyle = {
    borderRadius: 8,
  }

  return(
    <div className="tweet" style={tweetStyle}>
      <strong>{props.user}</strong>
      <p>{props.children}</p>
      <button>{props.likes ?? 0}</button>
    </div>
  );
}
