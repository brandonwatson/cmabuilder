/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onCreateProperty(filter: $filter, owner: $owner) {
      pk
      sk
      num_beds
      num_bath
      total_sqft
      above_grade_sqft
      upper_sqft
      main_sqft
      fininshed_basement_sqft
      unfininshed_basement_sqft
      list_price
      sale_price
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cMAPropertiesPk
      cMAPropertiesSk
      cMAComparablesPk
      cMAComparablesSk
      owner
    }
  }
`;
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onUpdateProperty(filter: $filter, owner: $owner) {
      pk
      sk
      num_beds
      num_bath
      total_sqft
      above_grade_sqft
      upper_sqft
      main_sqft
      fininshed_basement_sqft
      unfininshed_basement_sqft
      list_price
      sale_price
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cMAPropertiesPk
      cMAPropertiesSk
      cMAComparablesPk
      cMAComparablesSk
      owner
    }
  }
`;
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onDeleteProperty(filter: $filter, owner: $owner) {
      pk
      sk
      num_beds
      num_bath
      total_sqft
      above_grade_sqft
      upper_sqft
      main_sqft
      fininshed_basement_sqft
      unfininshed_basement_sqft
      list_price
      sale_price
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cMAPropertiesPk
      cMAPropertiesSk
      cMAComparablesPk
      cMAComparablesSk
      owner
    }
  }
`;
export const onCreateCMA = /* GraphQL */ `
  subscription OnCreateCMA(
    $filter: ModelSubscriptionCMAFilterInput
    $owner: String
  ) {
    onCreateCMA(filter: $filter, owner: $owner) {
      pk
      sk
      cma_label
      client_name
      properties {
        items {
          pk
          sk
          num_beds
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cMAPropertiesPk
          cMAPropertiesSk
          cMAComparablesPk
          cMAComparablesSk
          owner
        }
        nextToken
        startedAt
      }
      comparables {
        items {
          pk
          sk
          num_beds
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cMAPropertiesPk
          cMAPropertiesSk
          cMAComparablesPk
          cMAComparablesSk
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateCMA = /* GraphQL */ `
  subscription OnUpdateCMA(
    $filter: ModelSubscriptionCMAFilterInput
    $owner: String
  ) {
    onUpdateCMA(filter: $filter, owner: $owner) {
      pk
      sk
      cma_label
      client_name
      properties {
        items {
          pk
          sk
          num_beds
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cMAPropertiesPk
          cMAPropertiesSk
          cMAComparablesPk
          cMAComparablesSk
          owner
        }
        nextToken
        startedAt
      }
      comparables {
        items {
          pk
          sk
          num_beds
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cMAPropertiesPk
          cMAPropertiesSk
          cMAComparablesPk
          cMAComparablesSk
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteCMA = /* GraphQL */ `
  subscription OnDeleteCMA(
    $filter: ModelSubscriptionCMAFilterInput
    $owner: String
  ) {
    onDeleteCMA(filter: $filter, owner: $owner) {
      pk
      sk
      cma_label
      client_name
      properties {
        items {
          pk
          sk
          num_beds
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cMAPropertiesPk
          cMAPropertiesSk
          cMAComparablesPk
          cMAComparablesSk
          owner
        }
        nextToken
        startedAt
      }
      comparables {
        items {
          pk
          sk
          num_beds
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cMAPropertiesPk
          cMAPropertiesSk
          cMAComparablesPk
          cMAComparablesSk
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
