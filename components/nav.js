import Link from 'next/link'
import styles from './nav.module.css'

export default function Nav({ linkTo, navTitle }) {
    return (
        <nav className={styles.nav}>
            <Link href={linkTo}>
                <a>&larr; Back Home</a>
            </Link>
            <span className={styles.navTitle}>
                {navTitle}
            </span>
            <span className={styles.navRSpace}></span>
        </nav>
    )
}