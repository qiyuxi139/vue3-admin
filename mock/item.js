import { getCommonList } from "./utils/list";
export default [
  {
    url: "/api/item/lib/list",
    method: "get",
    response: (req) => {
      const allLength = 48;
      const { name, page, limit } = req.query;
      return getCommonList({
        page,
        limit,
        total: allLength,
        mOps: {
          id: "@id",
          img: "@image('200x200', '@hex', '@hex', 'png', '@ctitle')",
          name: name || "@cname",
          "category|1": ["鞋服", "腕表", "箱包", "配饰"],
          "brand|1": ["Kenzo/高田贤三", "Rolex/劳力士", "LV/路易威登"],
          "long|10-20": 0,
          "width|10-20": 0,
          "height|10-20": 0,
          "price|50-200.2-2": 0,
          createdAt: "@now(T)"
        }
      });
    }
  }
];
