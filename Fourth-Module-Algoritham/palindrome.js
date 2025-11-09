const checkPalindrome = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log(normalized)
    const reversed = normalized.split('').reverse().join('')
    console.log(reversed)
}

checkPalindrome("??bdkdkDkdidFkkdff : kdkd")