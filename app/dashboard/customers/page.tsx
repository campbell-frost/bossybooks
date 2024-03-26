import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { AddCustomer } from '@/app/ui/customers/buttons';
import { countCustomers, fetchCustomers } from '@/app/lib/data';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Table from '@/app/ui/customers/table';

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
    const totalPages = await countCustomers(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${inter.className} text-2xl`}>Customers</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search customers..." />
                <AddCustomer />
            </div>
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                <Table query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    )
}