
// 素数判定: √num　までの数について一つずつ調べる
function isPrime(num: number): boolean {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//　約数列挙：　全ての約数を配列で取得　（1, numを含む）
function getAllDivisor(num: number): number[] {
    const nums = [];
    // numを含みたくない場合は i = 2から開始
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            nums.push(i)
            if (num / i !== i) {
                nums.push(num / i)
            }
        }
    }
    return nums;
}

// 素因数分解：　素因数分解の答えを配列で取得　（数が小さい順）
function getPrimeFactors(num: number): number[] {
    const ans = []
    if (num === 1) {
        ans.push(1)
        return ans
    }
    for (let i = 2; i * i <= num; i++) {
        while (num % i === 0) {
            ans.push(i)
            num = num / i
        }
    }
    if (num !== 1) {
        ans.push(num)
    }
    return ans
}

// 最大公約数：　ユークリッド互除法（A*Bの長方形から、短辺に合わせた長方形を取り除いていく） Gratest Common Divisor
function getGCD(numA: number, numB: number): number {
    const f = (m: number, n: number): number => n? f(n, m % n): m
    return f(numA, numB)
}

// *複数の数の最大公約数
function getGCDOfAll(N: number, nums: number[]): number {
    const f = (m: number, n: number): number => n? f(n, m % n): m
    let lastRes = 0;
    for (let i = 0; i < N; i++) {
        lastRes = f(nums[i], lastRes);
    }
    return lastRes
}

// 最小公倍数

// 組み合わせ：　n個のものからr個並べる(nPr)  TODO: 効率化できそう
function getPermutation(n: number, r: number) {
    let a = 1
    for (let i = 1; i <= n; i++) { a = a * i }
    let b = 1
    for (let i = 1; i <= n - r; i++) { b = b * i }
    return a / b
}

// 組み合わせ：　n個のものからr個選ぶ(nPr)  TODO: 効率化できそう
function getCombination(n: number, r: number) {
    let a = 1
    for (let i = 1; i <= n; i++) { a = a * i }
    let b = 1
    for (let i = 1; i <= n - r; i++) { b = b * i }
    let c = 1
    for (let i = 1; i <= r; i++) { b = b * i }
    return a / (b * c)
}

// n進数から10進数: baseに元のn(2~10)を渡す、10進数を返す parseInt(String(num), n)
function convToDecimal(num: bigint, n: number): bigint {
    const N = BigInt(n)
        let res = 0n
        const listNum = String(num).split('')
        for (let i = 1; i <= listNum.length; i++) {
            const d = listNum[listNum.length - i]
            res += BigInt(d) * (N ** BigInt(i - 1))
        }
    return res
}

// 10進数からn進数: n進数に変換したdecimalNumを返す decimalNum.toString(n)
function convFromDecimal(num: bigint, n: number): bigint {
    return BigInt(num.toString(n))
    // const N = BigInt(n)
    //     const res = []
    //     while (num >= N) {
    //         res.unshift(num % N)
    //         num = num / N
    //     }
    //     res.unshift(num)
    //     return BigInt(res.join(''))
}

