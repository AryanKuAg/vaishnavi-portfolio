'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBarsStaggered , FaXmark} from "react-icons/fa6";

const navigation = [
    { name: 'Demo', href: '#demo' },
    { name: 'Experience', href: '#experience' },
  { name: 'Certificate', href: '#certificates' },
  // { name: 'Testimonials', href: '#' },
  { name: 'Contact me', href: '#contactme' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white top-0 sticky z-50">
      <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <Link href="/" >
          <Image
              alt="Vaishnavi Logo"
              src={'/vaishnavi.png'}
              width={50}
              height={50}
            />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <FaBarsStaggered aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="cursor-pointer text-sm/6 font-semibold text-gray-900">
              {item.name}
            </Link>
          ))}
          {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
              alt="Vaishnavi Logo"
              src={'/vaishnavi.png'}
              width={50}
              height={50}
            />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <FaXmark aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
