import { useState } from 'react';
import styles from './carousel.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  //install: npm install react-slick slick-carousel

  const images = [
    '/img/carousel/bannerhethong.png',
    '/img/carousel/bannerhethong2.png',
  ];

  const [selectedOption, setSelectedOption] = useState('A');

  const settings = {
    dots: false, // Changed from true to false
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Disable arrows
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = () => {
    let url = 'https://tphcm.anhhunglietsi.vn/';
    if (selectedOption === 'HCM') {
      url = 'https://tphcm.anhhunglietsi.vn/';
    } else if (selectedOption === 'RungSac') {
      url = 'https://cangiorungsac.anhhunglietsi.vn';
    } else if (selectedOption === 'CanGio') {
      url = 'https://ahls-cu-chi.web.app/';
    } else if (selectedOption === 'NhaBe') {
      url = 'https://ntls-nha-be.vercel.app/';
    } else if (selectedOption === 'HocMon') {
      url = 'https://ntls-hoc-mon.vercel.app/';
    } else if (selectedOption === 'ThuDuc') {
      url = 'https://ntls-thu-duc.vercel.app/';}
      else if (selectedOption === 'BinhChanh') {
    url = 'https://ntls-binh-chanh.vercel.app/';}
        else if (selectedOption === 'LacCanh') {
    url = 'https://ntls-lac-canh.vercel.app/';}
    window.location.href = url;
  };

  return (
    <>
      <div className={styles['title-dong']}>
        <span>
          CÔNG TRÌNH CỦA TUỔI TRẺ THÀNH PHỐ HỒ CHÍ MINH CHÀO MỪNG KỶ NIỆM 50 NĂM
          NGÀY GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 - 30/4/2025)
        </span>
      </div>
      <div className={styles['slide']}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`slide-${index}`}
                style={{ width: '100%' }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles['search-bar-container']}>
        <div className={styles['search-bar']}>
          <p>
            <strong></strong>Tra cứu thông tin mộ liệt sĩ tại:
          </p>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="HCM">Nghĩa trang Liệt sĩ TP. Hồ Chí Minh</option>
            <option value="RungSac">
              Nghĩa trang Liệt sĩ Rừng Sác Cần Giờ
            </option>
            <option value="CanGio">Nghĩa trang Liệt sĩ Củ Chi</option>
            <option value="NhaBe">Nghĩa trang Liệt sĩ Nhà Bè - Quận 7</option>
            <option value="HocMon">Nghĩa trang Liệt sĩ Huyện Hóc Môn</option>
            <option value="ThuDuc">Nghĩa trang Liệt sĩ Thủ Đức</option>
            <option value="BinhChanh">Nghĩa trang Liệt sĩ Bình Chánh - Bình Tân</option>
            <option value="LacCanh">Nghĩa trang Thành phố Hồ Chí Minh (Nghĩa trang Lạc Cảnh)</option>
          </select>
          <button onClick={handleSearch}>Tìm</button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
