export interface IPerson {
  name: string,
  age: number,
  job?: string  // '?' --> 'job' n'est pas requis (on peut créer des types IPerson sans 'job')
}
