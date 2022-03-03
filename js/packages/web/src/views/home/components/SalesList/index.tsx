import React from 'react';

import { Banner } from '../../../../components/Banner';
import { HowToBuyModal } from '../../../../components/HowToBuyModal';

export enum LiveAuctionViewState {
  All = '0',
  Participated = '1',
  Ended = '2',
  Resale = '3',
  Own = '4',
}

export const SalesListView = () => {
  return (
    <>
      <Banner
        src="/hdr-helios.png"
        headingText="The amazing music world of HELIOS."
        subHeadingText="Buy exclusive Music NFTs."
        actionComponent={<HowToBuyModal buttonClassName="secondary-btn" />}
        useBannerBg
      />
    </>
  );
};
