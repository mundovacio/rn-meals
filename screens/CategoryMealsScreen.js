import React from "react";
import { useSelector } from "react-redux";
import { Platform } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
	const catId = props.navigation.getParam("categoryId");

	const availableMeals = useSelector(state => state.meals.filteredMeals);

	const displayedMeals = availableMeals.filter(
		meal => meal.categoryIds.indexOf(catId) > -1
	);
	return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
	const catId = navigationData.navigation.getParam("categoryId");
	const selectedCategory = CATEGORIES.find(cat => cat.id == catId);

	return {
		headerTitle: selectedCategory.title,
		headerStyle: {
			backgroundColor: Platform.OS === "android" ? selectedCategory.color : ""
		},
		headerTintColor:
			Platform.OS === "android" ? "white" : selectedCategory.color
	};
};

export default CategoryMealsScreen;
