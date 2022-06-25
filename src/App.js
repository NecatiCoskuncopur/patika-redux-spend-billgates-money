import { styled } from './stitches.config';

import {
  Header,
  Balance,
  Products,
  Receipt,
  Footer
} from './components';


export default function App() {
  return (

    <Container>
      <Header />
      <Balance />
      <Products />
      <Receipt />
      <Footer />
    </Container>

  );
}


const Container = styled('main', {
  maxWidth: '1000px',
  mx: 'auto',
  color: '$dark',
  pb: '$4'
})
