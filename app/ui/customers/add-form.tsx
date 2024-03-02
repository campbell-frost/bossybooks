'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { addCustomer } from '@/app/lib/actions';


export default function AddCustomerForm({ customers }: { customers: CustomerField[] }) {

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(addCustomer, initialState);


  return (<form action={dispatch}>
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      {/* Customer Name */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium" />
        Customer Name
        <label />
        <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none "
          id="name"
          type="name1"
          placeholder="Enter customer full name"></input>

      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none  focus:border-bg-pink-600"
          id="email"
          type="email1"
          placeholder="Enter email address" />
      </div>
    </div >

    <div className="mt-6 flex justify-end gap-4">
      <Link
        href="/dashboard/customers/"
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      >
        Cancel
      </Link>
      <Button type="submit">Add Customer </Button>
    </div>
  </form >

  );
}
