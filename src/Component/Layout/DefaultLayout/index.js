import Sidebar from './SideBar';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row mx-0 px-0 ">
                    <div className="col-sm-3 col-2">
                        {' '}
                        <Sidebar />
                    </div>
                    <div className="col-sm-9 col-10">{children}</div>
                </div>
            </div>
        </div>
    );
}
export default DefaultLayout;
