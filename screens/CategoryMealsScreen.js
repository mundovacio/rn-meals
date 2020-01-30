import React from "react";
import {Platform} from 'react-native';
import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = props => {
	const catId = props.navigation.getParam("categoryId");

	const displayedMeals = MEALS.filter( 
		meal => meal.categoryIds.indexOf(catId) > -1 
	);

	const renderMealItem = itemData => {
		return (
			<MealItem 
				title = {itemData.item.title}
				affordability = {itemData.item.affordability}
				complexity = {itemData.item.complexity}
				imageUrl = {itemData.item.imageUrl}
				duration = {itemData.item.duration}
				onSelectMeal = {() => {
					props.navigation.navigate({
						routeName: "MealDetail",
						params: {
							mealId: itemData.item.id					
						}
					});
				}}
			/>
		)
	};

	return (
		<View style={styles.screen}>
			<FlatList data={displayedMeals} renderItem={renderMealItem} style={{width:'100%'}}/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = (navigationData) => {

	const catId = navigationData.navigation.getParam("categoryId");
	const selectedCategory = CATEGORIES.find(cat => cat.id == catId);

	return {
		headerTitle: selectedCategory.title,
		headerStyle: {
			backgroundColor: Platform.OS === "android" ? selectedCategory.color : ""
		},
		headerTintColor: Platform.OS === "android" ? "white" : selectedCategory.color
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 15
	}
});

export default CategoryMealsScreen;
