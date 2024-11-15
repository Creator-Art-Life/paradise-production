import React from 'react'

const Page = async ({
  params,
}: {
  params: { agencyId: string }
}) => {
  // Ожидаем значения params
  const { agencyId } = await params; // Здесь используется await

  return (
    <div>{agencyId}</div>
  )
}

export default Page;
