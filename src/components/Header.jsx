import { styled } from '../stitches.config';


export default function Header() {
  return (
    <Container>
      <Image src="https://neal.fun/spend/billgates.jpg" alt="Bill Gates" />
      Spend Bill Gates' Money
    </Container>
  )
}


const Container = styled('header', {

  py: '$4',
  px: '$3',
  backgroundColor: '$main',
  fontSize: '$5',
  fontWeight: '$3',
  mt: '$4',
  mb: '$2',
  lineHeight: '$4',
  textAlign: 'center',
  width: '100%',
});


const Image = styled('img', {
  display: 'block',
  width: '125px',
  height: '125px',
  mt: '$2',
  mx: 'auto',
  mb: '$4',
  borderRadius: '100%'
});