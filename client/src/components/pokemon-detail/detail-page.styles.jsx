import styled from 'styled-components';

const size = {
    laptop: '1288px'
}

//main body of detail page
export const DetailBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    padding: 20px;
    width: 100%;
    height: 600px;
    //border: 2px solid black;

    @media only screen and (max-width:${size.laptop}) {
        width:100%;
    }

`;


// Below are most elements contained in the left container
export const LeftContainer = styled.div`
    flex-wrap: 50%;
    margin-right: 45px;
    margin-left: 10px;
`

export const ImageContainer = styled.div`
    border: 4px solid black;
    border-radius: 20px;
`

export const Image = styled.image`
    content: url('${props => props.url}');
    height: 400px;
    max-width: 100%;
`
export const Name = styled.div`
    margin-top: 10px;
    font-size: 60px;
`
export const CatchButton = styled.button`
    width: 300px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 45px;
    font-size: 20px;
    font-weight: bold;
    border-style: none;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    background-image: linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);

    :hover {
        background-position: right center;
    }

    :focus {
        border: 2px solid black;
        outline: none;
    }
`

export const ExitModal = styled.button`
    width: 50px;
    padding: 5px;
    font-size: 15px;
    border-style: none;
    text-align: center; 
    background-color: red;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    transition: 0.5s;
`

export const SuccessText = styled.div`
    font-size: 40px;
    text-align: center;
    margin-top: 40px;
    font-weight: bold;
    color: green;
`
export const SuccessInfo = styled.div`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: green;
    margin: 10px 0 20px 0;
`
export const SubmitSuccess = styled.div`
    color: green;
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
`
export const SubmitFailed = styled.div`
    color: red;
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
`
export const InputName = styled.input`
    display: block;
    font-size: 20px;
    width: 40%;
    margin: auto;
    border-radius: 10px;
`
export const SubmitButton = styled.button`
    display: block;
    width: 150px;
    height: 50px;
    margin: 20px auto 0 auto;
    font-size: 20px;
    font-weight: bold;
    border-style: none;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    background-image: linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);

    :hover {
        background-position: right center;
    
    }
`
export const FailedText = styled.div`
    font-size: 40px;
    text-align: center;
    margin-top: 40px;
    font-weight: bold;
    color: red;
`

export const FailedInfo = styled.div`
    color: red;
    text-align: center;
    font-size: 20px;
    margin-top: 25px;
    font-weight: bold;
`














//Belows are elements for the right container (mostly for tables)
export const RightContainer = styled.div`
    flex-wrap: 50%;
    font-size: 20px;
    //border: 2px solid black;
    margin-right: 10px;
`

export const DetailInfo = styled.div`

`
export const InfoTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
    padding-top: 15px;
    
    /* @media only screen and (max-width:${size.laptop}) {
        margin-top: 45px;
    } */
` 

export const InfoTable = styled.table`
    margin: 20px auto 20px auto;
    width: 400px;
    border-collapse: collapse;
    table-layout: fixed;
`

export const AbilitiesTable = styled.table`
    margin: 0 auto 20px auto;
    width: 400px;
    border-collapse: collapse;
    table-layout: fixed;
`

export const MovesTable = styled.table`
    margin: auto auto 80px auto;
    width: 400px;
    border-collapse: collapse;
    table-layout: fixed;
`

export const Type = styled.span`

`

export const TdInfo = styled.td`
    padding-top: 4px;
    padding-bottom: 4px;
    border-left: none;
    border-right: $none;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
`

export const Tr = styled.tr`
`

export const Td = styled.td`
    border: 1px solid #ddd;
`

export const Th = styled.th.attrs({
    colSpan: 2
})`
    padding-top: 4px;
    padding-bottom: 4px;
    border: 1px solid #ddd;
    text-align: center;
    background-color: #D8D8D8;
    color: black;
    grid-column: span 2;
`










//Error message in case we failed to retrieve from graphQL
export const ErrorMessage = styled.div`
    font-size: 40px;
    width: 50%;
    margin: 200px auto 0 auto;
`

//function that creates rows for each ability
//each row contains two abilities
//this function handles cases when there are odd number of abilities
export const abilityRow = (abilityList) => {
    var rows = [];

    for (let i = 0; i < abilityList.length; i = i + 2) {
        rows.push(
            <Tr key={i}>
                <Td>
                    {abilityList[i].ability.name}
                </Td>
                <Td>
                    {(abilityList[i+1]) ? abilityList[i+1].ability.name : "------"}
                </Td>
            </Tr>
        )
    }
    
    return rows;
}

//function that creates rows for each move
//each row contains mooves
//this function handles cases when there are odd number of abilities
export const moveRow = (moveList) => {
    var rows = [];

    for (let i = 0; i < moveList.length; i = i + 2) {

        //max # of rows is 3
        if (i === 6) break;

        rows.push(
            <Tr key={i}>
                <Td>
                    {moveList[i].move.name}
                </Td>
                <Td>
                    {(moveList[i+1]) ? moveList[i+1].move.name : "------"}
                </Td>
            </Tr>
        )
    }
    
    return rows;
}