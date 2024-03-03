'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { createCustomer } from '@/app/lib/customers-actions';


export default function AddCustomerForm({ customers }: { customers: CustomerField[] }) {

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createCustomer, initialState);


  return (<form action={dispatch}>
    <div className="rounded-md bg-gray-50 p-4 md:p-6">

      {/*Customer Name */}
      <div className="mb-2">

        <label className="mb-4 block text-sm font-medium" />
        Customer Name
        <label />
      </div>
      <div className="relative">

        <input className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
          id="name"
          type="name"
          name="name"
          placeholder="Enter customer full name"></input>
      </div>

      <div className="pt-5">

        {/*Customer Email */}
        <label className="mb-2 block text-sm ">
          Email
        </label>
      </div>
      <div className="relative">

        <input
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
          id="email"
          type="email"
          name="email"
          placeholder="Enter email address" />
      </div>
    </div>
    <div className="mt-6 flex justify-end gap-4">
      <Link
        href="/dashboard/customers/
        "
        className="flex h-10 items-center rounded-sm gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      >
        Cancel
      </Link>
      <Button type="submit">Add Customer </Button>
    </div>
  </form>

  );

}
