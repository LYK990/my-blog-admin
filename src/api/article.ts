import request from "../utils/request";

/**
 * @router Get api/category/addArticleCategory
 * @desc 增加文章分类名称
 */
export const getLoginInfo = (data: any) => {
  return request({
    method: "POST",
    url: "/api/category/addArticleCategory",
    data,
  });
};

/**
 * @router Get api/category/getArticleCategory
 * @desc 获取文章分类名称
 */
export const getArticleCategory = () => {
  return request({
    method: "GET",
    url: "/api/category/getArticleCategory",
  });
};

/**
 * @router Get api/category/deleteArticleCategory
 * @desc 删除文章分类名称
 */
export const deleteArticleCategory = (data: any) => {
  return request({
    method: "POST",
    url: "/api/category/deleteArticleCategory",
    data,
  });
};
