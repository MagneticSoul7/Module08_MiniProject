// TODO: Have the ZooKeeper class inherit Employee properties
class ZooKeeper {
  constructor(
    name: string,
    id: number,
    title: string,
    salary: number,
    private specialty: string
  ) {
    this.specialty = specialty;
  }

  getSpecialty(): string {
    return this.specialty;
  }
}
export default ZooKeeper;
