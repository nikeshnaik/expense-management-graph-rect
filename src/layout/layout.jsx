import styles from "./layout.module.css"

function MainLayout(props) {

    return (

        <div className={styles.container}>
            {props.children}
        </div>

    )
}

export default MainLayout;