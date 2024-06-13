import './movieModal.css'

function movieModal(props) {
    return (
        <>
        {console.log("in card: ", props.original_title)}
        <div>{props.original_title}</div>
        </>
    );
}

export default movieModal;