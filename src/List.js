import ListElement from "./ListElement";

export default function List(props) {
  const {elements, onClick} = props;
  return elements.map((element, index) => (
    <ListElement
      text={element}
      key={`${element}_#{index}`}
      onClick={() => onClick()}
    />
  ))
}