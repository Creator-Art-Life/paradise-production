import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { db } from '@/lib/db'
import { getConnectAccountProducts } from '@/lib/stripe/stripe-actions'
import { Funnel } from '@prisma/client'
import React from 'react'
import FunnelProductsTable from './funnel-products-table'


interface FunnelSettingsProps {
  subaccountId: string
  defaultData: Funnel
}

const FunnelSettings: React.FC<FunnelSettingsProps> = async ({
  subaccountId,
  defaultData,
}) => {
  const subaccountDetails = await db.subAccount.findUnique({
    where: {
      id: subaccountId,
    },
  })

  let isStripeConnecting: boolean = false;

  if (!subaccountDetails) return
  // if (!subaccountDetails.connectAccountId) return

  const products = subaccountDetails?.connectAccountId
    ? await getConnectAccountProducts(subaccountDetails.connectAccountId)
    : [];

  if (!subaccountDetails.connectAccountId) {
    isStripeConnecting = false;
  }

  return (
    <div className="flex gap-4 flex-col xl:!flex-row">
      <Card className="flex-1 flex-shrink">
        <CardHeader>
          <CardTitle>Funnel Products</CardTitle>
          <CardDescription>
            Select the products and services you wish to sell on this funnel.
            You can sell one time and recurring products too.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <>
            {!subaccountDetails.connectAccountId && (
              <p>Connect your Stripe account to sell products. You can still configure your funnel, <b style={{ color: "#dc2626" }}>
                but all functions with stripe don't work
              </b>
              </p>
            )}
            <FunnelProductsTable
              defaultData={defaultData}
              products={products}
              isConnecting={isStripeConnecting}
              subaccountId={subaccountId}
            />
          </>
        </CardContent>
      </Card>
    </div>
  )
}

export default FunnelSettings