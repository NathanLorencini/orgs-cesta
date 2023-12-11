import React from "react";
import { Text, StyleSheet } from "react-native";


export default function Texto({children, style}){
    let estiloPadrao = estilos.texto;

    if (style?.fontWeight === 'bold') {
        estiloPadrao = estilos.textoNegrito;
    }
    return <Text style={[style, estiloPadrao]}>{children}</Text>
}


const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})