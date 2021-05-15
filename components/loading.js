import loadStyle from './loading.module.css'

export default function Loading({ radius = 60, stroke = 4, progress, text = "Loading..." }) {
    progress = Math.floor(progress)
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress / 100 * circumference;
    return (
        <div className={loadStyle.loading}>
            <div className={loadStyle.outerCircle}>
                <svg
                    height={radius * 2}
                    width={radius * 2}
                >
                    <circle
                        className={loadStyle.circle}
                        stroke="black"
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset }}
                        stroke-width={stroke}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                </svg>
                <span>{progress}%</span>
            </div>
            <p>{text}</p>
        </div>
    )
}