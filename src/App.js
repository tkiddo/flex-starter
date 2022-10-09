import "./App.css";
import ViewBox from "./components/ViewBox";
import styled from "styled-components";
import { Form, Radio } from "antd";
import { useState } from "react";

const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Left = styled.section`
  width: 40%;
  height: 100%;
  & .options {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Right = styled.section`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const containerOptions = [
  {
    cssName: "flex-direction",
    name: "flexDirection",
    values: ["row", "row-reverse", "column", "column-reverse"],
    defaultValue: "row",
  },
  {
    cssName: "flex-wrap",
    name: "flexWrap",
    values: ["nowrap", "wrap", "wrap-reverse"],
    defaultValue: "nowrap",
  },
  {
    cssName: "justify-content",
    name: "justifyContent",
    values: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    defaultValue: "flex-start",
  },
  {
    cssName: "align-items",
    name: "alignItems",
    values: ["flex-start", "flex-end", "center", "stretch", "baseline"],
    defaultValue: "flex-start",
  },
  {
    cssName: "align-content",
    name: "alignContent",
    values: [
      "flex-start",
      "flex-end",
      "center",
      "stretch",
      "space-between",
      "space-around",
    ],
    defaultValue: "flex-start",
  },
];

function App() {
  const [parentStyle, setParentStyle] = useState({});
  const [form] = Form.useForm();
  const parentStyleChange = (changedFields, allFields) => {
    const newStyle = {};
    allFields.forEach((field) => {
      newStyle[field.name[0]] = field.value;
    });
    setParentStyle(newStyle);
  };
  return (
    <Main>
      <Left>
        <Form
          className="options"
          layout="vertical"
          form={form}
          onFieldsChange={parentStyleChange}
        >
          {containerOptions.map(
            ({ cssName, name, values, defaultValue }, index) => {
              return (
                <Form.Item
                  label={cssName}
                  name={name}
                  key={name}
                  initialValue={defaultValue}
                >
                  <Radio.Group>
                    {values.map((value) => (
                      <Radio value={value} key={value}>
                        {value}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Form.Item>
              );
            }
          )}
        </Form>
      </Left>
      <Right>
        <ViewBox parentStyle={parentStyle} />
      </Right>
    </Main>
  );
}

export default App;
