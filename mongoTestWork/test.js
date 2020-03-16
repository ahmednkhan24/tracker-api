// const userData = {
//     firstName: 'Ahmed',
//     lastName: 'Khan',
//     emailAddress: 'ahmednkhan24@gmail.com',
//   };

//   beforeAll(async () => {
//     const mongooseAttr = {
//       useCreateIndex: true,
//       useNewUrlParser: true,
//       useFindAndModify: true,
//       useUnifiedTopology: true,
//     };
//     // eslint-disable-next-line no-underscore-dangle
//     await mongoose.connect(global.__MONGO_URI__, mongooseAttr, (err) => {
//       if (err) {
//         console.error(err);
//         process.exit(1);
//       }
//     });
//   });

//   it('create & save user successfully', async (done) => {
//     const validUser = new UserModel(userData);
//     const savedUser = await validUser.save();
//     // eslint-disable-next-line no-underscore-dangle
//     expect(savedUser._id).toBeDefined();
//     expect(savedUser.timeCreated).toBeDefined();
//     expect(savedUser.firstName).toBe(userData.firstName);
//     expect(savedUser.lastName).toBe(userData.lastName);
//     expect(savedUser.emailAddress).toBe(userData.emailAddress);
//     done();
//   });