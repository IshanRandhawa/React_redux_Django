// import React, { useState } from "react";
// import { Form, Input, Button, Slider } from "antd";

// export const FormLayoutDemo = () => {
//   const [form] = Form.useForm();
//   const [formLayout, setFormLayout] = useState("horizontal");

//   const onFormLayoutChange = ({ layout }) => {
//     setFormLayout(layout);
//   };

//   const formItemLayout =
//     formLayout === "horizontal"
//       ? {
//           labelCol: { span: 4 },
//           wrapperCol: { span: 14 },
//         }
//       : null;

//   const buttonItemLayout =
//     formLayout === "horizontal"
//       ? {
//           wrapperCol: { span: 14, offset: 4 },
//         }
//       : null;

//   return (
//     <>
//       <Form
//         {...formItemLayout}
//         layout="vertical"
//         form={form}
//         initialValues={{ layout: formLayout }}
//         onValuesChange={onFormLayoutChange}
//       >
//         <Form.Item name="layout">
//           {/* <Radio.Group value={formLayout}>
//             <Radio.Button value="horizontal">Horizontal</Radio.Button>
//             <Radio.Button value="vertical">Vertical</Radio.Button>
//             <Radio.Button value="inline">Inline</Radio.Button>
//           </Radio.Group> */}
//         </Form.Item>
//         <Form.Item label="Query">
//           <Input placeholder="input placeholder" />
//         </Form.Item>
//         <Form.Item name="slider" label="Slider">
//           <Slider
//             marks={{
//               0: "0",
//               10: "10",
//               20: "20",
//               30: "30",
//               40: "40",
//               50: "50",
//             }}
//           />
//         </Form.Item>
//         <Form.Item {...buttonItemLayout}>
//           <Button type="primary">Submit</Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };
