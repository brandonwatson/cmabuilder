/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Property } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PropertyUpdateForm(props) {
  const {
    pk: pkProp,
    property,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    pk: "",
    sk: "",
    num_beds: "",
    num_bath: "",
    total_sqft: "",
    above_grade_sqft: "",
    upper_sqft: "",
    main_sqft: "",
    fininshed_basement_sqft: "",
    unfininshed_basement_sqft: "",
    list_price: "",
    sale_price: "",
  };
  const [pk, setPk] = React.useState(initialValues.pk);
  const [sk, setSk] = React.useState(initialValues.sk);
  const [num_beds, setNum_beds] = React.useState(initialValues.num_beds);
  const [num_bath, setNum_bath] = React.useState(initialValues.num_bath);
  const [total_sqft, setTotal_sqft] = React.useState(initialValues.total_sqft);
  const [above_grade_sqft, setAbove_grade_sqft] = React.useState(
    initialValues.above_grade_sqft
  );
  const [upper_sqft, setUpper_sqft] = React.useState(initialValues.upper_sqft);
  const [main_sqft, setMain_sqft] = React.useState(initialValues.main_sqft);
  const [fininshed_basement_sqft, setFininshed_basement_sqft] = React.useState(
    initialValues.fininshed_basement_sqft
  );
  const [unfininshed_basement_sqft, setUnfininshed_basement_sqft] =
    React.useState(initialValues.unfininshed_basement_sqft);
  const [list_price, setList_price] = React.useState(initialValues.list_price);
  const [sale_price, setSale_price] = React.useState(initialValues.sale_price);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = propertyRecord
      ? { ...initialValues, ...propertyRecord }
      : initialValues;
    setPk(cleanValues.pk);
    setSk(cleanValues.sk);
    setNum_beds(cleanValues.num_beds);
    setNum_bath(cleanValues.num_bath);
    setTotal_sqft(cleanValues.total_sqft);
    setAbove_grade_sqft(cleanValues.above_grade_sqft);
    setUpper_sqft(cleanValues.upper_sqft);
    setMain_sqft(cleanValues.main_sqft);
    setFininshed_basement_sqft(cleanValues.fininshed_basement_sqft);
    setUnfininshed_basement_sqft(cleanValues.unfininshed_basement_sqft);
    setList_price(cleanValues.list_price);
    setSale_price(cleanValues.sale_price);
    setErrors({});
  };
  const [propertyRecord, setPropertyRecord] = React.useState(property);
  React.useEffect(() => {
    const queryData = async () => {
      const record = pkProp
        ? await DataStore.query(Property, pkProp)
        : property;
      setPropertyRecord(record);
    };
    queryData();
  }, [pkProp, property]);
  React.useEffect(resetStateValues, [propertyRecord]);
  const validations = {
    pk: [{ type: "Required" }],
    sk: [{ type: "Required" }],
    num_beds: [],
    num_bath: [],
    total_sqft: [],
    above_grade_sqft: [],
    upper_sqft: [],
    main_sqft: [],
    fininshed_basement_sqft: [],
    unfininshed_basement_sqft: [],
    list_price: [],
    sale_price: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          pk,
          sk,
          num_beds,
          num_bath,
          total_sqft,
          above_grade_sqft,
          upper_sqft,
          main_sqft,
          fininshed_basement_sqft,
          unfininshed_basement_sqft,
          list_price,
          sale_price,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Property.copyOf(propertyRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PropertyUpdateForm")}
      {...rest}
    >
      <TextField
        label="Pk"
        isRequired={true}
        isReadOnly={true}
        value={pk}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pk: value,
              sk,
              num_beds,
              num_bath,
              total_sqft,
              above_grade_sqft,
              upper_sqft,
              main_sqft,
              fininshed_basement_sqft,
              unfininshed_basement_sqft,
              list_price,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.pk ?? value;
          }
          if (errors.pk?.hasError) {
            runValidationTasks("pk", value);
          }
          setPk(value);
        }}
        onBlur={() => runValidationTasks("pk", pk)}
        errorMessage={errors.pk?.errorMessage}
        hasError={errors.pk?.hasError}
        {...getOverrideProps(overrides, "pk")}
      ></TextField>
      <TextField
        label="Sk"
        isRequired={true}
        isReadOnly={true}
        value={sk}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pk,
              sk: value,
              num_beds,
              num_bath,
              total_sqft,
              above_grade_sqft,
              upper_sqft,
              main_sqft,
              fininshed_basement_sqft,
              unfininshed_basement_sqft,
              list_price,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.sk ?? value;
          }
          if (errors.sk?.hasError) {
            runValidationTasks("sk", value);
          }
          setSk(value);
        }}
        onBlur={() => runValidationTasks("sk", sk)}
        errorMessage={errors.sk?.errorMessage}
        hasError={errors.sk?.hasError}
        {...getOverrideProps(overrides, "sk")}
      ></TextField>
      <TextField
        label="Num beds"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={num_beds}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              pk,
              sk,
              num_beds: value,
              num_bath,
              total_sqft,
              above_grade_sqft,
              upper_sqft,
              main_sqft,
              fininshed_basement_sqft,
              unfininshed_basement_sqft,
              list_price,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.num_beds ?? value;
          }
          if (errors.num_beds?.hasError) {
            runValidationTasks("num_beds", value);
          }
          setNum_beds(value);
        }}
        onBlur={() => runValidationTasks("num_beds", num_beds)}
        errorMessage={errors.num_beds?.errorMessage}
        hasError={errors.num_beds?.hasError}
        {...getOverrideProps(overrides, "num_beds")}
      ></TextField>
      <TextField
        label="Num bath"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={num_bath}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              pk,
              sk,
              num_beds,
              num_bath: value,
              total_sqft,
              above_grade_sqft,
              upper_sqft,
              main_sqft,
              fininshed_basement_sqft,
              unfininshed_basement_sqft,
              list_price,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.num_bath ?? value;
          }
          if (errors.num_bath?.hasError) {
            runValidationTasks("num_bath", value);
          }
          setNum_bath(value);
        }}
        onBlur={() => runValidationTasks("num_bath", num_bath)}
        errorMessage={errors.num_bath?.errorMessage}
        hasError={errors.num_bath?.hasError}
        {...getOverrideProps(overrides, "num_bath")}
      ></TextField>
      <TextField
        label="Total sqft"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={total_sqft}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              pk,
              sk,
              num_beds,
              num_bath,
              total_sqft: value,
              above_grade_sqft,
              upper_sqft,
              main_sqft,
              fininshed_basement_sqft,
              unfininshed_basement_sqft,
              list_price,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.total_sqft ?? value;
          }
          if (errors.total_sqft?.hasError) {
            runValidationTasks("total_sqft", value);
          }
          setTotal_sqft(value);
        }}
        onBlur={() => runValidationTasks("total_sqft", total_sqft)}
        errorMessage={errors.total_sqft?.errorMessage}
        hasError={errors.total_sqft?.hasError}
        {...getOverrideProps(overrides, "total_sqft")}
      ></TextField>
      <TextField
        label="Above grade sqft"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={above_grade_sqft}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              pk,
              sk,
              num_beds,
              num_bath,
              total_sqft,
              above_grade_sqft: value,
              upper_sqft,
              main_sqft,
              fininshed_basement_sqft,
              unfininshed_basement_sqft,
              list_price,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.above_grade_sqft ?? value;
          }
          if (errors.above_grade_sqft?.hasError) {
            runValidationTasks("above_grade_sqft", value);
          }
          setAbove_grade_sqft(value);
        }}
        onBlur={() => runValidationTasks("above_grade_sqft", above_grade_sqft)}
        errorMessage={errors.above_grade_sqft?.errorMessage}
        hasError={errors.above_grade_sqft?.hasError}
        {...getOverrideProps(overrides, "above_grade_sqft")}
      ></TextField>
      <TextField
        label="Upper sqft"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={upper_sqft}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              pk,
              sk,
              num_beds,
              num_bath,
              total_sqft,
              above_grade_sqft,
              upper_sqft: value,
              main_sqft,
              fininshed_basement_sqft,
              unfininshed_basement_sqft,
              list_price,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.upper_sqft ?? value;
          }
          if (errors.upper_sqft?.hasError) {
            runValidationTasks("upper_sqft", value);
          }
          setUpper_sqft(value);
        }}
        onBlur={() => runValidationTasks("upper_sqft", upper_sqft)}
        errorMessage={errors.upper_sqft?.errorMessage}
        hasError={errors.upper_sqft?.hasError}
        {...getOverrideProps(overrides, "upper_sqft")}
      ></TextField>
      <TextField
        label="Main sqft"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={main_sqft}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              pk,
              sk,
              num_beds,
              num_bath,
              total_sqft,
              above_grade_sqft,
              upper_sqft,
              main_sqft: value,
              fininshed_basement_sqft,
              unfininshed_basement_sqft,
              list_price,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.main_sqft ?? value;
          }
          if (errors.main_sqft?.hasError) {
            runValidationTasks("main_sqft", value);
          }
          setMain_sqft(value);
        }}
        onBlur={() => runValidationTasks("main_sqft", main_sqft)}
        errorMessage={errors.main_sqft?.errorMessage}
        hasError={errors.main_sqft?.hasError}
        {...getOverrideProps(overrides, "main_sqft")}
      ></TextField>
      <TextField
        label="Fininshed basement sqft"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={fininshed_basement_sqft}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              pk,
              sk,
              num_beds,
              num_bath,
              total_sqft,
              above_grade_sqft,
              upper_sqft,
              main_sqft,
              fininshed_basement_sqft: value,
              unfininshed_basement_sqft,
              list_price,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.fininshed_basement_sqft ?? value;
          }
          if (errors.fininshed_basement_sqft?.hasError) {
            runValidationTasks("fininshed_basement_sqft", value);
          }
          setFininshed_basement_sqft(value);
        }}
        onBlur={() =>
          runValidationTasks("fininshed_basement_sqft", fininshed_basement_sqft)
        }
        errorMessage={errors.fininshed_basement_sqft?.errorMessage}
        hasError={errors.fininshed_basement_sqft?.hasError}
        {...getOverrideProps(overrides, "fininshed_basement_sqft")}
      ></TextField>
      <TextField
        label="Unfininshed basement sqft"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={unfininshed_basement_sqft}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              pk,
              sk,
              num_beds,
              num_bath,
              total_sqft,
              above_grade_sqft,
              upper_sqft,
              main_sqft,
              fininshed_basement_sqft,
              unfininshed_basement_sqft: value,
              list_price,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.unfininshed_basement_sqft ?? value;
          }
          if (errors.unfininshed_basement_sqft?.hasError) {
            runValidationTasks("unfininshed_basement_sqft", value);
          }
          setUnfininshed_basement_sqft(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "unfininshed_basement_sqft",
            unfininshed_basement_sqft
          )
        }
        errorMessage={errors.unfininshed_basement_sqft?.errorMessage}
        hasError={errors.unfininshed_basement_sqft?.hasError}
        {...getOverrideProps(overrides, "unfininshed_basement_sqft")}
      ></TextField>
      <TextField
        label="List price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={list_price}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              pk,
              sk,
              num_beds,
              num_bath,
              total_sqft,
              above_grade_sqft,
              upper_sqft,
              main_sqft,
              fininshed_basement_sqft,
              unfininshed_basement_sqft,
              list_price: value,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.list_price ?? value;
          }
          if (errors.list_price?.hasError) {
            runValidationTasks("list_price", value);
          }
          setList_price(value);
        }}
        onBlur={() => runValidationTasks("list_price", list_price)}
        errorMessage={errors.list_price?.errorMessage}
        hasError={errors.list_price?.hasError}
        {...getOverrideProps(overrides, "list_price")}
      ></TextField>
      <TextField
        label="Sale price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sale_price}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              pk,
              sk,
              num_beds,
              num_bath,
              total_sqft,
              above_grade_sqft,
              upper_sqft,
              main_sqft,
              fininshed_basement_sqft,
              unfininshed_basement_sqft,
              list_price,
              sale_price: value,
            };
            const result = onChange(modelFields);
            value = result?.sale_price ?? value;
          }
          if (errors.sale_price?.hasError) {
            runValidationTasks("sale_price", value);
          }
          setSale_price(value);
        }}
        onBlur={() => runValidationTasks("sale_price", sale_price)}
        errorMessage={errors.sale_price?.errorMessage}
        hasError={errors.sale_price?.hasError}
        {...getOverrideProps(overrides, "sale_price")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(pkProp || property)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(pkProp || property) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
