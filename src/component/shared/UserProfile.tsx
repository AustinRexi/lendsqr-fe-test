import React from "react";
import { Card, Col, Row, Typography, Divider } from "antd";

const { Title, Text } = Typography;

interface UserProfileProps {
  userName: string;
}

const titleStyle = {
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "14.08px",
  color: "#545F7D",
};

const textStyle = {
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "18.77px",
  color: "#545F7D",
  whiteSpace: "nowrap",
};

const UserProfile: React.FC<UserProfileProps> = ({ userName }) => {
  return (
    <Card style={{ marginTop: 30 }}>
      <Title
        level={4}
        style={{
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "16.08px",
          color: "#545F7D",
        }}
      >
        Personal Information
      </Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={9} lg={4}>
          <Title level={5} style={titleStyle}>
            Full Name
          </Title>
          <Text style={textStyle}>{userName}</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={4}>
          <Title level={5} style={titleStyle}>
            Phone Number
          </Title>
          <Text style={textStyle}>07060780922</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={4}>
          <Title level={5} style={titleStyle}>
            EMAIL ADDRESS
          </Title>
          <Text style={textStyle}>grace@gmail.com</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={4}>
          <Title level={5} style={titleStyle}>
            BVN
          </Title>
          <Text style={textStyle}>07060780922</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={4}>
          <Title level={5} style={titleStyle}>
            Gender
          </Title>
          <Text style={textStyle}>Female</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={4}></Col>
        <Col xs={24} sm={12} md={9} lg={4}>
          <Title level={5} style={titleStyle}>
            Marital Status
          </Title>
          <Text style={textStyle}>Single</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={4}>
          <Title level={5} style={titleStyle}>
            Children
          </Title>
          <Text style={textStyle}>None</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={4}>
          <Title level={5} style={titleStyle}>
            Type of Residence
          </Title>
          <Text style={textStyle}>Parent's Apartment</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={4}></Col>
      </Row>
      <Divider />

      <Title
        level={4}
        style={{
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "16.08px",
          color: "#545F7D",
        }}
      >
        Education and Employment
      </Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={9} lg={6}>
          <Title level={5} style={titleStyle}>
            Level of Education
          </Title>
          <Text style={textStyle}>B.Sc</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={6}>
          <Title level={5} style={titleStyle}>
            Employment Status
          </Title>
          <Text style={textStyle}>Employed</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={6}>
          <Title level={5} style={titleStyle}>
            Sector of Employment
          </Title>
          <Text style={textStyle}>FinTech</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={6}>
          <Title level={5} style={titleStyle}>
            Duration of Employment
          </Title>
          <Text style={textStyle}>2 years</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={6}>
          <Title level={5} style={titleStyle}>
            OFFICIAL EMAIL
          </Title>
          <Text style={textStyle}>grace@gmail.com</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={6}>
          <Title level={5} style={titleStyle}>
            Monthly Income
          </Title>
          <Text style={textStyle}>₦200,000.00 - ₦400,000.00</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={6}>
          <Title level={5} style={titleStyle}>
            Loan Repayment
          </Title>
          <Text style={textStyle}>40,000</Text>
        </Col>
      </Row>

      <Divider />

      <Title
        level={4}
        style={{
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "16.08px",
          color: "#545F7D",
        }}
      >
        Socials
      </Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6} lg={6}>
          <Title level={5} style={titleStyle}>
            Twitter:
          </Title>
          <Text style={textStyle}>@grace_effiom</Text>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <Title level={5} style={titleStyle}>
            Facebook:
          </Title>
          <Text style={textStyle}>Grace Effiom</Text>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <Title level={5} style={titleStyle}>
            Instagram:
          </Title>
          <Text style={textStyle}>@grace_effiom</Text>
        </Col>
      </Row>

      <Divider />

      <Title
        level={4}
        style={{
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "16.08px",
          color: "#545F7D",
        }}
      >
        Guarantor
      </Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={9} lg={6}>
          <Title level={5} style={titleStyle}>
            Full Name
          </Title>
          <Text style={textStyle}>Debby Ogana</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={6}>
          <Title level={5} style={titleStyle}>
            Phone Number
          </Title>
          <Text style={textStyle}>07060780922</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={6}>
          <Title level={5} style={titleStyle}>
            Email Address
          </Title>
          <Text style={textStyle}>debby@gmail.com</Text>
        </Col>
        <Col xs={24} sm={12} md={9} lg={6}>
          <Title level={5} style={titleStyle}>
            Relationship
          </Title>
          <Text style={textStyle}>Sister</Text>
        </Col>
      </Row>
    </Card>
  );
};

export default UserProfile;
