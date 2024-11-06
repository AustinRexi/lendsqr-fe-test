import React from "react";
import { Form, Input, DatePicker, Select } from "antd";
import Buttons from "../input/Buttons";

const { Option } = Select;

const labelStyle: React.CSSProperties = {
  //: "Work Sans",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "16.42px",
  textAlign: "left",
  color: "#545F7D",
};

interface FormModalProps {
  onClose: () => void; // Add the onClose prop type
}

const FormModal: React.FC<FormModalProps> = ({ onClose }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
    onClose(); // Close the modal after form submission
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{
        backgroundColor: "#ffffff",
        maxWidth: 270,
        padding: "1rem",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        height: "600px",
      }}
    >
      {/* Form Items */}
      <Form.Item
        name="organization"
        label={<span style={labelStyle}>Organization</span>}
      >
        <Select placeholder="Select">
          <Option value="org1">Organization 1</Option>
          <Option value="org2">Organization 2</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="username"
        label={<span style={labelStyle}>Username</span>}
      >
        <Input placeholder="User" />
      </Form.Item>

      <Form.Item name="email" label={<span style={labelStyle}>Email</span>}>
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item name="date" label={<span style={labelStyle}>Date</span>}>
        <DatePicker style={{ width: "100%" }} placeholder="Date" />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        label={<span style={labelStyle}>Phone Number</span>}
      >
        <Input placeholder="Phone Number" />
      </Form.Item>

      <Form.Item name="status" label={<span style={labelStyle}>Status</span>}>
        <Select placeholder="Select">
          <Option value="active">Active</Option>
          <Option value="inactive">Inactive</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Buttons onClick={onReset} style={{ marginRight: 8 }} text="Reset" />
        <Buttons
          onClick={() => form.submit()}
          style={{ marginRight: 8, background: "#39CDCC", color: "#ffffff" }}
          text="Filter"
        />
      </Form.Item>
    </Form>
  );
};

export default FormModal;
