export default (api) => {
  const PORT = process.env.PORT || 3000;

  const server = api.listen(PORT, () => {
    console.log('API Server has started');
    console.log(`Server running in ${process.env.NODE_ENV} mode`);
    const { address, port } = server.address();
    console.log(`running at http://${address}:${port}`);
  });
};
