module.exports = {
  UPLOAD_DIR: "uploads",
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
    CAFE_UPDATE: "Successfully updated the cafe",
    CAFE_DELETE: "Successfully deleted the cafe",
    EMPLOYEE_CREATE: "Successfully created new employee",
    CAFE_LIST: "Cafes list fetch success",
    EMPLOYEE_LIST: "Employees list fetch success",
    EMPLOYEE_DELETE: "Successfully deleted the employee",
    APP_ERROR: "Application Logical Error",
    INVALID_URL: "Invalid url ",
    PARAM_ERROR: "Parameter validation error",
    IMG_UPLOAD: "Image Upload Success",
  },

  VALIDATION: {
    REQUIRED: "required!",
    NAME: "name",
    ID: "id",
    DESCRIPTION: "description",
    EMAIL: "email",
    LOGO: "logo",
    PHONE: "phone",
    CAFE_ID: "cafeId",
    LOCATION: "location",
    NUMBER: "should be a number",
    ALPHA_NUMERIC: "should be alpha numeric",
    STRING: "should be string",
    INVAL_EMAIL: "inavlid email",
    DUPLICATE_ENTRY: "Duplicate entry",
    INVALID_CAFE: "Invalid Cafe",
    INVALID_EMPLOYEE: "Invalid Employee",
  },
  NUMBER: {
    ZERO: 0,
    ONE: 1,
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
