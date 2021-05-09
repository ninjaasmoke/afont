import Link from 'next/link'
import styles from './nav.module.css'

export default function Nav({ linkTo, navTitle }) {
    return (
        <nav className={styles.nav}>
            <Link href={linkTo}>
                <a>&larr; Back</a>
            </Link>
            <h4 className={styles.navTitle}>
                {navTitle}
            </h4>
            <span className={styles.navRSpace}></span>
        </nav>
    )
}