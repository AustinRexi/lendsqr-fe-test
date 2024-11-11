import { userData } from "../data";

class LendSqrServer {
  private dbName;
  constructor(dbName: string) {
    this.dbName = dbName;
    // Initialize data in localStorage if it doesn't exist
    if (!localStorage.getItem(this.dbName)) {
      const users = userData;
      localStorage.setItem(this.dbName, JSON.stringify({ users }));
    }
  }

  // Simulate delay
  private async simulateNetworkDelay() {
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

  private getDbData(): string {
    return (localStorage.getItem(this.dbName) || "") as string;
  }

  public async getTableData(tableKey: string) {
    await this.simulateNetworkDelay();

    const tableData = JSON.parse(this.getDbData()) || {};
    return tableData[tableKey] || [];
  }
}

export const server = new LendSqrServer("lendSqrDB");
