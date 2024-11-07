import { userData } from "../data";

class LendSqrServer {
  private dbName;
  constructor(dbName: string) {
    this.dbName = dbName;
    // Initialize data in localStorage if it doesn't exist
    if (!localStorage.getItem(this.dbName)) {
      const users = userData;
      console.log("dbName", this.dbName, users);
      localStorage.setItem(this.dbName, JSON.stringify({ users }));
    }
  }

  // Simulate delay
  private async simulateNetworkDelay() {
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

  private getDbData(): string {
    console.log("2");
    return (localStorage.getItem(this.dbName) || "") as string;
  }

  public async getTableData(tableKey: string) {
    console.log("1");
    await this.simulateNetworkDelay();
    const db = this.getDbData() || "{}";
    console.log(db, "db");
    const tableData = JSON.parse(this.getDbData()) || {};
    return tableData[tableKey] || [];
  }
}

export const server = new LendSqrServer("lendSqrDB");
