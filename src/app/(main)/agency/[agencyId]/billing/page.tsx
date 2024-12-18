import React from 'react'
import { stripe } from "@/lib/stripe"
import { pricingCards } from '@/lib/constants'
import { db } from '@/lib/db'
import { Separator } from '@/components/ui/separator'
import PricingCard from './_components/pricing-card'

type Props = {
  params: Promise<{ agencyId: string }>
}

const page = async ({ params }: Props) => {
  const resolvedParams = await params;
  // const addOns = await stripe.products.list({
  //   ids: addOnProducts.map((product) => product.id),
  //   expand: ['data.default_price'],
  // })

  const agencySubscription = await db.agency.findUnique({
    where: {
      id: resolvedParams.agencyId
    },
    select: {
      customerId: true,
      Subscription: true
    }
  })

  const prices = await stripe.prices.list({
    product: process.env.NEXT_PARADISE_PRODUCT_ID,
    active: true,
  })

  const currentPlanDetails = pricingCards.find(
    (c) => c.priceId === agencySubscription?.Subscription?.priceId
  )

  // const charges = await stripe.charges.list({
  //   limit: 50,
  //   customer: agencySubscription?.customerId ?? undefined,
  // })

  // const allCharges = [
  //   ...charges.data.map((charge) => ({
  //     description: charge.description,
  //     id: charge.id,
  //     date: `${new Date(charge.created * 1000).toLocaleTimeString()} ${new Date(
  //       charge.created * 1000
  //     ).toLocaleDateString()}`,
  //     status: 'Paid',
  //     amount: `$${charge.amount / 100}`,
  //   })),
  // ]

  return (
    <>
      {/* <SubscriptionHelper
        prices={prices.data}
        customerId={agencySubscription?.customerId || ''}
        planExists={agencySubscription?.Subscription?.active === true}
      /> */}
      <h1 className="text-4xl p-4">Billing</h1>
      <Separator className=" mb-6" />
      <h2 className="text-2xl p-4">Current Plan</h2>
      <div className="flex flex-col lg:!flex-row justify-between gap-8">
        <PricingCard
          planExists={agencySubscription?.Subscription?.active === true}
          prices={prices.data}
          customerId={agencySubscription?.customerId || ''}
          amt={
            agencySubscription?.Subscription?.active === true
              ? currentPlanDetails?.price || '$0'
              : '$0'
          }
          buttonCta={
            agencySubscription?.Subscription?.active === true
              ? 'Change Plan'
              : 'Get Started'
          }
          highlightDescription="Want to modify your plan? You can do this here. If you have
          further question contact support@paradise-app.com"
          highlightTitle="Plan Options"
          description={
            agencySubscription?.Subscription?.active === true
              ? currentPlanDetails?.description || 'Lets get started'
              : 'Lets get started! Pick a plan that works best for you.'
          }
          duration="/ month"
          features={
            agencySubscription?.Subscription?.active === true
              ? currentPlanDetails?.features || []
              : currentPlanDetails?.features ||
              pricingCards.find((pricing) => pricing.title === 'Starter')
                ?.features ||
              []
          }
          title={
            agencySubscription?.Subscription?.active === true
              ? currentPlanDetails?.title || 'Starter'
              : 'Starter'
          }
        />
      </div>
    </>
  )
}

export default page