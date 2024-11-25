import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Stripe from 'stripe';

interface FunnelProductsCardProps {
  isLoading?: boolean
  liveProducts: { productId: string; recurring: boolean }[] | []
  handleSaveProducts: () => void
  handleAddProduct: (product: Stripe.Product) => void
  products: Stripe.Product[]
  className?: string
  showButton?: boolean
}

const CardProductsTable: React.FC<FunnelProductsCardProps> = ({
  isLoading,
  liveProducts,
  handleSaveProducts,
  handleAddProduct,
  products,
  className,
  showButton
}) => {
  return (
    <div className={className}>
      <Table className="bg-card border-[1px] border-border rounded-md">
        <TableHeader className="rounded-md">
          <TableRow>
            <TableHead>Live</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Interval</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-medium truncate">
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Input
                  defaultChecked={
                    !!liveProducts.find(
                      //@ts-ignore
                      (prod) => prod.productId === product.default_price.id
                    )
                  }
                  onChange={() => handleAddProduct(product)}
                  type="checkbox"
                  className="w-4 h-4"
                />
              </TableCell>
              <TableCell>
                <Image
                  className="rounded-md"
                  alt="product Image"
                  height={60}
                  width={60}
                  src={product.images[0]}
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>
                {
                  //@ts-ignore
                  product.default_price?.recurring ? 'Recurring' : 'One Time'
                }
              </TableCell>
              <TableCell className="text-right">
                $
                {
                  //@ts-ignore
                  product.default_price?.unit_amount / 100
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showButton && < Button
        disabled={isLoading}
        onClick={handleSaveProducts}
        className="mt-4"
      >
        Save Products
      </Button>}
    </div >
  )
}

export default CardProductsTable