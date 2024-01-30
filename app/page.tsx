import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { lobster } from '@/app/ui/fonts'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-600 p-4 md:h-52">
        <img
          src="/BossyBookslogo4.png "
          alt="Bossy Books logo"
        />
      </div>
      <div className="">
        <div className="mt-4 grow md:flex-rowflex justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10  md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Bossy Books.</strong> 
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg max-w-96 bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-700 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6 " />
          </Link>
        </div>
        
      </div>
    </main>
  );
}

