import styles from './banner_logo.module.css'

function BannerLogo() {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.logo}>
                    <img src="/img/banner/full-banner.png" alt="Banner Logo" />      
                </div>                      
            </div>
        </>
    )
}

export default BannerLogo;
