import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    header: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textTopContainer: {
        flexDirection: 'column'
    },
    homeText: {
        marginLeft: 15,
        color: '#FFF',
        fontSize: 15
    },
    card: {
        margin: 15,
        width: 130,
        height: 130
    }
})