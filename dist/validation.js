"use strict";
/**
 * カッコ列が正しいかどうかの判定
 * 1を左側のカッコとしているため、bit全探索の場合逆辞書順となる
 *
 * @param str 0と1から成る文字列（2進数）
 * @returns boolean
 */
function validateBrackets(str) {
    const list = str.split('');
    let count0 = 0; // count of ')'
    let count1 = 0; // count of '('
    for (let i = 0; i < list.length; i++) {
        if (list[i] === '0')
            count0++;
        if (list[i] === '1')
            count1++;
        if (count0 > count1) {
            return false;
        }
    }
    return count0 === count1;
}
