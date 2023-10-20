import logo from '../Header/img_logo/logo.png';
import styles from '../Header/Header.module.css';
import clsx from 'clsx';
function Header() {
    return (
        <div>
            <div className={clsx('container-fluid', styles.header)}>
                <div className="d-flex justify-content-between align-items-center">
                    <img src={logo} className="img-fluid" width={150} style={{ height: '80px' }} alt="" />
                    <div className={clsx('input-group', styles.formInput, styles.thunho, styles.matdi)}>
                        <input
                            type="text"
                            className={clsx('form-control', styles.inputHeader, styles.matdi)}
                            placeholder="    Tìm kiếm"
                        />
                        <span
                            className={clsx(
                                styles.matdi,
                                styles.searchHeader,
                                'input-group-text ti-search d-flex justify-content-between align-items-center',
                            )}
                        ></span>
                    </div>
                    <div className={clsx('d-flex justify-content-evenly align-items-center', styles.buttonHeader)}>
                        <button type="button" className={clsx('btn', styles.formButtonHeader)}>
                            <a className={clsx(styles.tailen)} href="/upload">
                                + Tải lên
                            </a>
                        </button>
                        <button type="button" className={clsx('btn btn-danger', styles.formButtonHeader2)}>
                            <a className={clsx(styles.nhap)} href="/upload">
                                Đăng nhập
                            </a>
                        </button>
                        <div className={styles.cham}>
                            <div className={clsx(styles.chamHeader)}>
                                <i className={clsx('ti-more-alt')}></i>
                            </div>
                            <ul className={clsx(styles.vitri, styles.cham)}>
                                <li className={clsx(styles.thecon)}>
                                    <i className={clsx('ti-light-bulb', styles.icon)}></i>Trung tâm nhà sáng tạo LIVE
                                </li>
                                <li className={clsx(styles.thecon)}>
                                    {' '}
                                    <i className={clsx('ti-notepad', styles.icon)}></i>Tiếng Việt
                                </li>
                                <li className={clsx(styles.thecon)}>
                                    {' '}
                                    <i className={clsx('ti-help-alt', styles.icon)}></i>Phản hồi và trợ giúp
                                </li>
                                <li className={clsx(styles.thecon)}>
                                    {' '}
                                    <i className={clsx('ti-panel', styles.icon)}></i>Phím tắt trên bàn phím
                                </li>
                                <li className={clsx(styles.thecon)}>
                                    {' '}
                                    <i className={clsx('ti-flickr', styles.icon)}></i>Chế độ tối
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
