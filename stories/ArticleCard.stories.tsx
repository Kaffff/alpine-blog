import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleCard } from "./ArticleCard";

export default {
  title: "ArticleCard",
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>;

export const Default: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
);
