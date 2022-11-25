export const Api = {
  // baseUrl: "http://localhost:3000/",
  baseUrl: "https://ocean-jornada-fullstack-novembro-22-cfwy.onrender.com/",

  // Endpoints de itens
  itens: {
    endpoint: function () {
      return Api.baseUrl + "itens";
    },
    readAll: function () {
      return this.endpoint() + "/";
    },
    create: function () {
      return this.endpoint() + "/";
    },
    delete: function (id) {
      return this.endpoint() + "/" + id;
    },
  },

  // Montar as requisições
  // GET
  buildApiGetRequest: function (url) {
    return fetch(url, {
      method: "GET",
    });
  },

  // POST
  buildApiPostRequest: function (url, body) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-type": "application/json",
      }),
    });
  },

  // DELETE
  buildApiDeleteRequest: function (url) {
    return fetch(url, {
      method: "DELETE",
    });
  },
};
