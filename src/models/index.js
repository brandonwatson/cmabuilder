// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Property, CMA, PropertyCMAs } = initSchema(schema);

export {
  Property,
  CMA,
  PropertyCMAs
};