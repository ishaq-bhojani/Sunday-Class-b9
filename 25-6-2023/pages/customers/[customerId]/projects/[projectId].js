import { useRouter } from "next/router";

export default function () {
    const router = useRouter();
    const {customerId, projectId} = router.query;
    return (
        <div>
            <h1>Customer {customerId}'s Projects List Page</h1>
            <h2>Project {projectId}</h2>
        </div>
    );
}