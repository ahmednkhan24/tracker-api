export default (api) => {
  const PORT = process.env.PORT || 3000;
  const HOST = process.env.HOST || '127.0.0.1';

  const server = api.listen(PORT, HOST, () => {
    console.log('API Server has started');
    console.log(`Server running in ${process.env.NODE_ENV} mode`);
    const { address, port } = server.address();
    console.log(`running at http://${address}:${port}`);
  });
};
