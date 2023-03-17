import {CustomNavbar} from "./CustomNavbar";
import {CustomFooter} from "./CustomFooter";

export const Base = ({title = "Promotional App", children}) => {
    return (
        <div className="p-0 m-0">
            <CustomNavbar/>
            {children}
            <CustomFooter/>
        </div>
    )
}