import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import StatisticCard from "../../component/shared/StatisticCard";
import userprofileimage from "../../assets/images/userprofileimage.svg";
import lineIcon from "../../assets/icons/lineicon.svg";
import backicon from "../../assets/icons/backicon.svg";
import { Row, Col } from "antd";
import Buttons from "../../component/input/Buttons";

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/customers/users");
  };

  return (
    <>
      <div
        style={{
          marginLeft: 4,
          marginBottom: 10,
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "18.77px",
          color: "#545F7D",
        }}
        onClick={handleClick} // Moved onClick outside of style
      >
        <img src={backicon} alt="back" /> Back to users
      </div>
      <Row gutter={16} style={{ marginBottom: 12, marginLeft: 10 }}>
        <Col xs={10} md={16}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "28.15px",
              color: "#213F7D",
              whiteSpace: "nowrap",
            }}
          >
            Users Details
          </h2>
        </Col>

        <Col xs={0} md={0} lg={2}>
          <Buttons
            text="Blacklist User"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "16.42px",
              letterSpacing: "0.1em",
              textAlign: "center",
              color: "#E4033B",
              border: "1px solid #E4033B",
            }}
          />
        </Col>
        <Col xs={0} md={0} lg={2}></Col>
        <Col xs={0} md={0} lg={2}>
          <Buttons
            text="Active User"
            style={{
              border: "1px solid #39CDCC",
              color: "#39CDCC",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "16.42px",
              letterSpacing: "0.1em",
              textAlign: "center",
            }}
          />
        </Col>
      </Row>
      <StatisticCard
        userImage={userprofileimage}
        userName="Grace Effiom"
        userID="LSQF587g60"
        userTier={1}
        accountBalance="₦200,000.00"
        accountDetails="9912345678 / Providus Bank"
        lineIcon={lineIcon}
        titleStyles={{
          fontSize: "22px",
          fontWeight: 500,
          lineHeight: "25.81px",
          color: "#213F7D",
        }}
        textStyles={{
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "16.42px",
          color: "#545F7D",
          whiteSpace: "nowrap",
        }}
      />
    </>
  );
};

export { UserDetails };
