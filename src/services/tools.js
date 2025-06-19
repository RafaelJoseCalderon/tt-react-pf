class ApiError {
  constructor(response, data) {
    this.type = "ApiError";
    this.status = response.status;
    this.name = "ApiError";
    this.message = data?.error?.message || "Error Api";
    this.url = response.url;
  }
}

class SysError {
  constructor(error, url) {
    this.type = "SysError";
    this.status = "JIE";
    this.name = error.name;
    this.message = error?.message || "Error Sys";
    this.url = url;
  }
}

export const safeFetch = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      const error = new ApiError(response, data);
      return ({ data: null, error });
    }

    return ({ data: data, error: null });
  } catch (error) {
    const sysError = new SysError(error, url);
    return ({ data: null, error: sysError });
  }
};