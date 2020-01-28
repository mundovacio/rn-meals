import React from "react";
import {Platform} from 'react-native';
import { View, Text, Button, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
	// const catId = props.navigation.getParam("categoryId");
	// const selectedCategory = CATEGORIES.find(cat => cat.id == catId);

	return (
		<View style={styles.screen}>
			<Text>the Category Meal Screen!</Text>
			<Button
				title="Go to Meal Details"
				onPress={() => {
					props.navigation.navigate({ routeName: "MealDetail" });
				}}
			/>
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
		alignItems: "center"
	}
});

export default CategoryMealsScreen;
