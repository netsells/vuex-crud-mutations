/* @flow */
export default function vuexCrudMutations(input: string) {
  return input ? `👉 ${input} 👈` : 'No args passed!';
}
