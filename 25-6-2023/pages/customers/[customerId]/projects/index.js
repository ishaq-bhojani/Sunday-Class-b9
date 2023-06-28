import Link from "next/link";
import { useRouter } from "next/router";

export default function () {
    const router = useRouter();
    const {customerId} = router.query;
    return (
        <div>
            <h1>Customer {customerId}'s Projects List Page</h1>
            <h2>Projects</h2>
            <ul>
                <li>
                    <Link href={`/customers/${customerId}/projects/ABC`}>ABC</Link>
                </li>
                <li>
                <Link href={`/customers/${customerId}/projects/XYZ`}>XYZ</Link>
                </li>
            </ul>
        </div>
    );
}