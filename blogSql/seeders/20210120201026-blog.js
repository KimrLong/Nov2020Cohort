'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('blog', [
      {
      title: 'Koolaid',
      author: 'Jim Jones',
      body: 'How to win over a crowd',
      userID: 3,
      isPublshed: true,
      publishDate: new Date()

    },
      {
      title: 'Law and Looks',
      author: 'Ted Bundy',
      body: 'How I was able to be so trusted.',
      userID:2 ,
      isPublshed: true,
      publishDate: new Date()

    },
      {
      title: 'My Family',
      author: 'Charles Manson',
      body: 'What makes a family is what they will do for you',
      userID: 4,
      isPublshed: true,
      publishDate: new Date()

    },
      {
      title: 'One Crazy Summer',
      author: 'David Berkowitz',
      body: 'I enjoyed meeting new people and writing letters in the 70s',
      userID: 1,
      isPublshed: true,
      publishDate: new Date()

    },
      {
      title: 'Zodiacs',
      author: 'Zodiac Killer',
      body: 'How they still have not identifies me.',
      userID: 1,
      isPublshed: true,
      publishDate: new Date()

    },
      {
      title: 'Clowning Around',
      author: 'John Wayne Gacy',
      body: 'Im here to tell the tale of why clowns are scary',
      userID: 2,
      isPublshed: true,
      publishDate: new Date()

    },
      {
      title: 'Black Dahlia',
      author: 'Elizabeth Short',
      body: '200 people have come forward, yet my death is a mystery',
      userID: 2,
      isPublshed: true,
      publishDate: new Date()

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
