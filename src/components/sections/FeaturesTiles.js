import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'THUÊ ĐẤT KHU CÔNG NGHIỆP',
    paragraph: 'IDICO là nhà đầu tư tiên phong trong lĩnh vực bất động sản khu công nghiệp, là chủ đầu tư khu công nghiệp uy tín tại Việt Nam. Hiện nay, IDICO quản lý 10 khu công nghiệp tại Việt Nam với tổng diện tích 3.270ha. Các khu công nghiệp do IDICO làm chủ đầu tư có vị trí đầu tư chiến lược, một số khu công nghiệp gần cảng lớn Phú Mỹ - Cái Mép, gần thành phố Hồ Chí Minh; '
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/kcn/6.jpg')}
                      alt="Features tile icon 01"
                      // width={264}
                      height={200} 
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  KCN HỰU THẠNH LONG AN, GẦN TP. HỒ CHÍ MINH
                    </h4>
                  <p className="m-0 text-sm">
                  Khu công nghiệp nằm trong Vùng kinh tế trọng điểm phía Nam, là vùng kinh tế động lực có vai trò đặc biệt quan trọng trong chiến lược phát triển kinh tế Việt Nam.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/kcn/KCN_PM2.jpg')}
                      alt="Features tile icon 02"
                      // width={264}
                      height={200} 
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  KCN PHÚ MỸ 2 MỞ RỘNG TỈNH BR-VT, GẦN CẢNG, CÓ KHÍ ĐỐT
                    </h4>
                  <p className="m-0 text-sm">
                  Thuộc các Phường Phú Mỹ, Phước Tân và Phước Hòa - Thị Xã Phú Mỹ - Tỉnh Bà Rịa - Vũng Tàu
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/kcn/7.jpg')}
                      alt="Features tile icon 03"
                      // width={264}
                      height={200} 
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  KCN CẦU NGHÌN TỈNH THÁI BÌNH, DỄ TUYỂN LAO ĐỘNG
                    </h4>
                  <p className="m-0 text-sm">
                  Khu công nghiệp nằm cạnh Quốc lộ 10; gần các khu dân cư, lực lượng lao động dồi dào, dễ tuyển lao động; giá thuê đất tốt.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/kcn/9.jpg')}
                      alt="Features tile icon 04"
                      width={264}
                      // height={200} 
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  KHU CÔNG NGHIỆP QUẾ VÕ 2, TỈNH BẮC NINH
                    </h4>
                  <p className="m-0 text-sm">
                  Khu công nghiệp phù hợp với các ngành nghề điện tử công nghệ thông tin, công nghiệp phụ trợ...
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/kcn/KCN_Nhon_Trach_1_1.jpg')}
                      alt="Features tile icon 05"
                      width={264}
                      // height={200} 
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  KHU CÔNG NGHIỆP NHƠN TRẠCH 1 - TỈNH ĐỒNG NAI
                    </h4>
                  <p className="m-0 text-sm">
                  Thuộc đô thị mới Nhơn Trạch nằm trong quy hoạch thành phố công nghiệp với quy mô 8.000ha, bao gồm hệ thống sân bay, bến cảng, khu công nghiệp, khu quy hoạch dân cư, khu vui chơi giải trí...
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/kcn/IDICO_QH_KIM_HOA.jpg')}
                      alt="Features tile icon 06"
                      width={264}
                      // height={200} 
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  KHU CÔNG NGHIỆP KIM HOA TỈNH VĨNH PHÚC
                    </h4>
                  <p className="m-0 text-sm">
                    Nằm tại thị xã Phúc Yên - tỉnh Vĩnh Phúc giáp ranh với Thành phố Hà Nội. Nằm cạnh Quốc lộ 2, Khu công nghiệp có hệ thống giao thông thuận tiện
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;