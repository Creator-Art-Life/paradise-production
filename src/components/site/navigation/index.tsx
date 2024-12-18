import { ModeToggle } from '@/components/global/mode-toggle'
import { getAuthUserDetails } from '@/lib/queries'
import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Navigation = async () => {
  const authUser = await currentUser()
  const ownerAgency = await getAuthUserDetails()

  const linkText = !authUser
    ? 'Login'
    : ownerAgency
      ? 'Agency'
      : 'Create Agency';

  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image
          src={'./assets/paradise-logo.svg'}
          width={40}
          height={40}
          alt="plur logo"
        />
        <span className="text-xl font-bold"> Paradise.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={'/pricing'}>Pricing</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Documentation</Link>
          <Link href={'#'}>Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={'/agency'}
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
        >
          {linkText}
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  )
}

export default Navigation