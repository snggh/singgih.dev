import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Flex,
} from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGithub,
} from '@tabler/icons';
import logo from '../../public/images/logo.svg';
import Image from 'next/image';
import NowPlaying from '../Common/NowPlaying';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <NowPlaying />
        <Flex
          mih={50}
          // bg="rgba(0, 0, 0, .3)"
          gap="md"
          justify="flex-end"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <ActionIcon
            size="lg"
            component="a"
            target="__blank"
            href="https://twitter.com/singgihadn"
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            target="__blank"
            href="https://linkedin.com/in/singgihan"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            target="__blank"
            href="https://github.com/snggh"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            target="__blank"
            href="https://instagram.com/singgihadn"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Flex>
      </Container>
    </div>
  );
}
