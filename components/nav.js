import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './nav.module.css'

export default function Nav({ linkTo, navTitle }) {
    const router = useRouter();
    return (
        <nav className={styles.nav}>
            {
                linkTo &&
                <Link href={linkTo}>
                    <a>&larr; {linkTo == '/' ? 'Home' : 'Back'}</a>
                </Link>
            }
            {
                !linkTo &&
                <span onClick={() => router.back()}>&larr; Back</span>
            }
            <h4 className={styles.navTitle}>
                {navTitle}
            </h4>
            <span className={styles.navRSpace}></span>
        </nav>
    )
}