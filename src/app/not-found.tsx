import Icon from '@/components/icon';
import SocialCard, { SocialCardProps } from '@/components/notFound/SocialCard';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='mb-20 flex flex-col items-center gap-10 px-5 py-4'>
      <div className='mt-10 flex items-center justify-center gap-10'>
        <Image
          className='hidden sm:block'
          src={'/not-found.svg'}
          alt='Page not found'
          title='Page not found'
          height={50}
          width={200}
        />
        <div>
          <p className='font-josefin_Sans text-xs font-semibold text-primary-monkeyOrange sm:text-sm md:text-base'>
            ERROR 404
          </p>
          <p className='font-playfair_Display text-3xl font-semibold md:text-5xl'>
            Looks like
            <br /> you have lost <br />
            your path
          </p>
        </div>
      </div>

      <div className='flex w-full flex-col items-start gap-5 sm:w-4/5 md:w-1/2'>
        <p className='font-josefin_Sans'>No worries. Explore:</p>
        <SocialCard
          icon='RiDiscordFill'
          title='Join our Discord'
          text='Connect with fellow enthusiasts and stay updated.'
          link='https://discord.gg/HTuz82d8'
        />
        <SocialCard
          icon='RiGithubFill'
          title='Explore on GitHub'
          text=' Explore our repositories and be part of the collaboration.'
          link='https://github.com/the-monkeys'
        />
        <SocialCard
          icon='RiTwitterXFill'
          title='Follow us on X'
          text='Stay in the loop with the latest updates.'
          link='https://twitter.com/TheMonkeysLife'
        />
      </div>

      <Link href='/'>
        <div className='flex items-center gap-2 transition-all hover:gap-3'>
          <p className='font-josefin_Sans text-sm md:text-base'>
            Or go back to home
          </p>
          <Icon name='RiArrowRightLine' size={16} />
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
