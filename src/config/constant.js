module.exports = {
  RESPONSE: {
    OK: {
      CODE: 200,
      MSG: "Success",
    },
    CREATED: {
      CODE: 201,
      MSG: "Created",
    },
    ACCEPTED: {
      CODE: 202,
      MSG: "Accepted",
    },
    BAD_REQUEST: {
      CODE: 400,
      MSG: "Bad Request",
    },
    UNAUTHORIZED: {
      CODE: 401,
      MSG: "Unauthorized",
    },
    NOT_FOUND: {
      CODE: 404,
      MSG: "Not Found",
    },
    INTERNAL_ERROR: {
      CODE: 500,
      MSG: "Internal Server Error",
    },
    BAD_GATEWAY: {
      CODE: 502,
      MSG: "Bad Gateway",
    },
    SERVICE_UNAVAILABE: {
      CODE: 503,
      MSG: "Service Unavailable",
    },
  },

  MSG: {
    SUCCESS: "Success",
    FAIL: "Error",
    CAFE_CREATE: "Successfully created new cafe",
    EMPLOYEE_CREATE: "Successfully created new employee",
    CAFE_LIST: "Cafes list fetch success",
    EMPLOYEE_LIST: "Employees list fetch success",
    APP_ERROR: "Application Logical Error",
    INVALID_URL: "Invalid url ",
    PARAM_ERROR: "Parameter validation error",
  },

  VALIDATION: {
    REQUIRED: "required!",
    NAME: "name",
    DESCRIPTION: "description",
    EMAIL: "email",
    LOGO: "logo",
    PHONE: "phone",
    CAFE_ID: "cafeId",
    LOCATION: "location",
    NUMBER: "should be a number",
    STRING: "should be string",
    INVAL_EMAIL: "inavlid email",
    DUPLICATE_ENTRY: "Duplicate entry !",
  },

  STRING_TYPES: {
    CAFE: "Cafe Activities",
    EMPLOYEE: "Employee Activities",
  },
  END_URL: {
    SUBSCRIPTION: "/subscriber",
  },

  LOG_TYPE: {
    ERROR: "error",
    FATAL: "fatal",
    INFO: "info",
  },
  METHODS: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
  },
};
