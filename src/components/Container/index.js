import Header from "../Header";
import '../../styles/Container.css'
import { Footer } from "..";

const Container = ({children, header, footer, headerActive, active}) => {
  return ( 
    <div>
      {header && <Header headerActive={headerActive} active={active} />}
      <div style={{marginTop: headerActive ? 80 : 0}} className="container">{children}</div>
      {footer && <Footer />}
    </div>
   );
}
 
export default Container;