'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { addCustomer } from '@/app/lib/actions';


  export default function AddCustomerForm({customers}: {customers: CustomerField[]}){

    const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(addCustomer, initialState);


return (<form action={dispatch}>
<div className="w-full max-w-lg">
    <div className="flex-wrap -mx-3 mb-6">
        <div className=" w-full md: w/1/2 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-extrabold mb-2"/>
            Customer Name
            <label/>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-bg-pink-600" id="customer" type="customerId" placeholder="Enter customer full name"></input>
        </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md: w/1/2 px-3 md: mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">
        Email 
      </label>
      <input 
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none  focus:border-bg-pink-600" id="customer" type="customerId" placeholder="Enter email address"/>
    </div>
    </div>
    <div className="mt-6 flex justify-end gap-4">
    <Link
        href="/dashboard/customers/
        "
        className="flex h-10 items-center rounded-sm bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      >
        Cancel
      </Link>
  <Button type="submit">Add Customer </Button>
  </div>
  </div>
  </form>
  
);
}
