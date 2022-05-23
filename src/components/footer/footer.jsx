import styles from "./footer.module.css";


function Footer(props) {

    return (

        <div className={styles.container}>
            <div className={styles.content}>
                <span>Total this month</span>
                <div className={styles.monthly_total_container}>
                    <span id={styles.total_month}>${props.total_this_month}</span>
                    <div className={styles.percent_container}>
                        <span id={styles.percent_change}>{props.percent_change}</span>
                        <span>from last month</span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Footer;