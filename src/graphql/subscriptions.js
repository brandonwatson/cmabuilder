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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onUpdateProperty(filter: $filter, owner: $owner) {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onDeleteProperty(filter: $filter, owner: $owner) {
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
export const onCreatePropertyCMAs = /* GraphQL */ `
  subscription OnCreatePropertyCMAs(
    $filter: ModelSubscriptionPropertyCMAsFilterInput
    $owner: String
  ) {
    onCreatePropertyCMAs(filter: $filter, owner: $owner) {
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
export const onUpdatePropertyCMAs = /* GraphQL */ `
  subscription OnUpdatePropertyCMAs(
    $filter: ModelSubscriptionPropertyCMAsFilterInput
    $owner: String
  ) {
    onUpdatePropertyCMAs(filter: $filter, owner: $owner) {
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
export const onDeletePropertyCMAs = /* GraphQL */ `
  subscription OnDeletePropertyCMAs(
    $filter: ModelSubscriptionPropertyCMAsFilterInput
    $owner: String
  ) {
    onDeletePropertyCMAs(filter: $filter, owner: $owner) {
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
