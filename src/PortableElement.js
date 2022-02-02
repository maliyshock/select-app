import ReactDOM from "react-dom";

export function PortableElement(props) {
  const {
    children,
    id,
  } = props;

  const nodeElement = document.getElementById(id);

  return (
    ReactDOM.createPortal(
      children,
      nodeElement
    )
  )
}