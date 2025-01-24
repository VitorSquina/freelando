import styled from "@emotion/styled"

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;

`

const InputEstilizado = styled.input `
    display: block;
    width: 100%;
`


export const CampoTexto = ({ titulo }) => {

    return(
        <LabelEstilizada>
            { titulo }
            <InputEstilizado/>
        </LabelEstilizada>
    )

}