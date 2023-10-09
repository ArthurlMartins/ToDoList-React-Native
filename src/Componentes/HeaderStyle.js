import { StyleSheet } from "react-native";

const stylesHeader = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent:"center",
        alignItems: "center",

        height: '40%',
        backgroundColor: '#508AA8',
    },
    container2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        height: "20%",
        width: "60%",
    },
    selecao: {
        backgroundColor: "#031927",
        width: "60%",
        height: "75%",
        marginTop: 10,
        
        borderRadius: 10,
        color: '#508AA8'
    },
    placeholder: {
        color: '#508AA8',
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 21,
    },
    entrada: {
        fontSize: 24,
        width: "60%",
        height: "15%",
        margin: 15,
        paddingLeft: 30,
        paddingRight: 30,

        backgroundColor: "#031927",
        color: "#c8e0f4",
        borderRadius: 10,
        
    },
    botao: {
        backgroundColor: "#ba1200",
        width: "30%",
        height: "75%",
        borderRadius: 10,
        color: "#c8e0f4",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 10
    },
    cadastre: {
        fontSize: 36,
        color: "#031927",

    },
    botaoTexto: {
        fontSize: 25,
        color: "#031927",
    },
    botaoData: {
        fontSize: 24,
        width: "60%",
        height: "15%",
        margin: 15,
        display: "flex",
        justifyContent:"center",
        alignItems: "center",

        backgroundColor: "#031927",
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "#ba1200",
    },
    textData: {
        color: "#508AA8",
        fontSize: 24,
    },
})

export default stylesHeader