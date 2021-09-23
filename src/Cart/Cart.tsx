import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Aside } from './Cart.styles';

type Props = {
  item: CartItemType;
  handleRemoveFromCart: (item: CartItemType) => void;
  btnFunc: string;
}

const Cart: React.FC<Props> = ({ item, handleRemoveFromCart, btnFunc }) => (
  <Aside>
    <img src={ item.image } alt={ item.title } />
    <div>
      <h3>{ item.title }</h3>
      <h3>${ item.price }</h3>
    </div>
    <Button onClick={() => handleRemoveFromCart(item) }>{ btnFunc }</Button>
  </Aside>
);

export default Cart;
