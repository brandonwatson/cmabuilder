import { ModelInit, MutableModel, __modelMeta__, CompositeIdentifier, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerProperty = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Property, ['pk', 'sk']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly pk: string;
  readonly sk: string;
  readonly num_bed?: number | null;
  readonly num_bath?: number | null;
  readonly total_sqft?: number | null;
  readonly above_grade_sqft?: number | null;
  readonly upper_sqft?: number | null;
  readonly main_sqft?: number | null;
  readonly fininshed_basement_sqft?: number | null;
  readonly unfininshed_basement_sqft?: number | null;
  readonly list_price?: number | null;
  readonly sale_price?: number | null;
  readonly cmas?: (PropertyCMAs | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProperty = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Property, ['pk', 'sk']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly pk: string;
  readonly sk: string;
  readonly num_bed?: number | null;
  readonly num_bath?: number | null;
  readonly total_sqft?: number | null;
  readonly above_grade_sqft?: number | null;
  readonly upper_sqft?: number | null;
  readonly main_sqft?: number | null;
  readonly fininshed_basement_sqft?: number | null;
  readonly unfininshed_basement_sqft?: number | null;
  readonly list_price?: number | null;
  readonly sale_price?: number | null;
  readonly cmas: AsyncCollection<PropertyCMAs>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
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
  readonly comparables?: (PropertyCMAs | null)[] | null;
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
  readonly comparables: AsyncCollection<PropertyCMAs>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CMA = LazyLoading extends LazyLoadingDisabled ? EagerCMA : LazyCMA

export declare const CMA: (new (init: ModelInit<CMA>) => CMA) & {
  copyOf(source: CMA, mutator: (draft: MutableModel<CMA>) => MutableModel<CMA> | void): CMA;
}

type EagerPropertyCMAs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PropertyCMAs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly propertyPk?: string | null;
  readonly propertysk?: string | null;
  readonly cMAPk?: string | null;
  readonly cMAsk?: string | null;
  readonly property: Property;
  readonly cma: CMA;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPropertyCMAs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PropertyCMAs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly propertyPk?: string | null;
  readonly propertysk?: string | null;
  readonly cMAPk?: string | null;
  readonly cMAsk?: string | null;
  readonly property: AsyncItem<Property>;
  readonly cma: AsyncItem<CMA>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PropertyCMAs = LazyLoading extends LazyLoadingDisabled ? EagerPropertyCMAs : LazyPropertyCMAs

export declare const PropertyCMAs: (new (init: ModelInit<PropertyCMAs>) => PropertyCMAs) & {
  copyOf(source: PropertyCMAs, mutator: (draft: MutableModel<PropertyCMAs>) => MutableModel<PropertyCMAs> | void): PropertyCMAs;
}