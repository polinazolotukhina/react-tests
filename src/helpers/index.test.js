import { getLetterMatchCount } from './';

describe('letterMatchCount',()=>{
    const secretWords = 'party'
    test('returns correct counts when there is no matching letter', ()=>{
        const letterMatchCount = getLetterMatchCount('bones', secretWords);
        expect(letterMatchCount).toBe(0)
    });
    test('returns correct counts when there are  3 matching letters', ()=>{
        const letterMatchCount = getLetterMatchCount('train', secretWords);
        expect(letterMatchCount).toBe(3)
    });
    test('returns correct counts when there are  dublicate letters', ()=>{
        const letterMatchCount = getLetterMatchCount('parka', secretWords);
        expect(letterMatchCount).toBe(3)
    });
})
