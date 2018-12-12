import { getLetterMatchCount } from './';

describe('LetterMatchCount',()=>{
    const secretWords = 'party'
    test('returns correct counts when there is no matching letter', ()=>{
        const lettersMatchCount = getLetterMatchCount('bones', secretWords);
        expect(lettersMatchCount).toBe(0)
    });
    test('returns correct counts when there are  3 matching letters', ()=>{
        const lettersMatchCount = getLetterMatchCount('train', secretWords);
        expect(lettersMatchCount).toBe(3)
    });
    test('returns correct counts when there are  dublicate letters', ()=>{
        const lettersMatchCount = getLetterMatchCount('parka', secretWords);
        expect(lettersMatchCount).toBe(3)
    });
})
