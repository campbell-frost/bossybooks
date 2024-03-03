import CustomersTableType from '@/app/ui/customers/table';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';

import { Metadata } from 'next';
import { Suspense } from 'react';
import { AddCustomer } from '@/app/ui/customers/buttons';
import { fetchCustomers } from '@/app/lib/data';

import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function CustomersPage({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';

    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchCustomers(query);

    return (
        
        <>
        <Suspense fallback={<p>Loading...</p>}>
            <CustomersTableType query={query} />
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <AddCustomer />
            </div>
        </Suspense>

        </>
    )
}