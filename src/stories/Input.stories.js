import React from "react";
import Input from "../components/Input.js";
import Styles from "./input.module.css";
export default {
  title: "Input",
  component: Input,
};
export function InputField1() {
  return (
    <div>
      <Input className={Styles.field1} />
    </div>
  );
}
export function InputField2() {
  return (
    <div>
      <Input className={Styles.field2} />
    </div>
  );
}
