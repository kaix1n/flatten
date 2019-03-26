import flatten from '..';

describe('Test flatten()', () => {
    it('flatten()', () => {
        const data = {
            m: {
                a: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'],
                b: {
                    c: ['c1', 'c2'],
                    d: {
                        e: ['e1', 'd2'],
                        f: { g: ['g1'] },
                    },
                },
                h: { i: ['i1'] },
                k: 'k1',
            },
        };

        expect(flatten(data)).toEqual([
            'm.a.a1',
            'm.a.a2',
            'm.a.a3',
            'm.a.a4',
            'm.a.a5',
            'm.a.a6',
            'm.a.a7',
            'm.b.c.c1',
            'm.b.c.c2',
            'm.b.d.e.e1',
            'm.b.d.e.d2',
            'm.b.d.f.g.g1',
            'm.h.i.i1',
            'm.k',
        ]);
    });
});
