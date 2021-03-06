import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Aside from './Cart/Cart';
import Item from './Item/Item';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
import { Wrapper, StyledButton, StyledWrapper } from './App.styles';
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};


const getProducts = async () : Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json();


function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

  const handleAddToCart = (item: CartItemType) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (itemId: CartItemType) => {
    setCartItems(cartItems.filter((item) => item !== itemId));
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went Wrong....</div>;
  return (
    <Wrapper>
      <Drawer anchor='right' open={ cartOpen } onClose={() => setCartOpen(false)}>
        <StyledWrapper>
          <Grid container spacing={ 1 }>
            {cartItems.length > 0 ? cartItems.map((item) => (
              <Grid item key={ item.id } sm={ 6 } xs={ 12 }>   
                <Aside btnFunc="Remove item" item={ item } handleRemoveFromCart={ handleRemoveFromCart } />
              </Grid>
            )) : <h4>Cart is empty</h4>}
          </Grid>
        </StyledWrapper>
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true) }>
        <Badge badgeContent={ cartItems.length }><AddShoppingCartIcon /></Badge>
      </StyledButton>
      <Grid container spacing={ 3 }>
        {data ? data.map(item => (
          <Grid item key={ item.id } xs={ 12 } sm={ 4 }>
            <Item btnFunc="Add to cart" item={ item } handleAddToCart={ handleAddToCart } />
          </Grid>
        )) : ''}
      </Grid>
    </Wrapper>
  );
}

export default App;
