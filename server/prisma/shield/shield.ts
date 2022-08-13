import { shield, allow } from 'trpc-shield';

export const permissions = shield({
  query: {
    aggregateUser: allow,
    findFirstUser: allow,
    findManyUser: allow,
    findUniqueUser: allow,
    groupByUser: allow,
  },
  mutation: {
    createOneUser: allow,
    deleteManyUser: allow,
    deleteOneUser: allow,
    updateManyUser: allow,
    updateOneUser: allow,
    upsertOneUser: allow,
  },
});
