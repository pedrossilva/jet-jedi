export class Dashboard {
  getUsers() {
    return (() => {
      return [{
        userId: '101',
        name: 'Hardik Kaji',
        city: 'Surat'
      }, {
        userId: '102',
        name: 'Dhaval Patel',
        city: 'Ahmedabad'
      }];
    })()
  }
};
