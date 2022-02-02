export default function ListElement(props) {
  const {text} = props;

  const onClick = () => {

  }

  return (
    <li onClick={() => onClick()}><button>{text}</button></li>
  )
}