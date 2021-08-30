export default [
  {
    url: "/api/user/roles",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {
          name: "傻逼"
        },
        message: "succss"
      };
    }
  }
];
