import React from 'react';
import {
  Column,
  MainSection,
  HeaderTitle,
  ImageContainer,
  Paragraph,
  Row,
  Wrapper,
  H3White,
  ImgLabel
} from "./homePage.styles";
import {Icon, Spin} from "antd";
import VisibilitySensor from 'react-visibility-sensor';

const Home = () => {
  return (
    <>
      <MainSection>
        <VisibilitySensor>
          <ImageContainer
            src={'https://res.cloudinary.com/djagznbnb/image/upload/q_auto:low/v1584814573/vegasMeeting.png'}
            alt={'vegas meeting hippocratic society'}
            loader={
              <Spin
                tip={'loading'}
                style={{
                  marginTop: '5%',
                  marginLeft: '45%',
                  height: '100%'
                }}
              />}
          />
        </VisibilitySensor>
        <ImgLabel>Vegas meeting 2019</ImgLabel>
        <span>
          <Paragraph>
            <strong>The Hellenic American Hippocratic Society</strong> is a private,
            non-profit society of physicians and scientists whose
            main interest is the study of the musculoskeletal system.
            Members of the society are United States or Canada or Greek
            citizens or permanent residents. The members of the society
            work together to promote the exchange of ideas, experiences
            and professional opportunities within the field of orthopaedic
            surgery. In addition, it is the focus of the society to recognize
            outstanding contributions to knowledge or understanding of
            orthopaedic problems. It is within the scope of the society
            to promote scientific or professional interactions in the
            forms of scientific meetings, observership programs or any
            other forms of professional activity that strengthen the
            understanding and treatment of the orthopaedic diseases as
            well as the professional achievements of the members.
      </Paragraph>
        </span>
      </MainSection>

      <Row>
        <Column backgroundClr={'#fbc928'}>
          <HeaderTitle align={'center'}><Icon type="trophy"/> Recognition Levels</HeaderTitle>
          <Wrapper>
            <h3><Icon type="star"/> Olympic Founder<br/>
              $5000 or more
            </h3>
            <h3><Icon type="star"/> Founder<br/>
              $2000-$5000 </h3>
            <h3><Icon type="star"/> Patron<br/>
              $1000-$2000 </h3>
            <h3><Icon type="star"/> Friend<br/>
              $500-$1000 </h3>
          </Wrapper>
        </Column>
        <Column backgroundClr={'#345170'}>
          <HeaderTitle white align={'center'}>Patrons</HeaderTitle>
          <Wrapper>
            <H3White> <Icon type="trophy"/> Apostolos Dimitroulias, MD</H3White>
            <H3White> <Icon type="trophy"/> Anastasios Papadonikolakis, MD</H3White>
            <H3White> <Icon type="trophy"/> Periklis Papapetropoulos, MD</H3White>
            <H3White> <Icon type="trophy"/> Loukia Papatheodorou, MD, PhD</H3White>
            <H3White> <Icon type="trophy"/> Apostolos Tambakis, MD</H3White>
          </Wrapper>
        </Column>
      </Row>
    </>
  );
};

export default Home;