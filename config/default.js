require('dotenv').config();

module.exports = {
  host: 'localhost',
  port: 3030,
  public: '../public/',
  paginate: {
    default: 10,
    max: 50,
  },
  authentication: {
    secret:
      'b71cf110586cd99e1db8717d9cb700dcfb4380a014f03996563ff128870abd820d1a01bb87fa97d8c424d1244dbec8397b0e6117c389e09e40ffdeaeebb350a41bb6b729c60d5fecf22a710e0f46a5b2be18d55a5b1b66937cd6fa58906d30f9726ac0903626951485eb3dbb0966d356b23e7fcf9c675ace6a67abe3b43ee166dda31b4362914087ff7bf786a02131ed8e5bdabd6193643322cf237b74e90fd2b0498c6481e19f6adc461582a8bf72706a2fb7b280cff90704135b1340e815cacd69f1d37bbb2255358c18d4db7c8ebab579c0a2f800111f748f5394e13e802994968f03ce8ff6c44e76aabf84c617843abee5a6d1e469783bd3f7cdfd4b36cf',
    strategies: ['jwt', 'local'],
    path: '/authentication',
    service: 'users',
    jwt: {
      header: {
        typ: 'access',
      },
      audience: 'https://yourdomain.com',
      subject: 'anonymous',
      issuer: 'feathers',
      algorithm: 'HS256',
      expiresIn: '1d',
    },
    local: {
      entity: 'user',
      usernameField: 'email',
      passwordField: 'password',
    },
  },
  mongodb: 'mongodb://localhost:27017/blogapp',
};
