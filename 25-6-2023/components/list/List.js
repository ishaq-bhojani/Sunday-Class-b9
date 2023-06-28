import Item from "../item/Item";

function List ({arr}) {
    const bool = false;
    const items = arr.map(item => <Item key={item.id} data={item} />);
    return (
        <div className={`container ${bool ? "my-app" : ""}`}>
            {items}
        </div>
    );
}

export default List;