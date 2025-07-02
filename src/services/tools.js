class ApiError extends Error {
  constructor(response, data) {
    super(data?.error?.message || "Error de API desconocido");

    this.type = "ApiError";
    this.status = response.status;
    this.name = "ApiError";
    this.url = response.url;
  }
}

class SysError extends Error {
  constructor(error, url) {
    super(error?.message || "Error del sistema desconocido");

    this.type = "SysError";
    this.status = "JIE";
    this.name = error.name || "SysError";
    this.url = url;
  }
}

export const controlledFetch = async (url, options) => {
  let response, data;

  try {
    response = await fetch(url, options);
    data = await response.json();
  } catch (error) {
    throw new SysError(error, url);
  }

  if (response.ok) {
    return data;
  } else {
    throw new ApiError(response, data);
  }
};