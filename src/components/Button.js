import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
	button: {
		fontSize:30,
		width: Dimensions.get('window').width/4,
		height:  Dimensions.get('window').height/6,
		padding: 20,
		backgroundColor: '#f0f0f0',
		textAlign: 'center',
		borderWidth: 1,
		borderColor: '#888'
	}
});

export default (props) => (
	<TouchableHighlight onPress={props.onClick}>
		<Text style={styles.button}>{props.label}</Text>
	</TouchableHighlight>
)
