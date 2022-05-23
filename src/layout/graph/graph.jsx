import styles from "./graph.module.css"

function GraphLayout(props) {


    return (
        <div className={styles.container}>
            <span id={styles.graph_title}>{props.graphTitle}</span>
            {props.children}
        </div>
    )
}

export default GraphLayout;
