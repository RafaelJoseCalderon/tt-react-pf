const loginServices = (username, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        resolve({ data: `fake-token-${username}`, error: null });
      } else {
        resolve({ data: {}, error: "usuario no encontrado." });
      }
    }, 0);
  });
};

const logoutServices = (token) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (token === "fake-token-admin") {
        resolve({ data: {}, error: null });
      } else {
        resolve({ data: data, error: "usuario no encontrado." });
      }
    }, 0);
  });
};

export { loginServices, logoutServices };