'use client'

import React, { useState } from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ClipboardIcon,
} from 'lucide-react'
import Link from 'next/link'

type Props = {
  currency?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sessions?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  totalClosedSessions?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  totalPendingSessions?: any;
  net?: number;
  potentialIncome?: number;
  closingRate?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subaccounts: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  agencyDetails: any
  example?: boolean
}

const DashboardUse = ({
  // currency = 'USD',
  // sessions = 0,
  // totalClosedSessions = 0,
  // totalPendingSessions = 0,
  // net = 0,
  // potentialIncome = 0,
  // closingRate = 0,
  subaccounts,
  agencyDetails,
  // example
}: Props) => {
  // const currentYear = new Date().getFullYear()
  // const [showCode, setShowCode] = useState(false);

  return (
    <div className="relative h-full">
      {!agencyDetails.connectAccountId && (
        <div className="absolute -top-10 -left-10 right-0 bottom-0 z-30 flex items-center justify-center backdrop-blur-md bg-background/50">
          <Card>
            <CardHeader>
              <CardTitle>Connect Your Stripe</CardTitle>
              <CardDescription>
                You need to connect your stripe account to see metrics
              </CardDescription>
              <Link
                href={`/agency/${agencyDetails.id}/launchpad`}
                className="p-2 w-fit bg-secondary text-white rounded-md flex items-center gap-2 h-fit mt-[15px] "
              >
                <ClipboardIcon />
                Launch Pad
              </Link>
              <DashboardUse
                subaccounts={subaccounts}
                agencyDetails={agencyDetails}
                example={true}
              />
            </CardHeader>
          </Card>
        </div>
      )}
      <DashboardUse
        subaccounts={subaccounts}
        agencyDetails={agencyDetails}
      />
    </div>
  )
}

export default DashboardUse