import Page from "@/app/dashboard/page";
import {Sidebar} from "@/components/sidebar/Sidebar";
import styles from "./layout.module.css"
export const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Sidebar/>
            { children }
        </div>
    )
}

export default Layout;