function mergeAlternately(word1: string, word2: string): string {
    let res : string = "";
    for(let i = 0,j = 0; i < word1.length || j < word2.length;i++,j++) {
        if (word1[i] && word2[j])
            res = res + word1[i] + word2[j]
        else if (word1[i])
            res = res + word1[i]
        else 
            res = res + word2[j]
    }
    return res;
};

console.log(mergeAlternately("abcd","pq"));