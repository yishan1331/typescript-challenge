/**
 * 判斷輸入的數字是否為正數
 * @param number - 要判斷的數字
 * 
 */
export function isPositive(number: number): boolean {
    return typeof number === 'number' ? number > 0 : false
}