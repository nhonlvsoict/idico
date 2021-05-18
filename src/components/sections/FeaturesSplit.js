import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'LĨNH VỰC HOẠT ĐỘNG',
    paragraph: 'Hoạt động trong lĩnh vực đầu tư phát triển khu công nghiệp, thủy điện, giao thông, nhà ở và đô thị, thi công xây lắp. Qua quá trình xây dựng và phát triển, đến nay, IDICO đã trở thành một tập đoàn vững mạnh hoạt động theo mô hình công ty cổ phần với mã chứng khoán IDC'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lĩnh vực chính
                  </div>
                <h3 className="mt-0 mb-12">
                KHU CÔNG NGHIỆP
                  </h3>
                <p className="m-0">
                IDICO là nhà đầu tư tiên phong trong lĩnh vực bất động sản khu công nghiệp, là chủ đầu tư khu công nghiệp uy tín tại Việt Nam. Hiện nay, IDICO quản lý 10 khu công nghiệp tại Việt Nam với tổng diện tích 3.270ha. Các khu công nghiệp do IDICO làm chủ đầu tư có vị trí đầu tư chiến lược, một số khu công nghiệp gần cảng lớn Phú Mỹ - Cái Mép, gần thành phố Hồ Chí Minh; 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/linhvuc/img1.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Năng lượng
                  </div>
                <h3 className="mt-0 mb-12">
                ĐIỆN NĂNG
                  </h3>
                <p className="m-0">
                  IDICO là một trong những đơn vị ngoài ngành điện tiên phong trong việc đầu tư, xây dựng và quản lý vận hành nhà máy thủy điện để cung cấp nguồn điện vào hệ thống điện Quốc gia. Đồng thời, IDICO còn thực hiện đầu tư xây dựng các Trạm biến áp 110/22kV và hệ thống lưới điện 22kV để phân phối, kinh doanh cung cấp điện năng cho các nhà máy trong KCN của IDICO và các KCN lân cận
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/linhvuc/DAK_MI_3.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Hạ tầng
                  </div>
                <h3 className="mt-0 mb-12">
                GIAO THÔNG
                  </h3>
                <p className="m-0">
                Nhận thức được vai trò và tầm quan trọng của hệ thống hạ tầng giao thông đối với sự phát triển kinh tế - xã hội trong công cuộc Công nghiệp hóa - Hiện đại hóa đất nước, IDICO đã nghiên cứu, đề xuất và thực hiện đầu tư các dự án giao thông theo hình thức BOT, BT… Với kinh nghiệm, nguồn lực mạnh mẽ về phương tiện máy móc thiết bị và con người, IDICO đã để lại dấu ấn thương hiệu IDICO tại nhiều công trình giao thông trọng điểm trên toàn quốc, góp phần phát triển hạ tầng giao thông đất nước.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/linhvuc/IMG_4972.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;