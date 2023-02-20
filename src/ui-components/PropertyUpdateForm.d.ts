/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Property } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PropertyUpdateFormInputValues = {
    pk?: string;
    sk?: string;
    num_beds?: number;
    num_bath?: number;
    total_sqft?: number;
    above_grade_sqft?: number;
    upper_sqft?: number;
    main_sqft?: number;
    fininshed_basement_sqft?: number;
    unfininshed_basement_sqft?: number;
    list_price?: number;
    sale_price?: number;
};
export declare type PropertyUpdateFormValidationValues = {
    pk?: ValidationFunction<string>;
    sk?: ValidationFunction<string>;
    num_beds?: ValidationFunction<number>;
    num_bath?: ValidationFunction<number>;
    total_sqft?: ValidationFunction<number>;
    above_grade_sqft?: ValidationFunction<number>;
    upper_sqft?: ValidationFunction<number>;
    main_sqft?: ValidationFunction<number>;
    fininshed_basement_sqft?: ValidationFunction<number>;
    unfininshed_basement_sqft?: ValidationFunction<number>;
    list_price?: ValidationFunction<number>;
    sale_price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PropertyUpdateFormOverridesProps = {
    PropertyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pk?: PrimitiveOverrideProps<TextFieldProps>;
    sk?: PrimitiveOverrideProps<TextFieldProps>;
    num_beds?: PrimitiveOverrideProps<TextFieldProps>;
    num_bath?: PrimitiveOverrideProps<TextFieldProps>;
    total_sqft?: PrimitiveOverrideProps<TextFieldProps>;
    above_grade_sqft?: PrimitiveOverrideProps<TextFieldProps>;
    upper_sqft?: PrimitiveOverrideProps<TextFieldProps>;
    main_sqft?: PrimitiveOverrideProps<TextFieldProps>;
    fininshed_basement_sqft?: PrimitiveOverrideProps<TextFieldProps>;
    unfininshed_basement_sqft?: PrimitiveOverrideProps<TextFieldProps>;
    list_price?: PrimitiveOverrideProps<TextFieldProps>;
    sale_price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PropertyUpdateFormProps = React.PropsWithChildren<{
    overrides?: PropertyUpdateFormOverridesProps | undefined | null;
} & {
    pk?: string;
    property?: Property;
    onSubmit?: (fields: PropertyUpdateFormInputValues) => PropertyUpdateFormInputValues;
    onSuccess?: (fields: PropertyUpdateFormInputValues) => void;
    onError?: (fields: PropertyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PropertyUpdateFormInputValues) => PropertyUpdateFormInputValues;
    onValidate?: PropertyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PropertyUpdateForm(props: PropertyUpdateFormProps): React.ReactElement;
