import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../../services/http/auth";
const { Title, Text, Link } = Typography;

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const user = await handleLogin(email, password);
      console.log(user, "user");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/customers/users");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "600px",
      }}
    >
      <div style={{ width: 300 }}>
        <Title
          level={2}
          style={{
            // fontFamily: "Avenir Next",
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: "54.64px",
            letterSpacing: "-0.04em",
            textAlign: "left",
            color: "#213F7D",
          }}
        >
          Welcome!
        </Title>
        <Text
          type="secondary"
          style={{
            // fontFamily: "Avenir Next",
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "27.32px",
            textAlign: "left",
            color: "#545F7D",
          }}
        >
          Enter details to login.
        </Text>
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
          style={{ marginTop: 20 }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item>
            <Link href="#" style={{ float: "left" }}>
              Forgot password?
            </Link>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ background: "#39CDCC" }}
              htmlType="submit"
              block
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
// import React, { useState } from "react";
// import { Form, Input, Button, Typography } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // If using axios

// const { Title, Text, Link } = Typography;

// export const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string>("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("https://your-api-endpoint/login", {
//         email,
//         password,
//       });

//       // Check if login is successful (customize based on your API's response structure)
//       if (response.data.success) {
//         navigate("/customers/users"); // Navigate on successful login
//       } else {
//         setError("Invalid credentials. Please try again.");
//       }
//     } catch (err) {
//       setError(
//         err instanceof Error ? err.message : "An error occurred during login"
//       );
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "600px",
//       }}
//     >
//       <div style={{ width: 300 }}>
//         <Title
//           level={2}
//           style={{
//             fontFamily: "Avenir Next",
//             fontSize: "40px",
//             fontWeight: 700,
//             lineHeight: "54.64px",
//             letterSpacing: "-0.04em",
//             textAlign: "left",
//             color: "#213F7D",
//           }}
//         >
//           Welcome!
//         </Title>
//         <Text
//           type="secondary"
//           style={{
//             fontFamily: "Avenir Next",
//             fontSize: "20px",
//             fontWeight: 400,
//             lineHeight: "27.32px",
//             textAlign: "left",
//             color: "#545F7D",
//           }}
//         >
//           Enter details to login.
//         </Text>
//         <Form
//           name="login"
//           layout="vertical"
//           onFinish={handleLogin}
//           style={{ marginTop: 20 }}
//         >
//           <Form.Item
//             name="email"
//             rules={[{ required: true, message: "Please enter your email" }]}
//           >
//             <Input
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Item>
//           <Form.Item
//             name="password"
//             rules={[{ required: true, message: "Please enter your password" }]}
//           >
//             <Input.Password
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               iconRender={(visible) =>
//                 visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//               }
//             />
//           </Form.Item>
//           <Form.Item>
//             <Link href="#" style={{ float: "left" }}>
//               Forgot password?
//             </Link>
//           </Form.Item>
//           <Form.Item>
//             <Button
//               type="primary"
//               style={{ background: "#39CDCC" }}
//               htmlType="submit"
//               block
//             >
//               Log In
//             </Button>
//           </Form.Item>
//         </Form>
//         {error && (
//           <Text type="danger" style={{ marginTop: 10 }}>
//             {error}
//           </Text>
//         )}
//       </div>
//     </div>
//   );
// };
