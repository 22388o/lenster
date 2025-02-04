import { Card, CardBody } from '@components/UI/Card'
import { Profile } from '@generated/types'
import { AtSymbolIcon, CashIcon, HashtagIcon } from '@heroicons/react/outline'
import formatAddress from '@lib/formatAddress'
import React, { FC, ReactChild } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'

interface Props {
  profile: Profile
}

const ProfileMod: FC<Props> = ({ profile }) => {
  const MetaDetails = ({
    children,
    value,
    icon
  }: {
    children: ReactChild
    value: string
    icon: ReactChild
  }) => (
    <CopyToClipboard
      text={value}
      onCopy={() => {
        toast.success('Copied to clipboard!')
      }}
    >
      <div className="flex items-center gap-2 font-bold cursor-pointer">
        {icon}
        <div>{children}</div>
      </div>
    </CopyToClipboard>
  )

  return (
    <Card className="mt-5 border-yellow-400 !bg-yellow-300 !bg-opacity-20">
      <CardBody>
        <div className="text-lg font-bold">Details</div>
        <div className="mt-3 space-y-1">
          <MetaDetails
            icon={<HashtagIcon className="w-4 h-4 text-gray-500" />}
            value={profile?.id}
          >
            {profile?.id}
          </MetaDetails>
          <MetaDetails
            icon={<CashIcon className="w-4 h-4 text-gray-500" />}
            value={profile?.ownedBy}
          >
            {formatAddress(profile?.ownedBy)}
          </MetaDetails>
          <MetaDetails
            icon={<AtSymbolIcon className="w-4 h-4 text-gray-500" />}
            value={profile?.handle}
          >
            {profile?.handle}
          </MetaDetails>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProfileMod
