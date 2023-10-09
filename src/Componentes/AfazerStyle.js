import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingLeft: 30,
        paddingRight: 30,

        height: "10%",
        width: '90%',
        borderRadius: 20,
        backgroundColor: '#0B6DA2',

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "90%",
        maxHeight: "10%"
    },
    conatiner2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: '25%',
        alignItems: "center",

    },
    texto: {
        fontSize: 26,
        color: "#031927",
        maxWidth: "75%",
    },
    dataTexto: {},
    botao: {
        backgroundColor: "#ba1200",
        width: "50%",
        height: "50%",
        borderRadius: 10,
        color: "#c8e0f4",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 25,
    },
    botaoTexto: {
        fontSize: 25,
        color: "#031927",
    },
})

export default styles