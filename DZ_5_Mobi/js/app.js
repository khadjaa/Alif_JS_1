function calculateCommission(amount, total) {
    let sum = amount + total;
    const percent = 0.7;
    const commission = 0;
    const minCommission = 0.35;
    const minSum = 5000;

    if (sum > minSum) {
            sum = (sum - minSum) * percent / 100;
                if (sum < minCommission) {
                    return minCommission;
                }
                return sum;
    } 

    return commission;
}

const amount = 1000;
const total = 5000;

const result = calculateCommission(amount, total);
console.log(result);