import styles from './HeaderBackground.module.css';

function HeaderBackground() {
    return (
        <div className={styles['background-container']}>
            <svg id="patternId" width="124px" height="99px">
                <defs>
                    <pattern
                        id="a"
                        patternUnits="userSpaceOnUse"
                        width="150"
                        height="150"
                        patternTransform="scale(1) rotate(0)"
                    >
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="transparent"
                        />
                        <path
                            d="M12.5 62.5H37.5V75h-4.9v-7.6H17.42v15.2H32.6V75h4.9v12.49h-25ZM62.5 0v12.5H37.5V0h4.9v7.6h15.18V0ZM37.5 150h4.9v-7.6h15.18v7.6h4.9v-12.5H37.5Zm50-62.5h24.98V100h-4.9v-7.6H92.42v15.2h15.19V100h4.9v12.5h-25ZM0 37.5h12.5v24.99H0v-4.9h7.6V42.4H0Zm150 24.99v-4.9h-7.6V42.4h7.6v-4.9h-12.5v25z"
                            strokeWidth="0.5"
                            stroke="none"
                            fill="#ff6a05"
                        />
                        <path
                            d="M12.5 112.5H37.5V125h-4.9v-7.6H17.42v15.2H32.6V125h4.9v12.5h-25Zm50-100h25V25h-4.9v-7.6H67.4v15.2h15.2V25h4.9v12.5h-25Zm50 0h25V25h-4.9v-7.6h-15.2v15.2h15.2V25h4.9v12.5h-25Zm-50 50h25V75h-4.9v-7.6H67.4v15.2h15.2V75h4.9v12.49h-25Z"
                            strokeWidth="0.5"
                            stroke="none"
                            fill="#ff6a05"
                        />
                        <path
                            d="M137.5 87.5H150v4.9h-7.6v15.2h7.6v4.9h-12.5Zm-75 25h25V125h-4.9v-7.6H67.4v15.2h15.2V125h4.9v12.5h-25ZM0 137.5h12.5V150H7.6v-7.6H0ZM137.5 150h4.9v-7.6h7.6v-4.9h-12.5ZM150 12.5V7.6h-7.6V0h-4.9v12.5ZM12.5 0H7.6v7.6H0v4.9h12.5Zm100 62.5h24.99V75h-4.9v-7.6H117.4v15.2h15.2V75h4.9v12.49h-25Zm-75-25h24.99V50h-4.9v-7.6H42.4v15.2h15.2V50h4.9v12.5h-25ZM0 87.5v4.9h7.6v15.2H0v4.9h12.5v-25Z"
                            strokeWidth="0.5"
                            stroke="none"
                            fill="#ff6a05"
                        />
                        <path
                            d="M112.5 0v12.5h-25V0h4.9v7.6h15.2V0Zm-75 87.5h24.99V100h-4.9v-7.6H42.4v15.2h15.2V100h4.9v12.5h-25Zm75 25h24.99V125h-4.9v-7.6H117.4v15.2h15.2V125h4.9v12.5h-25Zm-25-75h24.98V50h-4.89v-7.6H92.4v15.2h15.19V50h4.9v12.5H87.5Zm-75-25h24.98V25H32.6v-7.6H17.4v15.2h15.2V25h4.9v12.5h-25Zm75 137.5h4.9v-7.6h15.19v7.6h4.9v-12.5H87.5Z"
                            strokeWidth="0.5"
                            stroke="none"
                            fill="#ff6a05"
                        />
                    </pattern>
                </defs>
                <rect
                    width="800%"
                    height="800%"
                    transform="translate(-288,-38)"
                    fill="url(#a)"
                />
            </svg>

            <svg
                id="patternId2"
                width="200px"
                height="200px"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="b"
                        patternUnits="userSpaceOnUse"
                        width="150"
                        height="150"
                        patternTransform="scale(1) rotate(45)"
                    >
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="transparent"
                        />
                        <path
                            d="M12.5 62.5H37.5V75h-4.9v-7.6H17.42v15.2H32.6V75h4.9v12.49h-25ZM62.5 0v12.5H37.5V0h4.9v7.6h15.18V0ZM37.5 150h4.9v-7.6h15.18v7.6h4.9v-12.5H37.5Zm50-62.5h24.98V100h-4.9v-7.6H92.42v15.2h15.19V100h4.9v12.5h-25ZM0 37.5h12.5v24.99H0v-4.9h7.6V42.4H0Zm150 24.99v-4.9h-7.6V42.4h7.6v-4.9h-12.5v25z"
                            strokeWidth="0.5"
                            stroke="none"
                            fill="#ff6a05"
                        />
                        <path
                            d="M12.5 112.5H37.5V125h-4.9v-7.6H17.42v15.2H32.6V125h4.9v12.5h-25Zm50-100h25V25h-4.9v-7.6H67.4v15.2h15.2V25h4.9v12.5h-25Zm50 0h25V25h-4.9v-7.6h-15.2v15.2h15.2V25h4.9v12.5h-25Zm-50 50h25V75h-4.9v-7.6H67.4v15.2h15.2V75h4.9v12.49h-25Z"
                            strokeWidth="0.5"
                            stroke="none"
                            fill="#ff6a05"
                        />
                        <path
                            d="M137.5 87.5H150v4.9h-7.6v15.2h7.6v4.9h-12.5Zm-75 25h25V125h-4.9v-7.6H67.4v15.2h15.2V125h4.9v12.5h-25ZM0 137.5h12.5V150H7.6v-7.6H0ZM137.5 150h4.9v-7.6h7.6v-4.9h-12.5ZM150 12.5V7.6h-7.6V0h-4.9v12.5ZM12.5 0H7.6v7.6H0v4.9h12.5Zm100 62.5h24.99V75h-4.9v-7.6H117.4v15.2h15.2V75h4.9v12.49h-25Zm-75-25h24.99V50h-4.9v-7.6H42.4v15.2h15.2V50h4.9v12.5h-25ZM0 87.5v4.9h7.6v15.2H0v4.9h12.5v-25Z"
                            strokeWidth="0.5"
                            stroke="none"
                            fill="#ff6a05"
                        />
                        <path
                            d="M112.5 0v12.5h-25V0h4.9v7.6h15.2V0Zm-75 87.5h24.99V100h-4.9v-7.6H42.4v15.2h15.2V100h4.9v12.5h-25Zm75 25h24.99V125h-4.9v-7.6H117.4v15.2h15.2V125h4.9v12.5h-25Zm-25-75h24.98V50h-4.89v-7.6H92.4v15.2h15.19V50h4.9v12.5H87.5Zm-75-25h24.98V25H32.6v-7.6H17.4v15.2h15.2V25h4.9v12.5h-25Zm75 137.5h4.9v-7.6h15.19v7.6h4.9v-12.5H87.5Z"
                            strokeWidth="0.5"
                            stroke="none"
                            fill="#ff6a05"
                        />
                    </pattern>
                </defs>
                <rect
                    width="800%"
                    height="800%"
                    transform="translate(-265,-53)"
                    fill="url(#b)"
                />
            </svg>
        </div>
    );
}

export default HeaderBackground;
