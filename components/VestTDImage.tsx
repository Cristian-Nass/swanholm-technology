'use client';
import Image from 'next/image';
import {useMediaQuery} from '@/hooks/use-media-query';

const VestTDImage = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  console.log(isDesktop);
  return (
    <div>
      <Image
        src="/assets/images/3d-vest.png"
        alt="VestTD"
        width={isDesktop ? 400 : 200}
        height={isDesktop ? 400 : 200}
      />
    </div>
  );
};

export default VestTDImage;
