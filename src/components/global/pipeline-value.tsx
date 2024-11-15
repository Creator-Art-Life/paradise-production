'use client';

import { getPipelines } from '@/lib/queries';
import { Prisma } from '@prisma/client';
import React, { useState } from 'react'

type Props = {
  subaccountId: string
}

const PipelineValue = ({ subaccountId }: Props) => {
  const [pipelines, setPipelines] = useState<
    Prisma.PromiseReturnType<typeof getPipelines>
  >([])

  return (
    <div>PipelineValue</div>
  )
}

export default PipelineValue