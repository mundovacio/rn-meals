import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from "react-native";

const CategoryGridTile = props => {

	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}


	return (
		<View style={styles.gridItem}>
			<TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
				<View style={{ ...styles.container , ...{ backgroundColor : props.color }}}>
					<Text style={styles.title} numberOfLines={2}>{props.title}</Text>
				</View>
			</TouchableCmp>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 10,
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset : { width: 2, height: 2},
		shadowRadius: 10,
		elevation: 5
	},
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		padding: 15,
		borderRadius: 10,
		
	},
	title : {
		fontFamily: 'open-sans-bold',
		fontSize: 15,
		textAlign: 'right'
	}
});

export default CategoryGridTile;
