/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-05 13:04:43 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-13 17:37:50
 */


import {
    StyleSheet
} from 'react-native';

export const appColor = {

    white: '#FFFFFF',
    black: '#000000',

    borderGray: '#CACACA',
    navyBlue: '#262D56',

    tableBlue: '#072779',
    tableLighBlue: '#ACB8FF'
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    incr_btn: {
        marginBottom: 10,
    },

    // --- Global CSS
    divider: {
        borderBottomWidth: 1,
        marginBottom: 5,
        borderBottomColor: appColor.borderGray,
        width: '100%'
    },
    spacer: {
        marginTop: 5,
        marginBottom: 5,
        width: '100%'
    },
    paragraphTag: {
        lineHeight: 20,
        fontSize: 14,
        marginBottom: 15
    },
    boldTag: {
        fontWeight: 'bold'
    },
    textCenter: {
        textAlign: 'center',
        padding: 5
    },

    paddLeftRight: {
        paddingRight: 5,
        paddingLeft: 5
    },


    // --- About us page
    AU_scollContainer: {

        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10

    },
    AU_h3: {
        fontSize: 20,
        marginBottom: 10,
        color: appColor.navyBlue
    },

    // --- Standing Page
    std_Container: {
        padding: 10
    },
    std_headerContainer: {
        backgroundColor: appColor.tableBlue,
        flexDirection: 'row'
    },
    std_bodyRow: {
        backgroundColor: appColor.tableBlue,
        flexDirection: 'row'
    },
    std_viewStyleOne: {
        height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    std_viewStylebody: {
        height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: appColor.black,
        shadowOpacity: 0.4,
    },
    std_textStyleBody: {
        textAlign: 'center',
        color: appColor.white
    },
    std_textStyle: {
        textAlign: 'center',
        color: appColor.tableLighBlue
    },

    // --- Git page
    tOfTheDay: {
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,

        fontSize: 18
    },
    gitArea: {
        padding: 5,

        display: 'flex',
        alignItems: 'center'
    },
    gitImg: {
        marginTop: 10
    }
    
});

// module.exports styles;
export default styles;
