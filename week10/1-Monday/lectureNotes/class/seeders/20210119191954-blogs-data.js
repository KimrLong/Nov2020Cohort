'use strict';
//seeder file is great when using AWS. pops information
module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('blogs', [
        {
        title: 'Promises',
        body: 'body, stuff',
        userID:3 ,
        createdAt: new Date(),
        updatedAt: new Date()

      },
        {
        title: 'Pg Promise',
        body: 'more stuff stuff',
        userID:2 ,
        createdAt: new Date(),
        updatedAt: new Date()

      },
        {
        title: 'Redux',
        body: 'jibberish',
        userID: 4,
        createdAt: new Date(),
        updatedAt: new Date()

      },
        {
        title: 'bootstrap',
        body: 'speaking in code',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },
        {
        title: 'algorithims',
        body: 'leetspeakss',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },
        {
        title: 'seattle',
        body: 'dumpin code',
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date()

      },
        {
        title: 'super',
        body: 'easy peasey',
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
