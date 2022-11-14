import {
  createStyles,
  Container,
  Title,
  Button,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { IconMessage2Share } from '@tabler/icons';
import Typewriter from 'typewriter-effect';
import photo from '../../public/images/singgih-dev.jpg';
import Image from 'next/image';
import { Fira_Code, Rubik } from '@next/font/google';

const firaCode = Fira_Code();
const rubik = Rubik();

const useStyles = createStyles((theme) => ({
  container: {
    height: '100vh',
    minHeight: '500px',
  },
  inner: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    // paddingTop: theme.spacing.xl * 4,
    // paddingBottom: theme.spacing.xl * 4,
    position: 'relative',
  },

  content: {
    // width: '75%',
    // marginRight: theme.spacing.xl * 3,
    zIndex: 1,
    paddingTop: '20vh',
    position: 'static',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginLeft: '5vw',
      marginRight: 0,
    },
  },

  title: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[0]
        : theme.colors.dark[3],
    fontFamily: `${firaCode.style.fontFamily}, Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.3,
    maxWidth: 500,
    fontSize: 48,
    marginTop: '1rem',
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[0]
        : theme.colors.dark[3],
    // opacity: 0.75,
    maxWidth: 500,
    fontSize: '25px',
    fontWeight: 400,
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: '20px',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    objectFit: 'cover',
    objectPosition: 'bottom',

    // [theme.fn.smallerThan('md')]: {
    //   display: 'none',
    // },
  },

  bgWrap: {
    backgroundColor: '#02182c',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    // backgroundImage: 'url(../images/hero-pic.jpg)',
    backgroundSize: 'cover',
    position: 'absolute',
    top: '10%',
    right: '0',
    bottom: '0',
    left: '40%',

    [theme.fn.smallerThan('md')]: {
      top: '5%',
      left: '15%',
      maxHeight: '70%',
    },
  },

  patternGrid: {
    backgroundImage:
      theme.colorScheme === 'dark'
        ? 'url(/images/pattern-dot-grid.svg)'
        : 'url(/images/pattern-dot-grid-dark.svg)',
    backgroundSize: '24px 24px',
    opacity: 0.15,
    position: 'absolute',
    top: '20%',
    right: '0',
    bottom: '0',
    left: '25%',
    [theme.fn.smallerThan('md')]: {
      top: '10%',
      left: '10%',
      maxHeight: '70%',
    },
  },
  fw700: {
    fontWeight: 700,
  },
}));

export function HeroImageRight() {
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <div>
      <Container className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Text className={classes.description} mt={30}>
              Hi, my name is{' '}
              <Text
                className={classes.fw700}
                component="span"
                inherit
                variant="gradient"
                style={{
                  backgroundImage: theme.fn.linearGradient(
                    90,
                    '#2ca2b4',
                    '#5598de 24%',
                    '#7f87ff 45%',
                    '#f65aad 76%',
                    '#ec3d43'
                  ),
                }}
              >
                Singgih
              </Text>
              , I&apos;m a
            </Text>
            <Title
              className={classes.title}
              variant="gradient"
              // gradient={
              //   colorScheme === 'dark'
              //     ? { from: '#e9ecef', to: '#f8f9fa' }
              //     : { from: '#868e96', to: '#adb5bd' }
              // } 90deg,#2ca2b4,#5598de 24%,#7f87ff 45%,#f65aad 76%,#ec3d43
              style={{
                backgroundImage: theme.fn.linearGradient(
                  90,
                  '#2ca2b4',
                  '#5598de 24%',
                  '#7f87ff 45%',
                  '#f65aad 76%',
                  '#ec3d43'
                ),
              }}
            >
              <Typewriter
                options={{
                  strings: ['Web Developer', 'BI Developer', 'ABAP Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Title>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="md"
              className={classes.control}
              mt={40}
              component="a"
              href="mailto:hi@singgih.dev"
              leftIcon={<IconMessage2Share size={25} />}
            >
              Contact me!
            </Button>
          </div>
          <div className={classes.patternGrid}></div>
          <div className={classes.bgWrap}>
            <Image
              src={photo}
              className={classes.image}
              priority
              fill
              alt="Singgih Adi Nugroho"
              // sizes="(max-width: 768px) 75vw,
              // 				(max-width: 1200px) 75vw,
              // 				75vw"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
