import CustomersTableType from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { AddCustomer} from '@/app/ui/customers/buttons';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function CustomersPage({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {

    const query = searchParams?.query || '';
    return (
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <><Suspense fallback={<p>Loading...</p>}>
            <CustomersTableType query={query} />
        </Suspense><AddCustomer /></>
        </div>
    )
}