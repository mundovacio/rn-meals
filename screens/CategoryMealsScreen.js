import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Platform } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = props => {
	const catId = props.navigation.getParam("categoryId");

	const availableMeals = useSelector(state => state.meals.filteredMeals);

	const displayedMeals = availableMeals.filter(
		meal => meal.categoryIds.indexOf(catId) > -1
	);

	if (displayedMeals.length === 0) {
		return (
			<View style={styles.content}>
				<DefaultText>No meals found, maybe check tour filters?</DefaultText>
			</View>
		);
	} 
	
	return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
	content : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

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
