function isPalindrome(x: number): boolean {
    let y: string = x.toString()
    let i = 0;
    let j = y.length - 1

    while(i <= ((y.length / 2))) {
        if(y[i] == y[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    
    return true;
};