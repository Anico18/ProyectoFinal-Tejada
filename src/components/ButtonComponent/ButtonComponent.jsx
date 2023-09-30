import Button from "react-bootstrap/esm/Button";

const ButtonComponent = ({label, bsButtonVariant, onClickFunction}) => {
    return (
        <Button variant={bsButtonVariant} onClick={onClickFunction}>{label}</Button>
    )
}

export default ButtonComponent;