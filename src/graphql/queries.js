/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($pk: String!, $sk: String!) {
    getProperty(pk: $pk, sk: $sk) {
      pk
      sk
      num_bed
      num_bath
      total_sqft
      above_grade_sqft
      upper_sqft
      main_sqft
      fininshed_basement_sqft
      unfininshed_basement_sqft
      list_price
      sale_price
      cmas {
        items {
          id
          propertyPk
          propertysk
          cMAPk
          cMAsk
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        fininshed_basement_sqft
        unfininshed_basement_sqft
        list_price
        sale_price
        cmas {
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
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        fininshed_basement_sqft
        unfininshed_basement_sqft
        list_price
        sale_price
        cmas {
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
export const getCMA = /* GraphQL */ `
  query GetCMA($pk: String!, $sk: String!) {
    getCMA(pk: $pk, sk: $sk) {
      pk
      sk
      cma_label
      client_name
      property {
        pk
        sk
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        fininshed_basement_sqft
        unfininshed_basement_sqft
        list_price
        sale_price
        cmas {
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
      comparables {
        items {
          id
          propertyPk
          propertysk
          cMAPk
          cMAsk
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
        property {
          pk
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
        property {
          pk
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
export const getPropertyCMAs = /* GraphQL */ `
  query GetPropertyCMAs($id: ID!) {
    getPropertyCMAs(id: $id) {
      id
      propertyPk
      propertysk
      cMAPk
      cMAsk
      property {
        pk
        sk
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        fininshed_basement_sqft
        unfininshed_basement_sqft
        list_price
        sale_price
        cmas {
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
      cMA {
        pk
        sk
        cma_label
        client_name
        property {
          pk
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPropertyCMAs = /* GraphQL */ `
  query ListPropertyCMAs(
    $filter: ModelPropertyCMAsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertyCMAs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        propertyPk
        propertysk
        cMAPk
        cMAsk
        property {
          pk
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        cMA {
          pk
          sk
          cma_label
          client_name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
export const syncPropertyCMAs = /* GraphQL */ `
  query SyncPropertyCMAs(
    $filter: ModelPropertyCMAsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPropertyCMAs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        propertyPk
        propertysk
        cMAPk
        cMAsk
        property {
          pk
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        cMA {
          pk
          sk
          cma_label
          client_name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
export const propertiesByTotal_sqftAndSale_priceAndNum_bedAndNum_bath = /* GraphQL */ `
  query PropertiesByTotal_sqftAndSale_priceAndNum_bedAndNum_bath(
    $total_sqft: Int!
    $sale_priceNum_bedNum_bath: ModelPropertyBySqftBySalePriceByBedByBathCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    propertiesByTotal_sqftAndSale_priceAndNum_bedAndNum_bath(
      total_sqft: $total_sqft
      sale_priceNum_bedNum_bath: $sale_priceNum_bedNum_bath
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        pk
        sk
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        fininshed_basement_sqft
        unfininshed_basement_sqft
        list_price
        sale_price
        cmas {
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
export const propertiesBySale_priceAndTotal_sqftAndNum_bedAndNum_bath = /* GraphQL */ `
  query PropertiesBySale_priceAndTotal_sqftAndNum_bedAndNum_bath(
    $sale_price: Int!
    $total_sqftNum_bedNum_bath: ModelPropertyBySalePriceByTotalSqftByBedByBathCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    propertiesBySale_priceAndTotal_sqftAndNum_bedAndNum_bath(
      sale_price: $sale_price
      total_sqftNum_bedNum_bath: $total_sqftNum_bedNum_bath
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        pk
        sk
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        fininshed_basement_sqft
        unfininshed_basement_sqft
        list_price
        sale_price
        cmas {
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
export const cMASByClient_nameAndSk = /* GraphQL */ `
  query CMASByClient_nameAndSk(
    $client_name: String!
    $sk: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCMAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cMASByClient_nameAndSk(
      client_name: $client_name
      sk: $sk
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        pk
        sk
        cma_label
        client_name
        property {
          pk
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
export const propertyCMAsByPropertyPkAndPropertysk = /* GraphQL */ `
  query PropertyCMAsByPropertyPkAndPropertysk(
    $propertyPk: String!
    $propertysk: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPropertyCMAsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    propertyCMAsByPropertyPkAndPropertysk(
      propertyPk: $propertyPk
      propertysk: $propertysk
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        propertyPk
        propertysk
        cMAPk
        cMAsk
        property {
          pk
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        cMA {
          pk
          sk
          cma_label
          client_name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
export const propertyCMAsByCMAPkAndCMAsk = /* GraphQL */ `
  query PropertyCMAsByCMAPkAndCMAsk(
    $cMAPk: String!
    $cMAsk: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPropertyCMAsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    propertyCMAsByCMAPkAndCMAsk(
      cMAPk: $cMAPk
      cMAsk: $cMAsk
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        propertyPk
        propertysk
        cMAPk
        cMAsk
        property {
          pk
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        cMA {
          pk
          sk
          cma_label
          client_name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
