import { useEffect, useState } from 'react'
import navStyle from './homenav.module.css'

export default function HomeNav() {
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            let h = window.scrollY
            let d = document.getElementById('homenav')
            if (d) {
                if (h > 140) {
                    d.style.top = '0';
                } else {
                    d.style.top = '-60px';
                }
            }
        })
    }, [])
    return (
        <nav className={navStyle.homenav} id="homenav">
            <h4 className={navStyle.h4}>Assignmentium</h4>
        </nav>
    )
}