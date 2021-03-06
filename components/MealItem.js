import React from "react";
import {
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	Platform,
	TouchableNativeFeedback,
	ImageBackground
} from "react-native";
import DefaultText from '../components/DefaultText';

const MealItem = props => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}

	return (
		<View style={styles.mealItem}>
			<TouchableCmp style={{ flex: 1 }} onPress={props.onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: props.imageUrl }}
							style={styles.bgImage}
						>
							<View style={styles.titleContainer}>
								<Text style={styles.title} numberOfLines={1}>
									{props.title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetails }}>
						<DefaultText>{props.duration}m</DefaultText>
						<DefaultText>{props.complexity.toUpperCase()}</DefaultText>
						<DefaultText>{props.affordability.toUpperCase()}</DefaultText>
					</View>
				</View>
			</TouchableCmp>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: "100%",
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		overflow: 'hidden',
		marginBottom: 15,
		borderWidth: 1,
		borderColor: '#ddd'
	},
	mealRow: {
		flexDirection: "row"
	},
	mealHeader: {
		height: "85%"
	},
	bgImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end"
	},
	titleContainer: {
		backgroundColor: "rgba(0,0,0,0.5)",
		paddingHorizontal: 12,
		paddingVertical: 5
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 18,
		color: "#fff",
		textAlign: "center"
	},
	mealDetails: {
		height: "15%",
		paddingHorizontal: 10,
		alignItems : 'center',
		justifyContent: "space-between"
	}
});

export default MealItem;
