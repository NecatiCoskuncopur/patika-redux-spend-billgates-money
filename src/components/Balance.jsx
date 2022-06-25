import CountUp from 'react-countup';

import { selectValue } from '../redux/moneySlice';
import { useSelector } from 'react-redux';

import { styled } from '../stitches.config';


export default function Balance() {
  const diffMoney = useSelector((state) => state.money.diffMoney);
  const value = useSelector(selectValue);
  let balance = value + diffMoney;

  return (
    <Section>
      <CountUp
        start={balance}
        end={value}
        delay={0}
        decimal="."
        separator=","
        prefix='$'
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </Section>
  )
}


const Section = styled('section', {
  padding: '$3',
  my: '$2',
  width: '100%',
  background: '$gradientBuy',
  textAlign: 'center',
  fontSize: '$5',
  fontWeight: '$3',
  position: 'sticky',
  top: 0,
  zIndex: '9999',
  color: '$main',
})