import Link from 'next/link';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteCustomer } from '@/app/lib/customers-actions';

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


export function UpdateCustomer({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/customer/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteCustomer({ id }: { id: string }) {
  const deleteCustomerWithId = deleteCustomer.bind(null, id);

  return (
    <form action={deleteCustomerWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}