import NumberFormat from 'react-number-format';
import { motion } from "framer-motion";

import { styled } from '../stitches.config';

import { buyProperty, sellProperty, selectItems, selectValue } from '../redux/moneySlice';
import { useDispatch, useSelector } from 'react-redux';


export default function Product({ item }) {
  const dispatch = useDispatch();
  const products = useSelector(selectItems);
  const value = useSelector(selectValue);


  const findItem = (item) => {
    let addedItem = products.find((product) => product.name === item.name);
    return addedItem ? addedItem.amount : 0;
  };

  const handleChange = ({ e, amountOld, name, price }) => {
    let val = e.target.value === "" ? 0 : e.target.value;
    let gap = parseInt(val) - parseInt(amountOld);
    gap > 0
      ? dispatch(buyProperty({ amount: gap, price, name }))
      : dispatch(sellProperty({ amount: gap * -1, price, name }));
  };

  const buyItems = (amount, price, name) => {
    dispatch(buyProperty({ amount, price, name }));
  };
  const sellItems = (amount, price, name) => {
    dispatch(sellProperty({ amount, price, name }));
  };

  const listVariants = {
    offscreen: {
      opacity: 0,
      y: -50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1
      }
    }
  };




  return (
    <>
      <ListItem
        as={motion.li}
        variants={listVariants}
        initial='offscreen'
        whileInView="onscreen"
      >
        <Image src={item.img} alt={item.name} title={item.name} />
        <h2>{item.name}</h2>

        <Price>
          <NumberFormat
            value={item.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </Price>

        <Wrapper>
          <SellButton
            disabled={!findItem(item)}
            onClick={() => sellItems(1, item.price, item.name)}
          >
            Sell
          </SellButton>
          <Input
            type="number"
            value={findItem(item)}
            onChange={(e) => handleChange({ e, amountOld: findItem(item), name: item.name, price: item.price, })}
            readOnly
          />
          <BuyButton
            disabled={value < item.price}
            onClick={() => buyItems(1, item.price, item.name)}
          >
            Buy
          </BuyButton>
        </Wrapper>
      </ListItem>
    </>
  )
};


const ListItem = styled('li', {
  maxWidth: '100%',
  textAlign: 'center',
  width: '100%',
  py: '$4',
  px: '$3',
  backgroundColor: '$main',

});


const Image = styled('img', {
  display: 'block',
  maxWidth: '100%',
  height: '120px',
  my: '$3',
  mx: 'auto',
  objectFit: 'contain'
});


const Price = styled('span', {
  display: 'block',
  fontSize: '$4',
  fontWeight: '$3',
  color: '$color1'
});


const Wrapper = styled('div', {
  fontSize: '$4',
  fontWeight: '$3',
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '10px 10px',
  mt: '$4'
})


const SellButton = styled('button', {
  background: '$gradientSell',
  cursor: 'pointer',
  py: '$2',
  px: '$3',
  borderRadius: '$1',
  fontWeight: '$3',
  color: '$main',
  transition: '1s',
  '&:disabled': {
    background: '$disabled',
    color: '$dark',
  },

});


const BuyButton = styled('button', {
  cursor: 'pointer',
  py: '$2',
  px: '$3',
  borderRadius: '$1',
  fontWeight: '$3',
  color: '$main',
  background: '$gradientBuy',
  transition: '1s',
  '&:disabled': {
    background: '$disabled',
    color: '$dark',
  },
});


const Input = styled('input', {
  border: '1px solid $borderDivider',
  py: '$2',
  px: '$3',
  width: '100%',
});

