import { db } from '@/lib/db'
import { redirect } from 'next/navigation'

type Props = {
  params: Promise<{ subaccountId: string }>
}

const Pipelines = async ({ params }: Props) => {
  const resolvedParams = await params;

  const pipelineExists = await db.pipeline.findFirst({
    where: { subAccountId: resolvedParams.subaccountId },
  })

  if (pipelineExists)
    return redirect(
      `/subaccount/${resolvedParams.subaccountId}/pipelines/${pipelineExists.id}`
    )

  try {
    const response = await db.pipeline.create({
      data: { name: 'First Pipeline', subAccountId: resolvedParams.subaccountId },
    })

    return redirect(
      `/subaccount/${resolvedParams.subaccountId}/pipelines/${response.id}`
    )
  } catch (error) {
    console.log(error)
  }
}

export default Pipelines
