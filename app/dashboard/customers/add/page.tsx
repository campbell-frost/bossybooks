import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import AddCustomerForm from '@/app/ui/invoices/create-form';


export default async function Page() {
    
    const customers = await fetchCustomers();
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Customers', href: '/dashboard/customers' },
                    {
                        label: 'Add Customer ',
                        href: '/dashboard/customers/add',
                        active: true,
                    },
                ]}
            />
            
            <AddCustomerForm customers={customers} />
        </main>
    );
}
