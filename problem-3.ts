{
    // Count Word Occurrences

    function countWordOccurrences(sentence: string, word: string): number {
        const words = sentence.toLowerCase().split(' ');
        return words.filter(w => w === word.toLowerCase()).length;
    }
     const result = countWordOccurrences("I love typeScript", "typeScript");
    // console.log(result);
    // 
}