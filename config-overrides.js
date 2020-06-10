/*
 * @Author: zhangsai
 * @Date: 2020-06-10 16:59:47
 * @Last Modified by: zhangsai
 * @Last Modified time: 2020-06-10 17:44:51
 * @Description: react-app-rewired 与 customize-cra 配合，用于 create-react-app 构建的项目中添加 Webpack 配置
 */
const {
  override,
  addDecoratorsLegacy,
  addWebpackAlias,
} = require("customize-cra")
  const path = require("path")
   
  module.exports = override(
    // 添加装饰器
    addDecoratorsLegacy(), 
    // 设置路径别名
    addWebpackAlias({ 
      '@': path.resolve(__dirname, 'src'),
    }),
  );