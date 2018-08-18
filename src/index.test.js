import vuexCrudMutations from './index';

describe('index.js', () => {
  it('should say something', () => {
    expect(vuexCrudMutations('🐰')).toEqual('👉 🐰 👈');
    expect(vuexCrudMutations()).toEqual('No args passed!');
  });
});
