import { Route, Routes } from "react-router-dom";
import ChildPage11 from "../features/page1/ChildPage11";
import ChildPage12 from "../features/page1/ChildPage12";
import Page1 from "../features/page1/Page1";
import {Page2} from "../features/page2/Page2";
import Page2Info from "../features/page2/Page2Info";
import Navigation from "./Navigation";
import NoMatch from "./NoMatch";

const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route path='page1' element={<Page1/>}>
                    <Route path="child1-1" element={<ChildPage11/>}/>
                    <Route path="child1-2" element={<ChildPage12/>}/>
                </Route>
                <Route path='page2' element={<Page2/>}>
                  <Route index element={
                    <div>
                      Silahkan pilih product
                    </div>
                  }/>
                  <Route path=':id' element={<Page2Info/>}/>
                </Route>
            </Route>
            <Route path='*' element={<NoMatch/>}/>
      </Routes>
    )
}

export default AppRouter;