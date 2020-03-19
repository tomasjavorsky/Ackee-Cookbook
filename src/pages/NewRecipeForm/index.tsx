import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ReduxTypes from "../../store/@types";
import FormHeader from "../../components/FormHeader";
import { useFormik } from "formik";
import texts from "../../texts";
import {
  StyledForm,
  Heading,
  Separator,
  StyledTextField,
  StyledButton,
  StyledSubmit
} from "../../components/StyledForm/styled";
import { TextField } from "@material-ui/core";
import * as Yup from "yup";
import { sendNewRecipe } from "../../store/cookbook/actions";
import {
  selectSendingRecipe,
  selectRecipeSent,
  selectSendingRecipeError,
  selectSendingRecipeErrorMessage
} from "../../store/selectors";
import { LoadingOutlined } from "@ant-design/icons";
import { GlobalContainer } from "../../components/GlobalContainer/styled";

interface StateProps {
  sendingRecipe: boolean;
  recipeSent: boolean;
  sendingRecipeError: boolean;
  sendingRecipeErrorMessage: string;
}

interface DispatchProps {
  sendNewRecipe: typeof sendNewRecipe;
}

interface Props extends StateProps, DispatchProps {}

const NewRecipeForm = ({
  sendNewRecipe,
  sendingRecipe,
  recipeSent,
  sendingRecipeError,
  sendingRecipeErrorMessage
}: Props) => {
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [clearMessage, setClearMessage] = useState<boolean>(false);

  useEffect(() => {
    setClearMessage(false);
    if (sendingRecipeErrorMessage) {
      setTimeout(() => {
        setClearMessage(true);
      }, 3000);
    }
  }, [sendingRecipeErrorMessage]);

  const formik = useFormik({
    initialValues: {
      recipeName: "",
      recipeDescription: "",
      recipeInfo: "",
      recipeDuration: undefined,
      recipeIngredients: ingredients
    },
    validationSchema: Yup.object({
      recipeName: Yup.string()
        .required()
        .matches(/Ackee|ackee/),
      recipeInfo: Yup.string().required(),
      recipeDuration: Yup.number().required()
    }),
    onSubmit: values => {
      sendNewRecipe(
        values.recipeName,
        values.recipeDescription,
        values.recipeIngredients,
        values.recipeDuration,
        values.recipeInfo
      );
    }
  });

  return (
    <>
      <FormHeader />
      <GlobalContainer>
      <StyledForm onSubmit={formik.handleSubmit}>
        <TextField
          id="recipeName"
          name="recipeName"
          error={
            formik.touched.recipeName && formik.errors.recipeName ? true : false
          }
          helperText={
            formik.touched.recipeName && formik.errors.recipeName
              ? texts.recipeNameHelper
              : null
          }
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.recipeName}
          label={texts.recipeName}
        />
        <Separator />
        <TextField
          id="recipeDescription"
          name="recipeDescription"
          type="text"
          multiline
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.recipeDescription}
          label={texts.recipeDescription}
        />
        <Separator />
        <Heading>{texts.ingredients}</Heading>
        {ingredients?.map((ingr, index) => (
          <TextField
            id={`recipeIngredients[${index}]`}
            key={index}
            name={`recipeIngredients[${index}]`}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.recipeIngredients[index]}
            label={texts.recipeIngredient}
          />
        ))}
        <Separator />
        <StyledButton
          type="button"
          onClick={e => {
            e.preventDefault();
            setIngredients([...ingredients, ""]);
          }}
        >
          {texts.add}
        </StyledButton>
        <TextField
          id="recipeInfo"
          name="recipeInfo"
          multiline
          error={
            formik.touched.recipeInfo && formik.errors.recipeInfo ? true : false
          }
          helperText={
            formik.touched.recipeInfo && formik.errors.recipeInfo
              ? texts.recipeInfoHelper
              : null
          }
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.recipeInfo}
          label={texts.recipeInfo}
        />
        <Separator />
        <StyledTextField
          id="recipeDuration"
          name="recipeDuration"
          error={
            formik.touched.recipeDuration && formik.errors.recipeDuration
              ? true
              : false
          }
          helperText={
            formik.touched.recipeDuration && formik.errors.recipeDuration
              ? texts.recipeDurationHelper
              : null
          }
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.recipeDuration}
          label={texts.recipeDuration}
        />
        {((!sendingRecipe && !recipeSent && !sendingRecipeError) ||
          (!sendingRecipe && clearMessage)) && (
          <StyledSubmit type="submit">{texts.recipeSend}</StyledSubmit>
        )}
        {sendingRecipe && (
          <StyledSubmit>
            <LoadingOutlined />
          </StyledSubmit>
        )}
        {recipeSent && <StyledSubmit>{texts.recipeSent}</StyledSubmit>}
        {!sendingRecipe && sendingRecipeError && !clearMessage && (
          <StyledSubmit>{sendingRecipeErrorMessage}</StyledSubmit>
        )}
      </StyledForm>
      </GlobalContainer>
    </>
  );
};

const mapStateToProps = (state: ReduxTypes) => {
  return {
    sendingRecipe: selectSendingRecipe(state),
    recipeSent: selectRecipeSent(state),
    sendingRecipeError: selectSendingRecipeError(state),
    sendingRecipeErrorMessage: selectSendingRecipeErrorMessage(state)
  };
};

export default connect(mapStateToProps, { sendNewRecipe })(NewRecipeForm);
