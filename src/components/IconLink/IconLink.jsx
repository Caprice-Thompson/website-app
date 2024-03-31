export default function IconLink(props) {
  return (
    <div id={props.id} onClick={props.function}>
      <span>{props.icon}</span>
    </div>
  );
}
