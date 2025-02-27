
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  warnEnvConflicts,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal
} = require('./runtime')

const path = require('path')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.21.1
 * Query Engine version: e421996c87d5f3c8f7eeadd502d4ad402c89464d
 */
Prisma.prismaVersion = {
  client: "2.21.1",
  engine: "e421996c87d5f3c8f7eeadd502d4ad402c89464d"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


const dirnamePolyfill = path.join(process.cwd(), "generated/prisma-client")
const dirname = __dirname.length === 1 ? dirnamePolyfill : __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  Category: 'Category'
});


/**
 * DMMF
 */
const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Category\",\"isEmbedded\":false,\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":true,\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"isGenerated\":false,\"idFields\":[],\"uniqueFields\":[],\"uniqueIndexes\":[]}]},\"schema\":{\"inputObjectTypes\":{\"prisma\":[{\"name\":\"CategoryWhereInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"AND\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"CategoryWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"OR\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"NOT\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"CategoryWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"StringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"StringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"CategoryOrderByInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":0},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]}]},{\"name\":\"CategoryWhereUniqueInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"CategoryScalarWhereWithAggregatesInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"AND\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryScalarWhereWithAggregatesInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"CategoryScalarWhereWithAggregatesInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"OR\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryScalarWhereWithAggregatesInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"NOT\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryScalarWhereWithAggregatesInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"CategoryScalarWhereWithAggregatesInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"StringWithAggregatesFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"StringWithAggregatesFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"CategoryCreateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"CategoryUncheckedCreateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"CategoryUpdateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"CategoryUncheckedUpdateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"CategoryUpdateManyMutationInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"CategoryUncheckedUpdateManyInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"StringFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"StringWithAggregatesFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringWithAggregatesFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"count\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"NestedIntFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"min\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"max\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"StringFieldUpdateOperationsInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"set\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"NestedStringFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"NestedStringWithAggregatesFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringWithAggregatesFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"count\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"NestedIntFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"min\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"max\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"NestedIntFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedIntFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]}]},\"outputObjectTypes\":{\"prisma\":[{\"name\":\"Query\",\"fields\":[{\"name\":\"findFirstCategory\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"CategoryOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"distinct\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryScalarFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":true}]}],\"isNullable\":true,\"outputType\":{\"type\":\"Category\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"findManyCategory\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"CategoryOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"distinct\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryScalarFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":true}]}],\"isNullable\":false,\"outputType\":{\"type\":\"Category\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":true}},{\"name\":\"aggregateCategory\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"CategoryOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"AggregateCategory\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"groupByCategory\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"CategoryOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"by\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryScalarFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":true},{\"type\":\"CategoryScalarFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]},{\"name\":\"having\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryScalarWhereWithAggregatesInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"CategoryGroupByOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":true}},{\"name\":\"findUniqueCategory\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":true,\"outputType\":{\"type\":\"Category\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}}]},{\"name\":\"Mutation\",\"fields\":[{\"name\":\"createOneCategory\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryCreateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"CategoryUncheckedCreateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"Category\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"upsertOneCategory\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"create\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryCreateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"CategoryUncheckedCreateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"update\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryUpdateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"CategoryUncheckedUpdateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"Category\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"deleteOneCategory\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":true,\"outputType\":{\"type\":\"Category\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"updateOneCategory\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryUpdateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"CategoryUncheckedUpdateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":true,\"outputType\":{\"type\":\"Category\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"updateManyCategory\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryUpdateManyMutationInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"CategoryUncheckedUpdateManyInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"AffectedRowsOutput\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"deleteManyCategory\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"CategoryWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"AffectedRowsOutput\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"executeRaw\",\"args\":[{\"name\":\"query\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"parameters\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"queryRaw\",\"args\":[{\"name\":\"query\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"parameters\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}]}],\"isNullable\":false,\"outputType\":{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"AggregateCategory\",\"fields\":[{\"name\":\"count\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"CategoryCountAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"min\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"CategoryMinAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"max\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"CategoryMaxAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}}]},{\"name\":\"CategoryGroupByOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"name\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"count\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"CategoryCountAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"min\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"CategoryMinAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"max\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"CategoryMaxAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}}]},{\"name\":\"AffectedRowsOutput\",\"fields\":[{\"name\":\"count\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"CategoryCountAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"name\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"_all\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"CategoryMinAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"name\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"CategoryMaxAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"name\",\"args\":[],\"isNullable\":true,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}}]}],\"model\":[{\"name\":\"Category\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"name\",\"args\":[],\"isNullable\":false,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}}]}]},\"enumTypes\":{\"prisma\":[{\"name\":\"CategoryScalarFieldEnum\",\"values\":[\"id\",\"name\"]},{\"name\":\"SortOrder\",\"values\":[\"asc\",\"desc\"]}]}},\"mappings\":{\"modelOperations\":[{\"model\":\"Category\",\"plural\":\"categories\",\"findUnique\":\"findUniqueCategory\",\"findFirst\":\"findFirstCategory\",\"findMany\":\"findManyCategory\",\"create\":\"createOneCategory\",\"delete\":\"deleteOneCategory\",\"update\":\"updateOneCategory\",\"deleteMany\":\"deleteManyCategory\",\"updateMany\":\"updateManyCategory\",\"upsert\":\"upsertOneCategory\",\"aggregate\":\"aggregateCategory\",\"groupBy\":\"groupByCategory\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */

const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/beeman/sandbox/nx-multi-prisma/libs/prisma2/generated/prisma-client",
      "fromEnvVar": null
    },
    "binaryTargets": [
      "native"
    ],
    "previewFeatures": [],
    "config": {},
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "2.21.1",
  "engineVersion": "e421996c87d5f3c8f7eeadd502d4ad402c89464d",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite"
}
config.document = dmmf
config.dirname = dirname

/**
 * Only for env conflict warning
 * loading of env variable occurs in getPrismaClient
 */
const envPaths = {
  rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
}
warnEnvConflicts(envPaths)

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

/**
 * Build tool annotations
 * In order to make `ncc` and `@vercel/nft` happy.
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'query-engine-darwin');
path.join(process.cwd(), './generated/prisma-client/query-engine-darwin');

/**
 * Annotation for `@vercel/nft`
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), './generated/prisma-client/schema.prisma');
