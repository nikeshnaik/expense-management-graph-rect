import styles from "./header.module.css"
import { ReactComponent as Logo } from "../../assets/images/logo.svg"

function Header(props) {


    return (

        <div className={styles.container}>

            <div className={styles.content}>

                <div className={styles.balance}>
                    <span>My balance</span>
                    <p id={styles.balance_number}>${props.balance}</p>
                </div>

                <Logo style={styles.logo} />

            </div>

        </div>

    )

}


export default Header;