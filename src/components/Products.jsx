import { data } from '../utils/data';
import { styled } from '../stitches.config';

import Product from './Product';


export default function Products() {
  return (
    <div>
      <List>
        {
          data.map((item) => (
            <Product key={item.id} item={item} />
          ))
        }
      </List>
    </div>
  )
}


const List = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
  gridGap: '10px 10px',
  "@bp1": {
    gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
  },
  "@bp2": {
    gridTemplateColumns: 'repeat(1,minmax(0,1fr))',
  }
});

