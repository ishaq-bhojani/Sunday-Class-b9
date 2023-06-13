import Item from "../item/Item";

function List ({arr}) {
    const items = arr.map(item => <Item key={item} text={item} />);
    return (
        <ul>
            {items}
        </ul>
    );
}

export default List;