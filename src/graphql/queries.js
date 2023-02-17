/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($pk: String!, $sk: String!) {
    getProperty(pk: $pk, sk: $sk) {
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
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $pk: String
    $sk: ModelStringKeyConditionInput
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProperties(
      pk: $pk
      sk: $sk
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const syncProperties = /* GraphQL */ `
  query SyncProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getCMA = /* GraphQL */ `
  query GetCMA($pk: String!, $sk: String!) {
    getCMA(pk: $pk, sk: $sk) {
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
export const listCMAS = /* GraphQL */ `
  query ListCMAS(
    $pk: String
    $sk: ModelStringKeyConditionInput
    $filter: ModelCMAFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCMAS(
      pk: $pk
      sk: $sk
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        pk
        sk
        cma_label
        client_name
        properties {
          nextToken
          startedAt
        }
        comparables {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCMAS = /* GraphQL */ `
  query SyncCMAS(
    $filter: ModelCMAFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCMAS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        pk
        sk
        cma_label
        client_name
        properties {
          nextToken
          startedAt
        }
        comparables {
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
      nextToken
      startedAt
    }
  }
`;
