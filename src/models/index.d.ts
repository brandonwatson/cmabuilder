import { ModelInit, MutableModel, __modelMeta__, CompositeIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerProperty = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Property, ['pk', 'sk']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pk: string;
  readonly sk: string;
  readonly num_beds?: number | null;
  readonly num_bath?: number | null;
  readonly total_sqft?: number | null;
  readonly above_grade_sqft?: number | null;
  readonly upper_sqft?: number | null;
  readonly main_sqft?: number | null;
  readonly fininshed_basement_sqft?: number | null;
  readonly unfininshed_basement_sqft?: number | null;
  readonly list_price?: number | null;
  readonly sale_price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cMAPropertiesPk?: string | null;
  readonly cMAPropertiesSk?: string | null;
  readonly cMAComparablesPk?: string | null;
  readonly cMAComparablesSk?: string | null;
}

type LazyProperty = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Property, ['pk', 'sk']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pk: string;
  readonly sk: string;
  readonly num_beds?: number | null;
  readonly num_bath?: number | null;
  readonly total_sqft?: number | null;
  readonly above_grade_sqft?: number | null;
  readonly upper_sqft?: number | null;
  readonly main_sqft?: number | null;
  readonly fininshed_basement_sqft?: number | null;
  readonly unfininshed_basement_sqft?: number | null;
  readonly list_price?: number | null;
  readonly sale_price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cMAPropertiesPk?: string | null;
  readonly cMAPropertiesSk?: string | null;
  readonly cMAComparablesPk?: string | null;
  readonly cMAComparablesSk?: string | null;
}

export declare type Property = LazyLoading extends LazyLoadingDisabled ? EagerProperty : LazyProperty

export declare const Property: (new (init: ModelInit<Property>) => Property) & {
  copyOf(source: Property, mutator: (draft: MutableModel<Property>) => MutableModel<Property> | void): Property;
}

type EagerCMA = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<CMA, ['pk', 'sk']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly pk: string;
  readonly sk: string;
  readonly cma_label?: string | null;
  readonly client_name?: string | null;
  readonly properties?: (Property | null)[] | null;
  readonly comparables?: (Property | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCMA = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<CMA, ['pk', 'sk']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly pk: string;
  readonly sk: string;
  readonly cma_label?: string | null;
  readonly client_name?: string | null;
  readonly properties: AsyncCollection<Property>;
  readonly comparables: AsyncCollection<Property>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CMA = LazyLoading extends LazyLoadingDisabled ? EagerCMA : LazyCMA

export declare const CMA: (new (init: ModelInit<CMA>) => CMA) & {
  copyOf(source: CMA, mutator: (draft: MutableModel<CMA>) => MutableModel<CMA> | void): CMA;
}