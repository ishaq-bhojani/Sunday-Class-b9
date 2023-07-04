import { Card, Divider } from 'antd';
const { Meta } = Card;
import {AiOutlineLike } from 'react-icons/ai';
import {BiComment} from 'react-icons/bi';

function Item({ data }) {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://picsum.photos/200/100" />}
        >
            <Meta title={`${data.firstName} ${data.lastName}`} description={data.phone} />
            <Divider />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <AiOutlineLike /> {data.numLikes}
                </div>
                <div>
                    <BiComment /> {data.numLikes}
                </div>
            </div>
        </Card>
    );
}

export default Item;