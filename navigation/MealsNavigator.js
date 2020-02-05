import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
	},
	headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};

const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen,
			navigationOptions: {
				headerTitle: "Meal Categories"
			}
		},
		CategoryMeals: CategoryMealsScreen,
		MealDetail: MealDetailScreen
	},
	{
		defaultNavigationOptions: defaultStackNavOptions
	}
);

const FavNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetail: MealDetailScreen
	},
	{
		defaultNavigationOptions: defaultStackNavOptions
	}
);

const tabScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: tabInfo => {
				return (
					<Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
				);
			},
			tabBarColor: Colors.primaryColor
		}
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			tabBarIcon: tabInfo => {
				return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
			},
			tabBarColor: Colors.accentColor
		}
	}
};

const MealsFavTabNavigator = Platform.select({
	android: createMaterialBottomTabNavigator(tabScreenConfig, {
		activeColor: "#ffffff",
		shifting: true
	}),
	ios: createBottomTabNavigator(tabScreenConfig, {
		tabBarOptions: {
			activeTintColor: Colors.accentColor
		}
	})
});

export default createAppContainer(MealsFavTabNavigator);
