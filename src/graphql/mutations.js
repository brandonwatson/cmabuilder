/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createCMA = /* GraphQL */ `
  mutation CreateCMA(
    $input: CreateCMAInput!
    $condition: ModelCMAConditionInput
  ) {
    createCMA(input: $input, condition: $condition) {
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
export const updateCMA = /* GraphQL */ `
  mutation UpdateCMA(
    $input: UpdateCMAInput!
    $condition: ModelCMAConditionInput
  ) {
    updateCMA(input: $input, condition: $condition) {
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
export const deleteCMA = /* GraphQL */ `
  mutation DeleteCMA(
    $input: DeleteCMAInput!
    $condition: ModelCMAConditionInput
  ) {
    deleteCMA(input: $input, condition: $condition) {
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
export const createPropertyCMAs = /* GraphQL */ `
  mutation CreatePropertyCMAs(
    $input: CreatePropertyCMAsInput!
    $condition: ModelPropertyCMAsConditionInput
  ) {
    createPropertyCMAs(input: $input, condition: $condition) {
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
export const updatePropertyCMAs = /* GraphQL */ `
  mutation UpdatePropertyCMAs(
    $input: UpdatePropertyCMAsInput!
    $condition: ModelPropertyCMAsConditionInput
  ) {
    updatePropertyCMAs(input: $input, condition: $condition) {
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
export const deletePropertyCMAs = /* GraphQL */ `
  mutation DeletePropertyCMAs(
    $input: DeletePropertyCMAsInput!
    $condition: ModelPropertyCMAsConditionInput
  ) {
    deletePropertyCMAs(input: $input, condition: $condition) {
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
