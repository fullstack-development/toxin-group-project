type SocialMediaItem = {
  href: string;
  icon: string;
  text?: string;
};

type SocialMediaProps = {
  items: SocialMediaItem[];
};

const defaultProps = {
  items: [{
    href: 'https://twitter.com',
    icon: 'twitter'
  },
  {
    href: 'https://twitter.com',
    icon: 'twitter'
  },
  {
    href: 'https://twitter.com',
    icon: 'twitter'
  }]
}

const SocialMedia: React.FC<SocialMediaProps> = ({items}: SocialMediaProps) => {
  return (
    <>
    {items && items.map(el => )}
    </>
  )
}


export default SocialMedia;
