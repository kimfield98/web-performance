module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
      startServerCommand: 'http-server . -p 8080',
      url: ['http://localhost:8080']
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};