import React from "react";
import { Wrapper, Text, Heading, IngredientsList, Ingredient } from "./styled";
import texts from "../../texts";

interface Props {
  info: string;
  description: string;
  ingredients: string[];
}

const DetailSection = ({ info, description, ingredients }: Props) => {
  return (
    <Wrapper>
      {info && <Text>{info}</Text>}
      <Heading>{texts.ingredients}</Heading>
      {ingredients && (
        <IngredientsList>
          {ingredients.map((ingredient, index) => (
            <Ingredient key={index}>{ingredient}</Ingredient>
          ))}
        </IngredientsList>
      )}
      <Heading>{texts.preparation}</Heading>
      {description && <Text>{description}</Text>}
    </Wrapper>
  );
};

export default DetailSection;
