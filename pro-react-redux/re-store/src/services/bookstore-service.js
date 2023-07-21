export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAVIuV8rKVmFpYM1RNWR64HJXV6SFh_BUDQh7KvP_fBQjPu43',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://m.media-amazon.com/images/I/419zAwJJH4L.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
        // reject(new Error('Something bad happened'));
      }, 700);
    });
  }
}
