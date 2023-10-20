import styles from '~/Component/Layout/DefaultLayout/SideBar/Sidebar.module.css';
import clsx from 'clsx';
function Sidebar() {
    return (
        <div className={clsx(styles.theul)} style={{ zIndex: '1' }}>
            <ul className={clsx(styles.menu, 'my-4')}>
                <li className={clsx(styles.sidebar)}>
                    <i className="ti-home pe-3"></i>
                    <a href="/" className={clsx(styles.chusideBar, styles.chunhomat)}>
                        Dành cho bạn
                    </a>
                </li>
                <li className={clsx(styles.sidebar)}>
                    <i className="ti-user pe-3"></i>
                    <a href="/following" className={clsx(styles.chusideBar, styles.chunhomat)}>
                        Đang Follow
                    </a>
                </li>
                <li className={clsx(styles.sidebar)}>
                    <i className="ti-map-alt pe-3"></i>
                    <a href="/profile" className={clsx(styles.chusideBar, styles.chunhomat)}>
                        Khám phá
                    </a>
                </li>
                <li className={clsx(styles.sidebar)}>
                    <i className="ti-video-camera pe-3"></i>
                    <a href="https://www.tiktok.com/live" className={clsx(styles.chusideBar, styles.chunhomat)}>
                        LIVE
                    </a>
                </li>
            </ul>
            <div className="ms-3">
                <p className={clsx(styles.chunho, styles.chunhomat)}>
                    Đăng nhập để follow các tác giả, thích xem video và xem bình luận.
                </p>
            </div>
            <div>
                <button type="button" className={clsx('btn border border-danger', styles.dangnhap)}>
                    <a className={clsx(styles.dangnhap2)} href="/upload">
                        {' '}
                        Đăng nhập
                    </a>
                </button>
            </div>
            <div className="mt-5">
                <button type="button" className={clsx(styles.hieuung, 'btn')}>
                    <i className="ti-flickr-alt me-3"></i>
                    <a
                        className={clsx(styles.hieuung2)}
                        href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v2&utm_source=tiktok_webapp_main"
                    >
                        Tạo hiệu ứng
                    </a>
                </button>
            </div>
        </div>
    );
}
export default Sidebar;
