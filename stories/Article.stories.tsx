import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Article } from "./Article";

export default {
  title: "Article",
  component: Article,
} as ComponentMeta<typeof Article>;

export const Default: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);
