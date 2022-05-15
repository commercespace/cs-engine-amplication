import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { DeliverySlotController } from "../deliverySlot.controller";
import { DeliverySlotService } from "../deliverySlot.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  cutOffTime: 42,
  date: new Date(),
  day: "exampleDay",
  deliveryPrice: 42.42,
  endTime: "exampleEndTime",
  id: "exampleId",
  isActive: "true",
  isBooked: "true",
  orderQuota: 42,
  pickingPrice: 42.42,
  startTime: "exampleStartTime",
  tenantId: "exampleTenantId",
  updatedAt: new Date(),
  validFrom: new Date(),
  validTo: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  cutOffTime: 42,
  date: new Date(),
  day: "exampleDay",
  deliveryPrice: 42.42,
  endTime: "exampleEndTime",
  id: "exampleId",
  isActive: "true",
  isBooked: "true",
  orderQuota: 42,
  pickingPrice: 42.42,
  startTime: "exampleStartTime",
  tenantId: "exampleTenantId",
  updatedAt: new Date(),
  validFrom: new Date(),
  validTo: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    cutOffTime: 42,
    date: new Date(),
    day: "exampleDay",
    deliveryPrice: 42.42,
    endTime: "exampleEndTime",
    id: "exampleId",
    isActive: "true",
    isBooked: "true",
    orderQuota: 42,
    pickingPrice: 42.42,
    startTime: "exampleStartTime",
    tenantId: "exampleTenantId",
    updatedAt: new Date(),
    validFrom: new Date(),
    validTo: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  cutOffTime: 42,
  date: new Date(),
  day: "exampleDay",
  deliveryPrice: 42.42,
  endTime: "exampleEndTime",
  id: "exampleId",
  isActive: "true",
  isBooked: "true",
  orderQuota: 42,
  pickingPrice: 42.42,
  startTime: "exampleStartTime",
  tenantId: "exampleTenantId",
  updatedAt: new Date(),
  validFrom: new Date(),
  validTo: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("DeliverySlot", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DeliverySlotService,
          useValue: service,
        },
      ],
      controllers: [DeliverySlotController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /deliverySlots", async () => {
    await request(app.getHttpServer())
      .post("/deliverySlots")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        validFrom: CREATE_RESULT.validFrom.toISOString(),
        validTo: CREATE_RESULT.validTo.toISOString(),
      });
  });

  test("GET /deliverySlots", async () => {
    await request(app.getHttpServer())
      .get("/deliverySlots")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          validFrom: FIND_MANY_RESULT[0].validFrom.toISOString(),
          validTo: FIND_MANY_RESULT[0].validTo.toISOString(),
        },
      ]);
  });

  test("GET /deliverySlots/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliverySlots"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /deliverySlots/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliverySlots"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        validFrom: FIND_ONE_RESULT.validFrom.toISOString(),
        validTo: FIND_ONE_RESULT.validTo.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
