import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = props => {
	const mealId = props.navigation.getParam("mealId");
	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	return (
		<View style= {styles.screen}>
			<MealDetails
				title={selectedMeal.title}
				categoryIds={selectedMeal.categoryIds}
				affordability={selectedMeal.affordability}
				complexity={selectedMeal.complexity}
				imageUrl={selectedMeal.imageUrl}
				duration={selectedMeal.duration}
				ingredientes={selectedMeal.ingredientes}
				steps={selectedMeal.steps}
				isGlutenFree={selectedMeal.isGlutenFree}
				isVegan={selectedMeal.isVegan}
				isVegetarian={selectedMeal.isVegetarian}
				isLactoseFree={selectedMeal.isLactoseFree}
			/>
            <Button title="Go back to Categories" onPress={() => { 
                props.navigation.navigate({
                    routeName: "Categories"                    
                });
            }}/>
		</View>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {

	const mealId = navigationData.navigation.getParam("mealId");
	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	return {
		headerTitle: selectedMeal.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	}
});

export default MealDetailScreen;
