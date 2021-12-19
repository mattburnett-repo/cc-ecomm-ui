// https://css-tricks.com/writing-tests-for-react-applications-using-jest-and-enzyme/

// someday I will figure out how to do this correctly...

module.exports = {
    getUserData: jest.fn(() => {
      return Promise.resolve({
      data: [
        {
          id: 1,
          username: 'asdf',
          email: 'asdf@asdf.com',
          password: 'asdf'
        }
      ]
      })
    }),
    getProductCategories: jest.fn(() => {
      return Promise.resolve({
        data: [
          {
            "category_id": 4,
            "description": "Auto"
          },
          {
              "category_id": 3,
              "description": "Health"
          },
          {
              "category_id": 1,
              "description": "Pets"
          },
          {
              "category_id": 2,
              "description": "Tech"
          }
        ]
      })
    })
  }