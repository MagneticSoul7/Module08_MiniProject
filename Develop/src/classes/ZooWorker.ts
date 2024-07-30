// TODO: Have the ZooWorker class inherit Employee properties
class ZooWorker {
  constructor(
    name: string,
    id: number,
    title: string,
    salary: number,
    private cleanUniform: boolean
  ) {
    this.cleanUniform = cleanUniform;
  }

  getCleanUniform(): boolean {
    return this.cleanUniform;
  }
}
export default ZooWorker;
