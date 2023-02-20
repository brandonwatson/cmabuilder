/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CMACreateFormInputValues = {
    pk?: string;
    sk?: string;
    cma_label?: string;
    client_name?: string;
};
export declare type CMACreateFormValidationValues = {
    pk?: ValidationFunction<string>;
    sk?: ValidationFunction<string>;
    cma_label?: ValidationFunction<string>;
    client_name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CMACreateFormOverridesProps = {
    CMACreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pk?: PrimitiveOverrideProps<TextFieldProps>;
    sk?: PrimitiveOverrideProps<TextFieldProps>;
    cma_label?: PrimitiveOverrideProps<TextFieldProps>;
    client_name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CMACreateFormProps = React.PropsWithChildren<{
    overrides?: CMACreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CMACreateFormInputValues) => CMACreateFormInputValues;
    onSuccess?: (fields: CMACreateFormInputValues) => void;
    onError?: (fields: CMACreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CMACreateFormInputValues) => CMACreateFormInputValues;
    onValidate?: CMACreateFormValidationValues;
} & React.CSSProperties>;
export default function CMACreateForm(props: CMACreateFormProps): React.ReactElement;
