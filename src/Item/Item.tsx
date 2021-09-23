import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (item: CartItemType) => void;
  btnFunc: string;
}

const Item: React.FC<Props> = ({ item, handleAddToCart, btnFunc }) => (
  <Wrapper>
    <img src={ item.image } alt={ item.title } />
    <div>
      <h3>{ item.title }</h3>
      <p>{ item.description }</p>
      <h3>${ item.price }</h3>
    </div>
    <Button onClick={() => handleAddToCart(item) }>{ btnFunc }</Button>
  </Wrapper>
);

export default Item;
