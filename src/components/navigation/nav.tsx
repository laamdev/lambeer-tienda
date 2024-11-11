'use client'

import React, { ReactNode, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export const Nav = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0
  })
  const pathname = usePathname()

  return (
    <ul
      onMouseLeave={() => {
        setPosition(pv => ({
          ...pv,
          opacity: 0
        }))
      }}
      className='sticky top-4 z-50 mx-auto flex w-fit gap-x-4 rounded-full text-2xl'
    >
      <div
        className={cn(
          'absolute inset-0 rounded-full bg-[#eee9e5]/50 backdrop-blur-sm'
        )}
      />
      <Tab setPosition={setPosition}>
        <Link href={`/`} className='text-base sm:text-xl'>{`Home`}</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link
          className='text-base sm:text-xl'
          href={`/beers`}
        >{`Cervezas`}</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link
          className='text-base sm:text-xl'
          href={`/taproom`}
        >{`Taproom`}</Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link
          className='text-base sm:text-xl'
          href={`/events`}
        >{`Eventos`}</Link>
      </Tab>

      <Cursor position={position} />
    </ul>
  )
}

const Tab = ({
  children,
  setPosition
}: {
  children: ReactNode
  setPosition: (position: any) => void
}) => {
  const ref = useRef(null)

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return

        // @ts-expect-error
        const { width } = ref.current.getBoundingClientRect()

        setPosition({
          // @ts-expect-error
          left: ref.current.offsetLeft,
          width,
          opacity: 1
        })
      }}
      className='fon-bold relative z-10 block cursor-pointer text-white mix-blend-difference md:px-5 md:py-3 md:text-base'
    >
      {children}
    </li>
  )
}

const Cursor = ({ position }: any) => {
  return (
    <motion.li
      animate={{
        ...position
      }}
      className='absolute z-0 h-12 rounded-full bg-foreground'
    />
  )
}
// // "use client";

// // import Link from "next/link";
// // import Form from "next/form";
// // import {
// //   ClerkLoaded,
// //   SignedIn,
// //   SignedOut,
// //   SignInButton,
// //   UserButton,
// //   useUser,
// // } from "@clerk/nextjs";

// // import { Input } from "@/components/ui/input";

// // export const Header = () => {
// //   const { user } = useUser();

// //   const createCklerkPasskey = async () => {
// //     try {
// //       const response = await user?.createPasskey();
// //       console.log(response);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <header className="flex flex-wrap justify-between items-center px-4 py-2">
// //       <nav>
// //         <Link href="/">SourFace</Link>
// //       </nav>

// //       <Form
// //         action="/search"
// //         className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
// //       >
// //         <Input type="text" name="query" placeholder="Search for products..." />
// //       </Form>

// //       <ClerkLoaded>
// //         <SignedIn>
// //           <div className="flex items-center space-x-2">
// //             <UserButton />
// //             <Link href="/account">Account</Link>
// //           </div>
// //         </SignedIn>

// //         <SignedOut>
// //           <SignInButton mode="modal" />
// //         </SignedOut>

// //         {user && user.passkeys.length <= 0 && (
// //           <button onClick={createCklerkPasskey}>Create Passkey</button>
// //         )}
// //       </ClerkLoaded>
// //     </header>
// //   );
// // };