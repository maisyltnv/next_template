import React from 'react'

export default function BgAnimated() {
    return (
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800">
            {/* Existing radial overlay */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,_#ffffff_0%,_transparent_70%)]"></div>

            {/* Animated elements */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Gradient for circles */}
                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
                    </linearGradient>

                    {/* Animation definitions */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="10" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    {/* Float animation */}
                    <animateTransform
                        id="floatAnimation1"
                        attributeName="transform"
                        type="translate"
                        values="0,0; 15,10; 0,20; -15,10; 0,0"
                        dur="25s"
                        repeatCount="indefinite"
                    />
                    <animateTransform
                        id="floatAnimation2"
                        attributeName="transform"
                        type="translate"
                        values="0,0; -20,15; 0,30; 20,15; 0,0"
                        dur="20s"
                        repeatCount="indefinite"
                    />
                    <animateTransform
                        id="floatAnimation3"
                        attributeName="transform"
                        type="translate"
                        values="0,0; 25,-15; 0,-30; -25,-15; 0,0"
                        dur="30s"
                        repeatCount="indefinite"
                    />

                    {/* Pulse animation */}
                    <animate
                        id="pulseAnimation"
                        attributeName="opacity"
                        values="0.1; 0.3; 0.1"
                        dur="8s"
                        repeatCount="indefinite"
                    />
                </defs>

                {/* Animated background elements */}
                <g className="animated-elements">
                    {/* Large floating circles */}
                    <circle cx="20%" cy="20%" r="100" fill="url(#circleGradient)" opacity="0.2">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 50,30; 0,60; -50,30; 0,0"
                            dur="40s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    <circle cx="80%" cy="70%" r="120" fill="url(#circleGradient)" opacity="0.15">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; -40,20; 0,40; 40,20; 0,0"
                            dur="35s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    {/* Small floating dots */}
                    <g>
                        {Array(25).fill(null).map((_, i) => (
                            <circle
                                key={i}
                                cx={`${25 + (i % 4) * 20}%`}
                                cy={`${20 + Math.floor(i / 4) * 30}%`}
                                r={5 + (i % 5)}
                                fill="#ffffff"
                                opacity={0.1 + (i % 10) / 50}
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="translate"
                                    values={`0,0; ${10 + i * 3},${5 + i * 2}; 0,${10 + i * 2}; ${-10 - i * 3},${5 + i * 2}; 0,0`}
                                    dur={`${15 + i * 2}s`}
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    values={`${0.1 + (i % 10) / 50}; ${0.3 + (i % 10) / 40}; ${0.1 + (i % 10) / 50}`}
                                    dur={`${4 + i}s`}
                                    repeatCount="indefinite"
                                />
                            </circle>
                        ))}
                    </g>

                    {/* Curved lines */}
                    <path
                        d="M0,300 Q400,100 800,400 T1600,300"
                        stroke="#ffffff"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.07"
                    >
                        <animate
                            attributeName="d"
                            values="M0,300 Q400,100 800,400 T1600,300; M0,350 Q400,150 800,450 T1600,350; M0,300 Q400,100 800,400 T1600,300"
                            dur="20s"
                            repeatCount="indefinite"
                        />
                    </path>

                    <path
                        d="M0,600 Q400,800 800,600 T1600,700"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.05"
                    >
                        <animate
                            attributeName="d"
                            values="M0,600 Q400,800 800,600 T1600,700; M0,650 Q400,850 800,650 T1600,750; M0,600 Q400,800 800,600 T1600,700"
                            dur="25s"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
            </svg>
        </div>
    )
}
