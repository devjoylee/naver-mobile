import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/users', () => {
      return {
        users: [
          {
            id: 'joylee',
            password: '1234',
            name: 'Joy',
            profile: 'https://ziclife.com/wp-content/uploads/2020/08/cute-avatar-image-48.jpg',
          },
        ],
      };
    });
  },
});
