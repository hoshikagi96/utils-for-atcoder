"use strict";
/**
 * 素数判定: √num　までの数について一つずつ調べる
 *
 * @param num number
 * @returns boolean
 */
function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
/**
 * 約数列挙：　全ての約数を配列で取得　（1, numを含む）
 *
 * @param num number
 * @returns number[] 約数のリスト（ペアで格納しているため、未整列）
 */
function getAllDivisor(num) {
    const nums = [];
    // numを含みたくない場合は i = 2から開始
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            nums.push(i);
            if (num / i !== i) {
                nums.push(num / i);
            }
        }
    }
    return nums;
}
/**
 * 素因数分解
 *
 * @param num number
 * @returns number[] 素因数分解の答え（数が小さい順）
 */
function getPrimeFactors(num) {
    const ans = [];
    if (num === 1) {
        ans.push(1);
        return ans;
    }
    for (let i = 2; i * i <= num; i++) {
        while (num % i === 0) {
            ans.push(i);
            num = num / i;
        }
    }
    if (num !== 1) {
        ans.push(num);
    }
    return ans;
}
/**
 * 最大公約数：　ユークリッド互除法（A*Bの長方形から、短辺に合わせた長方形を取り除いていく） Gratest Common Divisor
 *
 * @param numA number 1つ目の数値
 * @param numB number 2つ目の数値
 * @returns number
 */
function getGCD(numA, numB) {
    const f = (m, n) => n ? f(n, m % n) : m;
    return f(numA, numB);
}
/**
 * 複数の数の最大公約数 TODO: 要テスト
 * @param N number 調べたい数値の数
 * @param nums number[] 数値を格納した配列(nums.length === N)
 * @returns number
 */
function getGCDOfAll(N, nums) {
    const f = (m, n) => n ? f(n, m % n) : m;
    let lastRes = 0;
    for (let i = 0; i < N; i++) {
        lastRes = f(nums[i], lastRes);
    }
    return lastRes;
}
// 最小公倍数
/**
 * 組み合わせ：　n個のものからr個並べる(nPr)  TODO: 効率化できそう
 *
 * @param n number 全体の要素数
 * @param r number 並べる要素数
 * @returns number 組み合わせの数
 */
function getPermutations(n, r) {
    let a = 1;
    for (let i = 1; i <= n; i++) {
        a = a * i;
    }
    let b = 1;
    for (let i = 1; i <= n - r; i++) {
        b = b * i;
    }
    return a / b;
}
/**
 * 組み合わせ：　n個のものからr個選ぶ(nCr)  TODO: 効率化できそう
 *
 * @param n number 全体の要素数
 * @param r number 選ぶ要素数
 * @returns number 組み合わせの数
 */
function getCombinations(n, r) {
    let a = 1;
    for (let i = 1; i <= n; i++) {
        a = a * i;
    }
    let b = 1;
    for (let i = 1; i <= n - r; i++) {
        b = b * i;
    }
    let c = 1;
    for (let i = 1; i <= r; i++) {
        b = b * i;
    }
    return a / (b * c);
}
/**
 * n進数から10進数 parseInt(String(num), n)が使えないBigIntで利用可能
 *
 * @param num bigInt 変換元の数値（n進数）
 * @param n number 変換元のbaseNumber 2〜9の数値
 * @returns bigint 10進数の数値
 */
function convToDecimal(num, n) {
    const N = BigInt(n);
    let res = 0n;
    const listNum = String(num).split('');
    for (let i = 1; i <= listNum.length; i++) {
        const d = listNum[listNum.length - i];
        res += BigInt(d) * (N ** BigInt(i - 1));
    }
    return res;
}
// 10進数からn進数: n進数に変換したdecimalNumを返す decimalNum.toString(n)
function convFromDecimal(num, n) {
    return BigInt(num.toString(n));
    // const N = BigInt(n)
    //     const res = []
    //     while (num >= N) {
    //         res.unshift(num % N)
    //         num = num / N
    //     }
    //     res.unshift(num)
    //     return BigInt(res.join(''))
}
