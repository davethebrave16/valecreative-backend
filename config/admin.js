module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'deee357dfacb13353450e5361e5569c2'),
  },
});
