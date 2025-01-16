import styles from './copyright.module.css'

function Copyright() {
    return(
        <>
        <div className={styles['info-bar-container']}>
            <div className={styles['info-bar']}>
                <p>Cung cấp thông tin liệt sĩ</p>
                <a href="https://forms.gle/ekGbNFTtUE11AuP59" target="_blank" rel="noopener noreferrer">
                    <button>Tại đây</button>
                </a>
            </div>
        </div>
        <div className={styles['copyright']}>
            <div className={styles['container-footer']}>
                <div>ĐƠN VỊ THỰC HIỆN:</div> 
                <img src="/img/logo copy.png"/>
                <div>HỘI SINH VIÊN TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN, ĐHQG-HCM</div> 
            </div>
            <div className={styles['dated']}>Tháng 7/2024</div>
        </div>
        </>
    )
}

export default Copyright;