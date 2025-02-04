import { Card, CardBody } from '@components/UI/Card'
import GetModuleIcon from '@components/utils/GetModuleIcon'
import { ApprovedAllowanceAmount } from '@generated/types'
import { getModule } from '@lib/getModule'
import React, { FC, useState } from 'react'

import AllowanceButton from './Button'

interface Props {
  module: ApprovedAllowanceAmount
}

const Module: FC<Props> = ({ module }) => {
  const [allowed, setAllowed] = useState<boolean>(module.allowance !== '0x00')

  return (
    <Card key={module.module}>
      <CardBody className="flex items-center justify-between">
        <div className="overflow-hidden mr-1.5">
          <div className="flex items-center space-x-3">
            <div className="text-brand-500">
              <GetModuleIcon module={module.module} size={4} />
            </div>
            <div className="font-bold whitespace-nowrap">
              {getModule(module.module).name}
            </div>
          </div>
          <div className="text-sm text-gray-500 truncate">
            {module.contractAddress}
          </div>
        </div>
        <AllowanceButton
          module={module}
          allowed={allowed}
          setAllowed={setAllowed}
        />
      </CardBody>
    </Card>
  )
}

export default Module
