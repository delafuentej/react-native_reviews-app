import { StyleSheet } from "react-native";

export const globalStyles= StyleSheet.create({
    container:{
        flex:1,
        padding:20,
         
    },
    header: {
        backgroundColor: '#69a',
        color:'white',

    },
    title:{
        fontFamily:'roboto-black',
        fontSize:18,
        backgroundColor: '#69a',
        color:'white',
       
        
    },
    paragraph: {
        marginVertical:8,
        lineHeight:20,
    },
    button: {
        width: 200,
        margin:'auto',

    },
    buttonText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily:'roboto-bold',
        color: '#fff',
    },
    reviewBodyText: {
        fontFamily:'roboto-dark',
        marginTop:6,
        marginBottom:6,


    },
    rating : {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        fontSize:20,
        fontWeight: 'bold',

    },
    ratingNumber:{
        fontSize:30,
        fontWeight: 'bold',

    },
    imgContainer: {
        height: 400,
        width:'auto',
        backgroundColor: "gray",
        borderRadius:10,
    },
    img: {
        width:'100%',
        height:'100%', 
    },
    input: {
        borderWith:2,
        borderColor: 'gray',
        padding: 10,
        fontSize: 18,
        borderRadius: 7,
        color: '#9acd32',
        marginBottom:10,
        fontFamily:'roboto-dark',
        backgroundColor:'rgba(255,255,255,0.3)',
        
    },
    errorTextInput : {
        color: 'red',
        fontFamily:'roboto-bold',
        fontSize: 15,
        marginTop:6,
        marginBottom:10,
    }



});
