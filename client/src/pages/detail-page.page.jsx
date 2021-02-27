import { useContext, useState, useEffect } from 'react';
import { MyPokemonContext } from '../components/context/my-pokemon.context'
import { GET_POKEMON } from '../graphql/pokemon-query';
import { useQuery } from 'react-apollo';
import { capitalizeFirst } from '../utils/functions.utlis';

import { 
    DetailBody,
    LeftContainer,
    ImageContainer,
    Image,
    Name,
    CatchButton,
    ExitModal,
    SuccessText,
    SuccessInfo,
    SubmitSuccess,
    SubmitFailed,
    InputName, 
    SubmitButton,
    FailedText,
    FailedInfo,

    RightContainer,
    DetailInfo,
    InfoTitle,
    InfoTable,
    AbilitiesTable,
    MovesTable,
    Type,
    TdInfo,
    Tr,
    Th,

    ErrorMessage,
    abilityRow,
    moveRow
} from '../components/pokemon-detail/detail-page.styles';

import Spinner from '../components/spinner/spinner.component';
import ReactModal from 'react-modal';

//Use math random to decide whether we catch pokemon succesfully or not
const CatchPokemon = (setCatchForm, setModalOpen, setNicknameStatus) => {
    setModalOpen(true);
    setNicknameStatus(0);

    if (Math.random() < 0.5) {
        setCatchForm(true);
    } else {
        setCatchForm(false)
    }
}

//Check if nickname exists or not. If not, save the pokemon.
const SubmitPokemon = (myPokemonList, setMyPokemonList, nickname, pokemonName, url, setNicknameStatus) => {
    //check if nickname is emptry or just whitespaces
    if (nickname.trim() === '') {
        setNicknameStatus(-2);
        return;
    }
    
    //check nickname against the my pokemon list
    const foundPokemon = myPokemonList.myPokemon.findIndex(pokemon => pokemon.nickname === nickname.trim());
    
    //if nickname does not exist, push a new entry
    if (foundPokemon === -1) {
        setMyPokemonList({
            myPokemon: [...myPokemonList.myPokemon, {
                nickname: nickname.trim(),
                pokemonName: pokemonName,
                url: url
            }]
        })
        setNicknameStatus(1);
        return;
    } 

    setNicknameStatus(-1);
    return;
}

const DetailPage = (props) => {
    
    //passed from the all pokemon page
    const params = new URLSearchParams(props.location.search);
    const name = params.get('name');
    const url = params.get('url');

    //states set to handle 'catching pokemons'
    const [ catchForm, setCatchForm ] = useState(false);
    const [ nicknameStatus, setNicknameStatus ] = useState(0);
    const [ nickname, setNickname ] = useState("");
    const [ modalOpen, setModalOpen] = useState(false);

    //used to check if nickname exist or not
    const { myPokemonList, setMyPokemonList } = useContext(MyPokemonContext);

    //save myPokemonList to localStorage
    useEffect(() => {
        localStorage.setItem('myCachedPokemon', JSON.stringify(myPokemonList));
    }, [myPokemonList]);


    const { loading, error, data } = useQuery(GET_POKEMON, { variables: { "name": params.get('name') }});
    if (loading) return <Spinner/>;
    if (error) return <ErrorMessage>Failed in retrieving data or try accessing specific pokemon through the main page</ErrorMessage>;
    const pokemon = data.pokemon;

    return (
        <DetailBody>

            <LeftContainer>
                <ImageContainer>
                    <Image url={url} />
                </ImageContainer>
                <Name>
                    {capitalizeFirst(name)}
                </Name>
                <CatchButton onClick={() => CatchPokemon(setCatchForm, setModalOpen, setNicknameStatus)}>
                    Catch it!
                </CatchButton>

                <ReactModal 
                    isOpen={modalOpen}
                    appElement={document.getElementById('app')}
                    style={{
                        overlay: {
                        position: 'fixed',
                        backgroundColor: 'rgba(255, 255, 255, 0.75)',
                        },
                        content: {
                            position: 'absolute',
                            height: '400px',
                            //width: '600px',
                            width: '55%',
                            margin: 'auto',
                            border: '4px solid #32de84',
                            background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '20px'
                        }
                    }}
                    >
                    {
                        (catchForm === true) ? 
                        (
                            <div>
                                <ExitModal onClick={() => setModalOpen(false)}>Exit</ExitModal>
                                <SuccessText>SUCCESS!</SuccessText>
                                <SuccessInfo>You have successfully caught the pokemon, please enter a nickname</SuccessInfo>
                                {
                                    (nicknameStatus === 1) ?
                                    (
                                        <SubmitSuccess>Pokemon has been saved as your pokemon. You can exit this window</SubmitSuccess>
                                    ) : (nicknameStatus === -1) ?
                                        (<SubmitFailed>Nickname exists, please enter another nickname</SubmitFailed>) 
                                        :  (nicknameStatus === -2) ?
                                        (<SubmitFailed>Nickname cannot be empty</SubmitFailed>) : ('')
                                }
                                {
                                    (nicknameStatus !== 1) ?
                                    <div>
                                        <InputName onChange={e => setNickname(e.target.value)} />
                                        <SubmitButton onClick={() => SubmitPokemon(myPokemonList, setMyPokemonList, nickname, name, url, setNicknameStatus)}>Submit</SubmitButton>
                                    </div> : ""
                                }
                              
                            </div>
                        ) : <div>
                                <ExitModal onClick={() => setModalOpen(false)}>Exit</ExitModal>
                                <FailedText>FAILED!</FailedText>
                                <FailedInfo>You have failed to catch this pokemon. You can exit this window and try again :)</FailedInfo>
                            </div>
                    }
                    
                </ReactModal>
                
            </LeftContainer>

            <RightContainer>
                <DetailInfo>
                    <InfoTitle>Pokedex Data</InfoTitle>
                    <InfoTable borderLeft={"none"} borderRight={"none"}>
                        <Tr>
                            <TdInfo>Pokemon ID</TdInfo>
                            <TdInfo>{pokemon.id}</TdInfo>
                        </Tr>
                        <Tr>
                            <TdInfo>Types</TdInfo>
                            <TdInfo> 
                                {
                                    pokemon.types.map(({type, index}) => (
                                        <Type key={index}>{type.name + " "}</Type>
                                    )) 
                                }
                            </TdInfo>
                        </Tr>
                        <Tr>
                            <TdInfo>Height</TdInfo>
                            <TdInfo>{pokemon.height}</TdInfo>
                        </Tr>
                        <Tr>
                            <TdInfo>Weight</TdInfo>
                            <TdInfo>{pokemon.weight}</TdInfo>
                        </Tr>
                    </InfoTable>

                    <AbilitiesTable>
                        <Tr>
                            <Th>
                                Abilities
                            </Th>
                        </Tr>
                        {
                            abilityRow(pokemon.abilities)
                        }
                    </AbilitiesTable>

                    <MovesTable>
                        <Tr>
                            <Th>
                                Moves
                            </Th>
                        </Tr>
                        {
                            moveRow(pokemon.moves)
                        }
                    </MovesTable>
                </DetailInfo>
            </RightContainer>
            
            
        </DetailBody>
    )

}

export default DetailPage;

