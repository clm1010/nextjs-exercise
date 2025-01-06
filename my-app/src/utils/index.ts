/**
 *
 * @description 睡眠函数
 *
 */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))
