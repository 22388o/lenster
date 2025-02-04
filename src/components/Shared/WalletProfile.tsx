import { Wallet } from '@generated/types'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import formatAddress from '@lib/formatAddress'
import imagekitURL from '@lib/imagekitURL'
import React, { FC } from 'react'
import { POLYGONSCAN_URL } from 'src/constants'

import Slug from './Slug'

interface Props {
  wallet: Wallet
}

const WalletProfile: FC<Props> = ({ wallet }) => {
  return (
    <div className="flex items-center justify-between">
      <a
        className="flex items-center space-x-3"
        href={`${POLYGONSCAN_URL}/address/${wallet?.address}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={imagekitURL(
            `https://avatar.tobi.sh/${wallet?.address}.png`,
            500,
            500
          )}
          className="w-10 h-10 bg-gray-200 border rounded-full"
          alt={wallet?.address}
        />
        <div>
          <div className="flex gap-1.5 items-center">
            <div>{formatAddress(wallet?.address)}</div>
            <ExternalLinkIcon className="w-4 h-4" />
          </div>
          <Slug className="text-sm" slug={formatAddress(wallet?.address)} />
        </div>
      </a>
    </div>
  )
}

export default WalletProfile
