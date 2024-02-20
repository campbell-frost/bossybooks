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
       
        <><Suspense fallback={<p>Loading...</p>}>
            <CustomersTableType query={query} />
        </Suspense>
        
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <AddCustomer />
            </div></>
    )
}