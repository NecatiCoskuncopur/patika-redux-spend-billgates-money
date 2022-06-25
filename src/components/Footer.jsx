import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { RiGithubLine, RiLinkedinFill } from 'react-icons/ri';

import { styled } from '../stitches.config';

export default function Footer() {
  return (
    <Container>
      <List>
        <ListItem
          title='Source Code'
          as={motion.li}
          initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, type: 'spring' }}
        >
          <a href="https://github.com/NecatiCoskuncopur/patika-redux-spend-billgates-money" target='_blank' rel='noreferrer noopener'>
            <HiCode />
          </a>
        </ListItem>
        <ListItem
          title='Github'
          as={motion.li}
          initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, type: 'spring' }}
        >
          <a href="https://github.com/NecatiCoskuncopur" target='_blank' rel='noreferrer noopener'>
            <RiGithubLine />
          </a>
        </ListItem>
        <ListItem
          title='Linkedin'
          as={motion.li}
          initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, type: 'spring' }}
        >
          <a href="https://www.linkedin.com/in/necati-coskuncopur/" target='_blank' rel='noreferrer noopener'>
            <RiLinkedinFill />
          </a>
        </ListItem>
      </List>
      <Description as={motion.p} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>Made By <span >Necati Coskunçopur</span>
      </Description>
    </Container>
  )
}


const Container = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  mt: '$5',
});


const List = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});


const ListItem = styled('li', {
  mr: '$3',
  fontSize: '$5',
  cursor: 'pointer',
  a: {
    transition: '0.5s',
    display: 'inline-block',
    color: '$dark',
    '&:hover': {
      transform: 'translateY(-10px)',
    }
  }
});


const Description = styled('p', {
  fontSize: '$1',
  mt: '$1',
  span: {
    fontWeight: '$3',
  }
})
