let timeout = null; // 防抖函数定时器
/**
 * 防抖函数
 * @param func {Function} 需要防抖处理的函数
 * @param wait {number} 等待时间
 * @return {Function} 闭包
 */
export const debounce = (func, wait = 160) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    func();
  }, wait);
};
