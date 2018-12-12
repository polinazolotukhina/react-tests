export function getLetterMatchCount(guessWord, SecretWord) {
    const secretLetterSet = new Set(SecretWord.split(''));
    const guessLetterSet = new Set(guessWord.split(''));
    return [...secretLetterSet].filter(letter => guessLetterSet.has(letter)).length
};
