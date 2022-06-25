import NumberFormat from 'react-number-format';
import millify from 'millify';

import { styled } from '../stitches.config';

import { selectItems } from '../redux/moneySlice';
import { useSelector } from 'react-redux';
import { selectValue } from '../redux/moneySlice';


// core (react, npm package)
// hook
// constant
// util
// component



export default function Receipt() {
  const items = useSelector(selectItems);
  const total = useSelector((state) => state.money.total);
  const value = useSelector(selectValue);

  return (
    <>
      {value === 100000000000 ? '' : (
        <Container>
          <Title>Your Receipt</Title>
          <ul>
            {
              items.map((item, index) => (
                <ListItem key={index}>
                  <Text>{item.name}</Text>
                  <Text>x{item.amount}</Text>
                  <Text>
                    ${millify(item.price * item.amount)}
                  </Text>
                </ListItem>
              ))
            }
          </ul>
          <Total>
            <h1>TOTAL</h1>
            <Text>
              <NumberFormat
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </Text>
          </Total>
        </Container>
      )}
    </>
  )
}


const Container = styled('section', {
  width: '100%',
  background: '$main',
  textAlign: 'center',
  px: '$3',
  pt: '$3',
  pb: '$4',
  mt: '$3',
});


const Title = styled('h2', {
  fontSize: '28px',
  fontWeight: '$3',
  px: '$3',
  pt: '$3',
  pb: '$4',
});


const ListItem = styled('li', {
  maxWidth: '290px',
  mx: 'auto',
  textAlign: 'center',
  display: 'grid',
  gridGap: '10px 0',
  gridTemplateColumns: '170px 45px 75px',
  fontSize: '$4',
});


const Text = styled('span', {
  textAlign: 'left',
  '&:last-child': {
    color: '$color1',
    fontWeight: '$3',
    textAlign: 'right'
  }
});


const Total = styled('div', {
  borderTop: '1px solid $dark',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '300px',
  mx: 'auto',
  mt: '$2',
  pt: '$2',
  fontWeight: '$3',
});