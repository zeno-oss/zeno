import { createRouter } from "./helpers/createRouter";

import { UserFindUniqueSchema } from "../schemas/findUniqueUser.schema";
import { UserFindFirstSchema } from "../schemas/findFirstUser.schema";
import { UserFindManySchema } from "../schemas/findManyUser.schema";
import { UserCreateSchema } from "../schemas/createOneUser.schema";
import { UserDeleteOneSchema } from "../schemas/deleteOneUser.schema";
import { UserUpdateOneSchema } from "../schemas/updateOneUser.schema";
import { UserDeleteManySchema } from "../schemas/deleteManyUser.schema";
import { UserUpdateManySchema } from "../schemas/updateManyUser.schema";
import { UserUpsertSchema } from "../schemas/upsertOneUser.schema";
import { UserAggregateSchema } from "../schemas/aggregateUser.schema";
import { UserGroupBySchema } from "../schemas/groupByUser.schema";

export const usersRouter = createRouter()

  .query("findUniqueUser", {
    input: UserFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueUser = await ctx.prisma.user.findUnique({ where: input.where });
      return findUniqueUser;
    },
  })

  .query("findFirstUser", {
    input: UserFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstUser = await ctx.prisma.user.findFirst(input);
      return findFirstUser;
    },
  })

  .query("findManyUser", {
    input: UserFindManySchema,
    async resolve({ ctx, input }) {
      const findManyUser = await ctx.prisma.user.findMany(input);
      return findManyUser;
    },
  })

  .mutation("createOneUser", {
    input: UserCreateSchema,
    async resolve({ ctx, input }) {
      const createOneUser = await ctx.prisma.user.create({ data: input.data });
      return createOneUser;
    },
  })

  .mutation("deleteOneUser", {
    input: UserDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneUser = await ctx.prisma.user.delete({ where: input.where });
      return deleteOneUser;
    },
  })

  .mutation("updateOneUser", {
    input: UserUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneUser = await ctx.prisma.user.update({ where: input.where, data: input.data });
      return updateOneUser;
    },
  })

  .mutation("deleteManyUser", {
    input: UserDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyUser = await ctx.prisma.user.deleteMany(input);
      return deleteManyUser;
    },
  })

  .mutation("updateManyUser", {
    input: UserUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyUser = await ctx.prisma.user.updateMany(input);
      return updateManyUser;
    },
  })

  .mutation("upsertOneUser", {
    input: UserUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneUser = await ctx.prisma.user.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneUser;
    },
  })

  .query("aggregateUser", {
    input: UserAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateUser = await ctx.prisma.user.aggregate(input);
      return aggregateUser;
    },
  })

  .query("groupByUser", {
    input: UserGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByUser = await ctx.prisma.user.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByUser;
    },
  })

