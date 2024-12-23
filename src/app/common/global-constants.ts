export enum httpCodes {
  continue = 100,
  switchingProtocols = 101,
  processing = 102,
  earlyHints = 103,
  ok = 200,
  created = 201,
  accepted = 202,
  nonAuthoritativeInformation = 203,
  noContent = 204,
  resetContent = 205,
  partialContent = 206,
  multiStatus = 207,
  alreadyReported = 208,
  imUsed = 226,
  multipleChoices = 300,
  movedPermanently = 301,
  found = 302,
  seeOther = 303,
  notModified = 304,
  // useProxy = 304,
  // unused = 306,
  temporaryRedirect = 307,
  permanentRedirect = 308,
  badRequest = 400,
  unauthorized = 401,
  paymentRequired = 402,
  forbidden = 403,
  notFound = 404,
  methodNotAllowed = 405,
  notAcceptable = 406,
  proxyAuthenticationRequired = 407,
  requestTimeout = 408,
  conflict = 409,
  gone = 410,
  lengthRequired = 411,
  preconditionFailed = 412,
  payloadTooLarge = 413,
  uriTooLong = 414,
  unsupportedMediaType = 415,
  rangeNotSatisfiable = 416,
  expectationFailed = 417,
  imATeapot = 418,
  misdirectedRequest = 421,
  unprocessableContent = 422,
  locked = 423,
  failedDependency = 424,
  tooEarly = 425,
  upgradeRequired = 426,
  preconditionRequired = 428,
  tooManyRequests = 429,
  requestHeaderFieldsTooLarge = 431,
  unavailableForLegalReasons = 451,
  internalServerError = 500,
  notImplemented = 501,
  badGateway = 502,
  serviceUnavailable = 503,
  gatewayTimeout = 504,
  httpVersionNotSupported = 505,
  variantAlsoNegotiates = 506,
  insufficientStorage = 507,
  loopDetected = 508,
  notExtended = 510,
  networkAuthenticationRequired = 511,
}

export enum httpOutputContent {
  completed = 'Request Completed.',
  contactSupport = 'Something went wrong with your request. Please contact a technician to solve the problem.',
  created = 'Successfully Created!',
  incomplete = 'It seems like you were not able to fill in the required field/s. Please try again.',
  notFound = 'Resource not found. Please refresh or try a different link.',
  notSupported = 'The current version is not supported!',
  requestInvalid = 'Something went wrong with your request. Please try a different one.',
  requestTerminate = 'Something went wrong with your request, please terminate ASAP!',
  requestRetry = 'Something went wrong with your request. Please try again.',
  refresh = 'Something went wrong. Refresh the page and try again.',
  refreshOutdated = "You're currently using an outdated version. Please refresh to update.",
  reconnect = 'Internet Connection not found, please reconnect.',
  serverDown = 'The servers are currently down. It might take a while to complete, we apologize for the inconvenience.',
  slowDown = 'Please slow down with your request/s.',
  tooLarge = 'The data is too large!',
  unauthorized = 'Invalid username or password. Please try again.',
  unsupported = 'The format is not supported, please try a different one.',
  wait = 'Request sent. Please wait for a response.',
  wentWrong = 'Something went wrong. Please try again.',
}

export enum httpCodeResponses {
  continue = httpOutputContent.completed,
  // switchingProtocols = 101,
  processing = httpOutputContent.wait,
  earlyHints = httpOutputContent.wait,
  ok = httpOutputContent.completed,
  created = httpOutputContent.created,
  accepted = httpOutputContent.wait,
  // nonAuthoritativeInformation = 203,
  // noContent = 204,
  resetContent = httpOutputContent.requestRetry,
  // partialContent = 206,
  // multiStatus = 207,
  // alreadyReported = 208,
  // imUsed = 226,
  // multipleChoices = 300,
  movedPermanently = httpOutputContent.notFound,
  found = httpOutputContent.notFound,
  seeOther = httpOutputContent.notFound,
  notModified = httpOutputContent.refreshOutdated,
  // // useProxy = 304,
  // // unused = 306,
  // temporaryRedirect = 307,
  permanentRedirect = httpOutputContent.notFound,
  badRequest = httpOutputContent.wentWrong,
  unauthorized = httpOutputContent.unauthorized,
  // paymentRequired = 402,
  forbidden = httpOutputContent.notFound,
  notFound = httpOutputContent.notFound,
  methodNotAllowed = httpOutputContent.requestInvalid,
  notAcceptable = httpOutputContent.requestInvalid,
  // proxyAuthenticationRequired = 407,
  requestTimeout = httpOutputContent.notFound,
  conflict = httpOutputContent.refresh,
  gone = httpOutputContent.notFound,
  lengthRequired = httpOutputContent.requestRetry,
  preconditionFailed = httpOutputContent.requestInvalid,
  payloadTooLarge = httpOutputContent.requestRetry,
  uriTooLong = httpOutputContent.requestInvalid,
  unsupportedMediaType = httpOutputContent.unsupported,
  rangeNotSatisfiable = httpOutputContent.requestRetry,
  expectationFailed = httpOutputContent.requestInvalid,
  // imATeapot = 418,
  misdirectedRequest = httpOutputContent.requestInvalid,
  unprocessableContent = httpOutputContent.requestInvalid,
  locked = httpOutputContent.notFound,
  failedDependency = httpOutputContent.requestRetry,
  tooEarly = httpOutputContent.slowDown,
  // upgradeRequired = 426,
  // preconditionRequired = 428,
  tooManyRequests = httpOutputContent.slowDown,
  requestHeaderFieldsTooLarge = httpOutputContent.tooLarge,
  unavailableForLegalReasons = httpOutputContent.notFound,
  internalServerError = httpOutputContent.contactSupport,
  notImplemented = httpOutputContent.requestInvalid,
  badGateway = httpOutputContent.requestRetry,
  serviceUnavailable = httpOutputContent.serverDown,
  gatewayTimeout = httpOutputContent.requestRetry,
  httpVersionNotSupported = httpOutputContent.notSupported,
  variantAlsoNegotiates = httpOutputContent.wentWrong,
  insufficientStorage = httpOutputContent.requestRetry,
  loopDetected = httpOutputContent.requestTerminate,
  notExtended = httpOutputContent.contactSupport,
  networkAuthenticationRequired = httpOutputContent.reconnect,
}

export class GlobalConstants {
  public static regexUrlWithHttpOrHttps: any =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
  public static regexUrlWithoutHttpOrHttps: any =
    /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;
  public static regexEmailValidation: any =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  public static regexPhoneValidation: any = /^(09|\+639)\d{9}$/;

  /**
   * patch fix for pop up
   */
  public static schoolPopUpFlag: boolean = true;

  public static companyPopUpFlag: boolean = true;
}

// Define a class to hold the extracted properties
export class PartnershipData {
  constructor(data: any) {
    this.companyAccepts = data.companyAccepts || false;
    this.companyId = data.companyId || '';
    this.declineMessage = data.declineMessage || null;
    this.declineReason = data.declineReason || null;
    this.declinee = data.declinee || null;
    this.documents = data.documents || [];
    this.id = data.id || '';
    this.isApproved = data.isApproved || false;
    this.isConfirmed = data.isConfirmed || false;
    this.isDeclined = data.isDeclined || false;
    this.isMoaReady = data.isMoaReady || false;
    this.isProvideInfo = data.isProvideInfo || false;
    this.requestor = data.requestor || '';
    this.schoolAccepts = data.schoolAccepts || false;
    this.schoolId = data.schoolId || '';
    this.school = data.school || [];
    this.company = data.company || [];
  }

  // Define default values for all properties
  companyAccepts: boolean;
  companyId: string;
  declineMessage: string | null;
  declineReason: string | null;
  declinee: string | null;
  documents: any[] = [];
  id: string;
  isApproved: boolean;
  isConfirmed: boolean;
  isDeclined: boolean;
  isMoaReady: boolean;
  isProvideInfo: boolean;
  requestor: string;
  schoolAccepts: boolean;
  schoolId: string;
  school: any[] = [];
  company: any[] = [];
}

export class DocumentData {
  constructor(data: any) {
    this.id = data.id;
    this.type = data.type;
    this.name = data.name;
    this.location = data.location;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
  id: string;
  type: string;
  name: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export class PopData {
  constructor(data: any) {
    this.type = data.type;
    this.context = data.context;
  }
  type: string;
  context: any;
}
