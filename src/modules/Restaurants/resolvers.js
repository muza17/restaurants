const model = require("./model");

module.exports = {
	Query: {
		getRestaurants: (_, { categoryId }) => {
			return model.GET_RESTAURANTS(categoryId);
		},
		getAllRestaurants: () => {
			return model.GET_ALL_RESTAURANTS();
		},
	},

	Mutation: {
		newRestaurant: async (_, { restaurant_name, categoryId }) => {
			return await model.NEW_RESTAURANT(restaurant_name, categoryId);
		},

		updateResaturant: async (_, { restaurant_name, id }) => {
			await model.UPDATE_RESTAURANT(restaurant_name, id);
			return "Updated";
		},

		deleteRestaurant: async(_, {id}) => {
			await model
		}
		
	},
};
