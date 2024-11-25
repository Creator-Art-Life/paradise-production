'use client';

import { Funnel } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Stripe from "stripe";
import {
  saveActivityLogsNotification,
  updateFunnelProducts,
} from '@/lib/queries'
import { fake_products } from "@/lib/constants";
import CardProductsTable from "./card-products-table";
import { Button } from "@/components/ui/button";
import FunnelForm from '@/components/forms/funnel-form'

interface FunnelProductsTableProps {
  defaultData: Funnel
  products: Stripe.Product[]
  isConnecting: boolean
  subaccountId: string
}


const FunnelProductsTable: React.FC<FunnelProductsTableProps> = ({
  products,
  defaultData,
  isConnecting,
  subaccountId
}) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [liveProducts, setLiveProducts] = useState<{ productId: string; recurring: boolean }[] | []>(JSON.parse(defaultData.liveProducts || '[]'))

  const [showCode, setShowCode] = useState(false);


  const handleSaveProducts = async () => {
    setIsLoading(true)
    const response = await updateFunnelProducts(
      JSON.stringify(liveProducts),
      defaultData.id
    )
    await saveActivityLogsNotification({
      agencyId: undefined,
      description: `Update funnel products | ${response.name}`,
      subaccountId: defaultData.subAccountId,
    })
    setIsLoading(false)
    router.refresh()
  }
  const handleAddProduct = async (product: Stripe.Product) => {
    const productIdExists = liveProducts.find(
      //@ts-expect-error
      (prod) => prod.productId === product.default_price.id
    )
    productIdExists
      ? setLiveProducts(
        liveProducts.filter(
          (prod) =>
            prod.productId !==
            //@ts-expect-error
            product.default_price?.id
        )
      )
      :
      setLiveProducts([
        ...liveProducts,
        {
          //@ts-expect-error
          productId: product.default_price.id as string,
          //@ts-expect-error
          recurring: !!product.default_price.recurring,
        },
      ])
  }
  // products = fake_products


  return (
    <>
      {isConnecting ? (
        <><CardProductsTable
          products={products}
          liveProducts={liveProducts}
          isLoading={isLoading}
          handleAddProduct={handleAddProduct}
          handleSaveProducts={handleSaveProducts}
        />
          <FunnelForm
            subAccountId={subaccountId}
            defaultData={defaultData}
          />
        </>
      ) : (
        <>
          <Button
            onClick={() => setShowCode(!showCode)}
            className="mt-4"
          >
            {showCode ? 'Hide Example' : 'Show Example'}
          </Button>
          {showCode && (
            <>
              <CardProductsTable
                products={fake_products}
                liveProducts={liveProducts}
                isLoading={isLoading}
                handleAddProduct={handleAddProduct}
                handleSaveProducts={handleSaveProducts}
                className="mt-4"
              />
              <FunnelForm
                subAccountId={subaccountId}
                defaultData={defaultData}
                className="mt-4"
              />
            </>
          )}
        </>
      )
      }
    </>
  )
}
export default FunnelProductsTable