import Link from "next/link";
import { useRouter } from "next/router";

export default function () {
    const router = useRouter();
    const {customerId} = router.query;
    return (
        <div>
            <h1>Customer {customerId} Details Page</h1>
            <h2>Projects</h2>
            <Link href={`/customers/${customerId}/projects`}>Go to this customers Projects List</Link>
        </div>
    );
}