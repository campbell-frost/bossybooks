'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';



<form className="w-full max-w-lg">
    <div className="flex-wrap -mx-3 mb-6">
        <div className=" w-full md: w/1/2 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name"/>
            First Name
        </div>
    </div>
    <Link
        href="/dashboard/customers"
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      >
        Cancel
      </Link>
      <Button type="submit">Add customer</Button>
</form>
