import styles from '~/pages/Upload/Upload.module.css';
import clsx from 'clsx';
import { WOW } from 'react-wow';
function Upload() {
    return (
        <div className={clsx(styles.upload)}>
            <div className={clsx(styles.cards)}>
                <div className="">
                    <h1 className={clsx(styles.dangnhap)}>Đăng nhập vào tiktok</h1>
                </div>
                <div className={clsx(styles.maqr)}>
                    <i className={clsx(styles.icons, 'ti-layout-grid4')}></i>
                    <p className={clsx(styles.chu)}>Sử dụng mã QR</p>
                </div>
                <div className={clsx(styles.dienthoai)}>
                    <i className={clsx(styles.icons, 'ti-stamp')}></i>
                    <p className={clsx(styles.chu)}>Email/TiktokID</p>
                </div>
                <div className={clsx(styles.face)}>
                    <i className={clsx(styles.icons, 'ti-facebook')}></i>
                    <p className={clsx(styles.chu)}>Tiếp tục với Facebook</p>
                </div>
                <div className={clsx(styles.gugo)}>
                    <i className={clsx(styles.icons, 'ti-google')}></i>
                    <p className={clsx(styles.chu)}>Tiếp tục với google</p>
                </div>
                <div className={clsx(styles.footer)}>
                    <p>
                        Bạn không có tài khoản? <span className={clsx(styles.dangky)}>Đăng ký</span>
                    </p>
                </div>
                <div className={clsx(styles.donglai)}>
                    <a href="/" className={clsx(styles.dong, 'ti-close')}></a>
                </div>
            </div>
        </div>
    );
}
export default Upload;
