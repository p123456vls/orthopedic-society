import React from 'react';
import {Body, Main, Row, SubTitle, Title, TitleContainer} from "../../index.styles";
import ImageView from "../../components/img/image.component";
import {InfoCircleTwoTone} from '@ant-design/icons';
import withIcon from "../../withIcon";
import {Colors} from "../../constants/colors";

const Icon = withIcon(InfoCircleTwoTone, Colors.primary);

const AboutPage = () => {
  return (
    <>
      <TitleContainer>
        <Title><Icon/> About</Title>
      </TitleContainer>
      <Main>
        <Body>
          <SubTitle>History</SubTitle>
          <p>
            The Hippocratic Orthopaedic Society was founded in 1973 by Drs Tsakalis (Virginia), Tambakis (NYC) and
            Christidis (Philadelphia). The only living founding member currently is Dr Tambakis. The first president of
            the society was Dr Christidis and the first meeting took place during the AAOS meeting in Las Vegas. Dr
            Christidis remained president for 4 years and then Dr Tambakis was appointed President for 17 years.
            Subsequently, Dr Kassapidis (NYC) served as president for one year followed by Dr Sakellaridis (Boston) and
            Dr Xethalis (NYC). There was a period of inactivity of the society for about 6 years, until 2019. In 2019 in Las
            Vegas NV during the AAOS meeting the society held a meeting again under the direction of Dr Papadonikolakis
            (NC) and Dr Tambakis (NYC).
          </p>
          <p>
            During its existence the society had 40 active Greek American orthopaedic surgeons living and practicing in
            the USA and it is the first foreign ethnic group to have registered with the American Academy of Orthopaedic
            Surgeons.
          </p>
          <p>
            Since 1996 the Hippocratic Orthopaedic Society is a Not-for-profit Corporation registered with the
            Department of State in the state of New York.
          </p>
          <SubTitle>Governance:</SubTitle>
          <Row>
            <ImageView
              imgSrc={'./anastasios.jpg'}
              profession={'MD(Wake Forest University, NC)'}
              role={'Interim President'}
              name={'Anastasios Papadonikolakis'}
            />
            <ImageView
              imgSrc={'./Loukia.jpg'}
              profession={'MD (University of Pittsburgh PA)'}
              role={'Vice President'}
              name={'Loukia Papatheodorou'}
            />
            <ImageView
              imgSrc={'./Periklis.jpg'}
              profession={'MD (University of Pittsburgh PA)'}
              role={'Secretary'}
              name={'Periklis Papapetropoulos'}
            />
            <ImageView
              imgSrc={'./Apostolos.jpg'}
              profession={'MD (Albert Einstein College of Medicine, NY)'}
              role={'Treasurer'}
              name={'Apostolos Dimitroulias'}
            />
          </Row>
          <br/>
          <SubTitle>Ex-Officio Members from the Hellenic Association of Orthopaedic Surgery and Traumatology:</SubTitle>
          <Row>
            <ImageView
              imgSrc={'./AthanasiosKostakos.jpg'}
              profession={'MD '}
              role={'President'}
              name={'Athanasios Kostakos'}
            />
          </Row>
        </Body>
      </Main>
    </>
  );

};

export default AboutPage;