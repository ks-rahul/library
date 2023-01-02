const BaseCanonizerApiUrl = process.env.API_BASE_URL;
const BaseImagesURL = process.env.API_BASE_URL;
const BaseVideosURL = process.env.API_BASE_URL;

const NetworkConstants = {
  URL: {
    BaseImagesURL,
    BaseVideosURL,
    BaseAPI: BaseCanonizerApiUrl,
    Base: process.env.PUBLIC_BASE_URL,
    Timeout: process.env.TIMEOUT,
    Client: {
      BaseHost: process.env.CLIENT_BASE_HOST,
      BasePort: process.env.CLIENT_BASE_PORT,
    },
    // Authentication
    RegisterUser: `${BaseCanonizerApiUrl}/register`,
  },
  Method: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  },
  Header: {
    ContentType: "Content-Type",
    ApplicationJson: "application/json",
    Default: (token = "") => ({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    }),
    Authorization: (token = "") => ({
      "Content-Type": "application/json",
    }),
    Type: {
      Json: "json",
      File: "file",
      formData: "multipart/form-data",
    },
  },
  Default: {
    Error: "Opps, an error occurred!",
  },
  StatusCode: {
    Unauthorized: 401,
    Invalid: 401,
    NotFound: 404,
  },
};
export default NetworkConstants;
