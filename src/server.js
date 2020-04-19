export default (api) => {
  const PORT = process.env.PORT || 3000;

  const server = api.listen(PORT, () => {
    console.log('API Server has started');
    console.log(`Server running in ${process.env.NODE_ENV} mode`);

    const { port } = server.address();
    if (process.env.NODE_ENV !== 'production') {
      console.log(`running at http://localhost:${port}`);
    }
  });
};
