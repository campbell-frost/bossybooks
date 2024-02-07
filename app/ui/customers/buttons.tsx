import Link from 'next/link';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

export function AddCustomer() {
    return (
      <Link
        href="/dashboard/customers/add"
        className="flex h-10 items-center rounded-lg bg-pink-600 px-4 text-sm font-medium text-white transition-colors hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
      >
        <span className="hidden md:block">Add customer</span>{' '}
        <PlusIcon className="h-5 md:ml-4" />
      </Link>
    );
  }