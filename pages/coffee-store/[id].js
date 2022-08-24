import {useRouter} from 'next/router'
import Link from "next/Link"
const CoffeeStore = () => {
    const router = useRouter();
    console.log(router);
    return (
    <div>
        Coffee store page {router.query.id}
        <Link href="/" prefetch={true}>
            <a>Back to Home</a>
        </Link>
        <Link href="/coffee-store/dyamic" prefetch={true}>
            <a>Back to dynamic page</a>
        </Link>
    </div>
    )
}

export default CoffeeStore